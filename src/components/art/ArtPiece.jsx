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
                <img
                    alt="Card cap"
                    src={artPiece.url}
                    width="100%"
                    onClick={() => {
                        navigate(`/all/${artPiece.id}`)
                    }}
                />
        </Card>              
    )

}