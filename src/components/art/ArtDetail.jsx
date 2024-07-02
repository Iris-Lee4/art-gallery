import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteArtPiece, getArtPieceById } from "../../services/artService.jsx"
import { Badge, Button, Card, CardBody, CardSubtitle, CardTitle, Container, Input, ListGroup, ListGroupItem } from "reactstrap"
import { createComment, getCommentsByArtPieceId } from "../../services/commentService.jsx"
import { createLike, deleteLike, getLikesByArtPieceId } from "../../services/likeService.jsx"
import { purchaseArtPiece } from "../../services/purchaseService.jsx"
import { Comment } from "../comments/Comment.jsx"
import { ArtPieceDetails } from "./ArtPieceDetails.jsx"

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

        
    const handlePurchase = (event) => {

        const purchasedArtPiece = {
                id: currentArtPiece.id,
                name: currentArtPiece.name,
                artist: currentArtPiece.artist,
                medium: currentArtPiece.medium,
                dimensions: currentArtPiece.dimensions,
                dateCompleted: currentArtPiece.dateCompleted,
                blurb: currentArtPiece.blurb,
                price: currentArtPiece.price,
                url: currentArtPiece.url,
                userId: currentUser.id,
                dateSold: new Date(),
            }
            
            purchaseArtPiece(purchasedArtPiece).then(() => {
                navigate(`/purchased`)
            })

    }

    return (
        <Container
            fluid
            style={{
                width: '50rem'
            }}
        >
            <ListGroup>
                <ArtPieceDetails currentArtPiece={currentArtPiece} />
            </ListGroup>
            <ListGroup
                flush
            >
                <ListGroupItem
                    color=""
                >
                   Liked by:   
                   <Badge>
                    {countLikes}
                   </Badge>
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
            {/* if the logged in user is a customer and the piece has not been purchased, a button to purchase the piece will display */}
            {!currentUser?.isStaff && !currentArtPiece.dateSold && (
                        <Button
                            onClick={(e) => {
                                e.preventDefault
                                handlePurchase()
                            }}
                        >
                            Purchase
                        </Button>
                    )}


            {/* if the logged in user is an admin & the piece has not been purchased, a button to edit and a button to remove the piece will display */}
            {currentUser?.isStaff && !currentArtPiece.dateSold && (
                         <div>
                         <Button
                            onClick={(e) => {
                                e.preventDefault
                                navigate(`/all/edit/${currentArtPiece.id}`)
                            }}
                            color="dark"
                        >
                            Edit
                        </Button>                       
                        <Button
                            onClick={(e) => {
                                e.preventDefault
                                handleDelete()
                            }}
                        >
                            Remove Piece from Gallery
                        </Button>
                        </div>
                    )
                    }
             <ListGroup
                color="dark"
                inverse
             >
                <h5>Comments</h5>
                <ListGroup
                flush
                >
                    {selectComments.map(comment => {
                        return (
                            <Comment
                            comment={comment}
                            key={comment.id}
                            currentUser={currentUser}
                            />
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
            </ListGroup>   
        </Container>
    )
}

