import { Card, CardBody, CardSubtitle, CardTitle, ListGroup, ListGroupItem } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const ArtPiece = ({ artPiece }) => {

    const navigate = useNavigate()

    return (
        <Card
            key={artPiece.id}
            style={{
                width: '18rem'
                    }}
         >
            {/* <CardBody>
                <CardTitle tag="h5">
                    {artPiece.name}
                 </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {artPiece.artist}
                </CardSubtitle>
                </CardBody> */}
                <img
                    alt="Card cap"
                    src={artPiece.url}
                    width="100%"
                    onClick={() => {
                        navigate(`/all/${ artPiece.id}`)
                    }}
                />
            {/* <ListGroup>
                <ListGroupItem>
                    {artPiece.blurb}
                </ListGroupItem>
            </ListGroup> */}
        </Card>              
    )

}