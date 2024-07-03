import { useEffect, useState } from "react"
import { getAllArtPieces } from "../../services/artService.jsx"
import { Container } from "react-bootstrap"
import { ArtPiece } from "./ArtPiece.jsx"

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
            <article>
                <h2>Sold Pieces</h2>
                {soldArtPieces.map(artPiece => {
                    return <ArtPiece 
                            artPiece={artPiece}
                            key={artPiece.id}
                        /> 
                })}
            </article>
    </Container>
    )
}