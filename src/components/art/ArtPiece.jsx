
import { useNavigate } from "react-router-dom"
import { Card, CardImg } from "reactstrap"

export const ArtPiece = ({ artPiece }) => {

    const navigate = useNavigate()

    return (
        <Card
            key={artPiece.id}
            style={{
                width: '30%',
                height: '30%'
                    }}
            color="light"
            outline={false}
            className="border-0"
            
         >
                <CardImg
                    alt="Card"
                    src={artPiece.url}
                    width="100%"
                    id="Popover1"
                    onClick={() => {
                        navigate(`/all/${artPiece.id}`)
                    }}
                />
        </Card>              
    )

}