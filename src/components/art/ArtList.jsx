import { useEffect, useState } from "react"
import { getAllArtPieces } from "../../services/artService.jsx"
import { Container } from "react-bootstrap"
import { ArtPiece } from "./ArtPiece.jsx"

export const ArtList = ({ artPiece }) => {

    const [artPieces, setArtPieces] = useState([])

    useEffect(() => {
        getAllArtPieces().then(artArray => {
            setArtPieces(artArray)
        })
    },[])

    return (
        <Container>
            <article>
                <h5>All Pieces</h5>
                {artPieces.map(artPiece => {
                    return <ArtPiece 
                            artPiece={artPiece}
                            key={artPiece.id}
                        /> 
                })}
            </article>
    </Container>
    )
}