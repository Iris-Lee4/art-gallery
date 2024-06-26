
import { useNavigate } from "react-router-dom"
import { Card } from "reactstrap"

export const ArtPiece = ({ artPiece }) => {

    const navigate = useNavigate()

    return (
        <Card
            key={artPiece.id}
            style={{
                width: '18rem'
                    }}
            color="light"
            outline={false}
            
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