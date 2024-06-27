
import { useNavigate } from "react-router-dom"
import { Card, Popover, PopoverHeader } from "reactstrap"

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
                <img
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


// import { useNavigate } from "react-router-dom"
// import { Card } from "reactstrap"

// export const ArtPiece = ({ artPiece }) => {

//     const navigate = useNavigate()

//     return (
//         <Card
//             key={artPiece.id}
//             style={{
//                 width: '18rem'
//                     }}
//             color="light"
//             outline={false}
            
//          >
//                 <img
//                     alt="Card cap"
//                     src={artPiece.url}
//                     width="100%"
//                     onClick={() => {
//                         navigate(`/all/${artPiece.id}`)
//                     }}
//                 />
//         </Card>              
//     )

// }