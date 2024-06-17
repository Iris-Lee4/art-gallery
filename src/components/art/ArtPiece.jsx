import { Card, CardBody, CardSubtitle, CardTitle, ListGroup, ListGroupItem } from "react-bootstrap"

export const ArtPiece = ({ artPiece }) => {

    return (
        <Card
            key={artPiece.id}
            style={{
                width: '18rem'
                    }}
         >
            <CardBody>
                <CardTitle tag="h5">
                    {artPiece.name}
                 </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {artPiece.artist}
                </CardSubtitle>
                </CardBody>
                <img
                    alt="Card cap"
                    src={artPiece.url}
                    width="100%"
                />
            <ListGroup>
                <ListGroupItem>
                    {artPiece.blurb}
                </ListGroupItem>
            </ListGroup>
        </Card>              
    )

}