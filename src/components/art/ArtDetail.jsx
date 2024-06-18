import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArtPieceById } from "../../services/artService.jsx"
import { Card, CardBody, CardSubtitle, CardTitle, Container, ListGroup, ListGroupItem } from "reactstrap"

export const ArtDetail = () => {

    const [currentArtPiece, setCurrentArtPiece] = useState({})

    const { artPieceId } = useParams()

    useEffect(() => {
        getArtPieceById(artPieceId).then((data) => {
            setCurrentArtPiece(data)
        })
    }, [artPieceId])

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
             </Card>    
        </Container>
    )
}