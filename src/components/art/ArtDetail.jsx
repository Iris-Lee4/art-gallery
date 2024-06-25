import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteArtPiece, getArtPieceById } from "../../services/artService.jsx"
import { Button, Card, CardBody, CardSubtitle, CardTitle, Container, Input, ListGroup, ListGroupItem } from "reactstrap"
import { createComment, getCommentsByArtPieceId } from "../../services/commentService.jsx"
import { createLike, deleteLike, getLikesByArtPieceId } from "../../services/likeService.jsx"

export const ArtDetail = ( { currentUser }) => {

    const [currentArtPiece, setCurrentArtPiece] = useState({})
    const [comment, setComment] = useState({})
    const [selectComments, setSelectedComments] = useState([])
    const [likes, setLikes] = useState([])
    const [countLikes, setCountLikes] = useState("")
    const [likedByUser, setLikedByUser] = useState(false)
    const [userLiked, setUserLiked] = useState({})

    const { artPieceId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getArtPieceById(artPieceId).then((data) => {
            setCurrentArtPiece(data)
        })

        getAndSetComments(artPieceId)

        getLikesByArtPieceId(artPieceId)
            .then((likesArray) => {
                setLikes(likesArray)
            })
     
        setLikedByUser(likes.some((like) => like.userId === currentUser.id))
        
        const countNumberLikes = likes.length
            setCountLikes(countNumberLikes)

        const userLikedObj = likes.find((like) => like.userId === currentUser.id)
            setUserLiked(userLikedObj)
            console.log(userLiked)

    }, [artPieceId, likes.length, currentUser, likedByUser])
    


    const getAndSetComments = (artPieceId) => {
        getCommentsByArtPieceId(artPieceId).then((data) => {
            setSelectedComments(data)
        })
    }

    const getAndSetLikes = (artPieceId) => {
        getLikesByArtPieceId(artPieceId)
        .then((data) => {
            setLikes(data)
        })
    }

    const handleDelete = () => {
        deleteArtPiece(currentArtPiece.id)
            .then(() => {
            navigate("/")
            })
    }

    const handleLike = () => {
        const newLike = {
            userId: currentUser.id,
            pieceId: parseInt(artPieceId),
            liked: true
        }

        createLike(newLike)
        .then(() => {
            getAndSetLikes(artPieceId)
        })
    }

    const handleUnlike = () => {
        deleteLike(userLiked.id)
        .then(() => {
            getAndSetLikes(artPieceId)
        })
    }

    const handleSave = () => {
        event.preventDefault()

        if (comment.comment) {
            const newComment = {
                userId: currentUser.id,
                pieceId: parseInt(artPieceId),
                comment: comment.comment,
                timeStamp: new Date()
            }

            createComment(newComment)
                .then(() => {
                    getAndSetComments(artPieceId),
                    setComment({comment: ''})
                })
        } else {
            window.alert("Please leave a comment before submitting")
        }
    }

    return (
        <Container>
            <Card
            key={currentArtPiece.id}
            style={{
                width: '18rem'
                    }}
         >
            <CardBody>
                <CardTitle tag="h5">
                    {currentArtPiece.name}
                 </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {currentArtPiece.artist}
                </CardSubtitle>
                </CardBody>
                <img
                    alt="Card cap"
                    src={currentArtPiece.url}
                    width="100%"
                />
            <ListGroup>
                <ListGroupItem>
                    {currentArtPiece.blurb}
                </ListGroupItem>
                <ListGroupItem>
                    {currentArtPiece.medium}
                </ListGroupItem>
                <ListGroupItem>
                    {currentArtPiece.dateCompleted}
                </ListGroupItem>
                <ListGroupItem>
                    {currentArtPiece.price}
                </ListGroupItem>
            </ListGroup>
            <ListGroup>
                <ListGroupItem>
                   Liked by: {countLikes}
                </ListGroupItem>
            </ListGroup>
            {/* if the logged in user is a customer, a button to like the piece will display */}
            {!currentUser?.isStaff && likedByUser === false && (
                        <Button
                            onClick={handleLike}
                        >
                            Like
                        </Button>
                    )}
                    
            {/* if the logged in user is a customer and the customer has liked the piece, a button to unlike the piece will display */}
            {!currentUser?.isStaff && likedByUser === true && (
                        <Button
                            onClick={(e) => {
                                e.preventDefault
                                handleUnlike()
                            }}
                        >
                            Unlike
                        </Button>
                    )}

            {/* if the logged in user is an admin & the piece has not been purchased, a button to remove the piece will display */}
            {currentUser?.isStaff && !currentArtPiece.dateSold ? (
                        <Button
                            onClick={(e) => {
                                e.preventDefault
                                handleDelete()
                            }}
                        >
                            Remove Piece from Gallery
                        </Button>
                    ) : (
                        ""
                    )}

             </Card> 
             <Card>
                    <CardSubtitle>Comments</CardSubtitle>
                    <ListGroup>
                        {selectComments.map(comment => {
                            return (
                                <ListGroupItem
                                    key={comment.id}
                                    currentUser={currentUser}
                                >
                                    {comment.comment}

                                    - {comment.user.firstName} {comment.user.lastName}
                                </ListGroupItem>
                            )
                        })}
                    </ListGroup>
                    <Input
                        type="textarea"
                        placeholder="Leave a Comment"
                        value={comment.comment}
                        onChange={(event) => {
                            const commentCopy = { ...comment }
                            commentCopy.comment = event.target.value
                            setComment(commentCopy)
                        }}
                    >
                    </Input>
                    <Button
                        onClick={handleSave}
                    >
                        Submit
                    </Button>
            </Card>   
        </Container>
    )
}

// {currentUser.isStaff && !currentArtPiece.dateSold && (
//     <Button>
//         Remove Piece from Gallery
//     </Button>
// )}

