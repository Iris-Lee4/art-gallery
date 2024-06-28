
import { ListGroup } from "react-bootstrap"
import { Card, CardBody, CardSubtitle, CardTitle, ListGroupItem } from "reactstrap"

export const ArtPieceDetails = ({ currentArtPiece }) => {

    return (
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
                ${currentArtPiece.price}
            </ListGroupItem>
        </ListGroup>     
        </Card>
    )

}




