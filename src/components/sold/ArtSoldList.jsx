import { useEffect, useState } from "react"
import { getAllArtPieces } from "../../services/artService.jsx"
import { Container } from "react-bootstrap"
import { ArtPiece } from "../art/ArtPiece.jsx"
import { Row } from "reactstrap"

export const ArtSoldList = ({ artPiece }) => {

    const [soldArtPieces, setSoldArtPieces] = useState([])

    useEffect(() => {
        getAllArtPieces().then(artArray => {
            const soldPieces = artArray.filter(
                art => art.dateSold 
            )
            setSoldArtPieces(soldPieces)
        })
    },[])

    return (
        <Container>
            <Row>
                <h5>Sold Pieces</h5>
                {soldArtPieces.map(artPiece => {
                    return <ArtPiece 
                            artPiece={artPiece}
                            key={artPiece.id}
                        /> 
                })}
            </Row>
    </Container>
    )
}