import { useEffect, useState } from "react"
import { getAllArtPieces } from "../../services/artService.jsx"
import { Container } from "react-bootstrap"
import { ArtPiece } from "./ArtPiece.jsx"
import { Row } from "reactstrap"

export const ArtList = ({ currentUser }) => {

    const [artPieces, setArtPieces] = useState([])

    const getAndSetPieces = () => {

        const shuffle = (array) => {
            for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
          }

        getAllArtPieces()
            .then(artArray => {
            shuffle(artArray)
            setArtPieces(artArray)
        })
    }

    useEffect(() => {
        getAndSetPieces()

    },[])

    return (
        <Container
            // fluid
            margin="0"
        >
            <h2>All</h2>
                <Row
                    fluid="xs"
                    xs="2"
                    margin="0"

                >
                {artPieces.map(artPiece => {
                    return <ArtPiece 
                            artPiece={artPiece}
                            key={artPiece.id}
                            currentUser={currentUser}
                        /> 
                })}
                </Row>
    </Container>
    )
}