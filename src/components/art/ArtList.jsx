import { useEffect, useState } from "react"
import { getAllArtPieces } from "../../services/artService.jsx"
import { Container } from "react-bootstrap"
import { ArtPiece } from "./ArtPiece.jsx"

export const ArtList = ({ currentUser }) => {

    const [artPieces, setArtPieces] = useState([])

    const getAndSetPieces = () => {
        getAllArtPieces().then(artArray => {
            setArtPieces(artArray)
        })
    }

    useEffect(() => {
        getAndSetPieces()

    },[])

    return (
        <Container>
            <article>
                <h5>All Pieces</h5>
                {artPieces.map(artPiece => {
                    return <ArtPiece 
                            artPiece={artPiece}
                            key={artPiece.id}
                            currentUser={currentUser}
                        /> 
                })}
            </article>
    </Container>
    )
}