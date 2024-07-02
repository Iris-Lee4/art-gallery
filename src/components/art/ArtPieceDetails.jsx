
import { ListGroup } from "react-bootstrap"
import { Card, CardBody, CardColumns, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, ListGroupItem } from "reactstrap"

export const ArtPieceDetails = ({ currentArtPiece }) => {

    return (
        <Card
        key={currentArtPiece.id}
        color="dark"
        inverse
        fluid
     >
            <CardTitle tag="h5">
                {currentArtPiece.name}
             </CardTitle>
            <CardSubtitle
                // className="mb-2 text-muted"
                tag="h6"
            >
                {currentArtPiece.artist}
            </CardSubtitle>
            <CardImg
                alt="Card cap"
                src={currentArtPiece.url}
                width="100%"
            />
            <CardBody>
                <CardText>
                {currentArtPiece.dateCompleted} 
                </CardText>
                <CardText>
                {currentArtPiece.medium} 
                </CardText>
                <CardText>
                {currentArtPiece.blurb}
                </CardText>
                <CardText>
                ${currentArtPiece.price}
                </CardText>
            </CardBody>  
        </Card>
    )

}




