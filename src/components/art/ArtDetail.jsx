import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteArtPiece, getArtPieceById } from "../../services/artService.jsx"
import { Button, Card, CardBody, CardSubtitle, CardTitle, Container, Input, ListGroup, ListGroupItem } from "reactstrap"
import { createComment, getCommentsByArtPieceById } from "../../services/commentService.jsx"

export const ArtDetail = ( { currentUser }) => {

    const [currentArtPiece, setCurrentArtPiece] = useState({})
    const [comment, setComment] = useState({})
    const [selectComments, setSelectedComments] = useState([])

    const { artPieceId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getArtPieceById(artPieceId).then((data) => {
            setCurrentArtPiece(data)
        })

        getAndSetComments(artPieceId)

    }, [artPieceId])

    const getAndSetComments = (artPieceId) => {
        getCommentsByArtPieceById(artPieceId).then((data) => {
            setSelectedComments(data)
        })
    }

    const handleDelete = () => {
        deleteArtPiece(currentArtPiece.id)
            .then(() => {
            navigate("/")
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
                    setComment({})
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
            {/* if the logged in user is an admin & the piece has not been purchased, a button to remove the piece will display */}
                    {currentUser?.isStaff && !currentArtPiece.dateSold ? (
                        <Button
                            onClick={handleDelete}
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