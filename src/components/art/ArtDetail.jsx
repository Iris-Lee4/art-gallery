import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteArtPiece, getArtPieceById } from "../../services/artService.jsx"
import { Button, Card, CardBody, CardSubtitle, CardTitle, Container, ListGroup, ListGroupItem } from "reactstrap"

export const ArtDetail = ( { currentUser }) => {

    const [currentArtPiece, setCurrentArtPiece] = useState({})

    const { artPieceId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getArtPieceById(artPieceId).then((data) => {
            setCurrentArtPiece(data)
        })
    }, [artPieceId])

    const handleDelete = () => {
        deleteArtPiece(currentArtPiece.id)
            .then(() => {
            navigate("/")
            })
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
        </Container>
    )
}

// {currentUser.isStaff && !currentArtPiece.dateSold && (
//     <Button>
//         Remove Piece from Gallery
//     </Button>
// )}