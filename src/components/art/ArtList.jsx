import { useEffect, useState } from "react"
import { getAllArtPieces } from "../../services/artService.jsx"
import { Container } from "react-bootstrap"
import { ArtPiece } from "./ArtPiece.jsx"
import { Row } from "reactstrap"

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
        <Container
            fluid
        >
                <h5>All Pieces</h5>
                <Row>
                {artPieces.map(artPiece => {
                    return <ArtPiece 
                            artPiece={artPiece}
                            key={artPiece.id}
                            currentUser={currentUser}
                        /> 
                })}
                </Row>
    </Container>
    )
}