import { useEffect, useState } from "react"
import { getLikedPiecesByUser } from "../../services/likeService.jsx"
import { Container, Row } from "reactstrap"
import { ArtPiece } from "../art/ArtPiece.jsx"

export const LikedList = ({ currentUser }) => {

    const [userLikedPieces, setUserLikedPieces] = useState([])

    const getAndSetUserLikedPieces = () => {
        getLikedPiecesByUser(currentUser.id).then(artArray => {
            setUserLikedPieces(artArray)
        })
    }

    useEffect(() => {
        getAndSetUserLikedPieces()
    },[currentUser])

    return (
        <Container>
                <h5>Liked Pieces</h5>
                <Row>
                {userLikedPieces.map(likedArtPiece => {
                    return <ArtPiece
                            artPiece={likedArtPiece.piece}
                            key={likedArtPiece.id}
                            currentUser={currentUser}
                            getAndSetUserLikedPieces={getAndSetUserLikedPieces}
                        /> 
                })}
                </Row>
    </Container>
    )

}
