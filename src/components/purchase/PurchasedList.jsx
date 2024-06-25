import { useEffect, useState } from "react"
import { getLikedPiecesByUser } from "../../services/likeService.jsx"
import { Container } from "reactstrap"
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
            <article>
                <h5>Purchased Pieces</h5>
                {userPurchasedPieces.map(purchasedArtPiece => {
                    return <ArtPiece
                            artPiece={purchasedArtPiece}
                            key={purchasedArtPiece.id}
                            currentUser={currentUser}
                        /> 
                })}
            </article>
    </Container>
    )

}
