import { useEffect, useState } from "react"
import { getLikedPiecesByUser } from "../../services/likeService.jsx"
import { Container, Row } from "reactstrap"
import { ArtPiece } from "../art/ArtPiece.jsx"
import { getPurchasedByUserId } from "../../services/purchaseService.jsx"

export const PurchasedList = ({ currentUser }) => {

    const [userPurchasedPieces, setUserPurchasedPieces] = useState([])

    const getAndSetUserPurchasedPieces = () => {
        getPurchasedByUserId(currentUser.id).then(artArray => {
            setUserPurchasedPieces(artArray)
        })
    }

    useEffect(() => {
        getAndSetUserPurchasedPieces()
    },[currentUser])

    return (
        <Container>
                <Row>
                <h2>Purchased Pieces</h2>
                {userPurchasedPieces.map(purchasedArtPiece => {
                    return <ArtPiece
                            artPiece={purchasedArtPiece}
                            key={purchasedArtPiece.id}
                            currentUser={currentUser}
                        /> 
                })}
                </Row>
    </Container>
    )

}
