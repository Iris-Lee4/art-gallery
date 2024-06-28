import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getArtPieceById, updateArtPiece } from "../../services/artService.jsx"
import { Container } from "react-bootstrap"
import { Button, Form, FormGroup, Input } from "reactstrap"

export const EditPieceForm = ({ currentUser }) => {

    const [currentArtPiece, setCurrentArtPiece] = useState({})

    const navigate = useNavigate()

    const {artPieceId} = useParams()


    useEffect(() => {
        getArtPieceById(artPieceId).then((artPiece) => {
            setCurrentArtPiece(artPiece)
        })
    }, [artPieceId])

    const handleInputChange = (event) => {
        const stateCopy = { ...currentArtPiece }
        stateCopy[event.target.name] = event.target.value
        setCurrentArtPiece(stateCopy)
    }

    const handleSave = (event) => {
        event.preventDefault()

        if (currentArtPiece.name && currentArtPiece.artist && currentArtPiece.medium && currentArtPiece.dimensions && currentArtPiece.dateCompleted && currentArtPiece.blurb && currentArtPiece.price && currentArtPiece.url) {
            const editedArtPiece = {
                id: currentArtPiece.id,
                name: currentArtPiece.name,
                artist: currentArtPiece.artist,
                medium: currentArtPiece.medium,
                dimensions: currentArtPiece.dimensions,
                dateCompleted: currentArtPiece.dateCompleted,
                blurb: currentArtPiece.blurb,
                price: currentArtPiece.price,
                url: currentArtPiece.url
            }
            
            updateArtPiece(editedArtPiece).then(() => {
                navigate(`/all/${currentArtPiece.id}`)
            })
        } else {
            window.alert("Please complete all fields")
        }
    }

    return (
        <Container>
           <Form>
             <h2>Edit Piece</h2>
                <FormGroup>
                        <label>Name</label>
                        <Input 
                            type="text"
                            name="name"
                            value={currentArtPiece.name}
                            onChange={handleInputChange}
                        />
                </FormGroup>
                <FormGroup>
                        <label>Artist</label>
                        <Input 
                            type="text"
                            name="artist"
                            value={currentArtPiece.artist}
                            onChange={handleInputChange}
                        />
                </FormGroup>
                <FormGroup>
                        <label>medium</label>
                        <Input 
                            type="text"
                            name="medium"
                            value={currentArtPiece.medium}
                            onChange={handleInputChange}
                        />
                </FormGroup>
                <FormGroup>
                        <label>dimensions</label>
                        <Input 
                            type="text"
                            name="dimensions"
                            value={currentArtPiece.dimensions}
                            onChange={handleInputChange}
                        />
                </FormGroup>
                <FormGroup>
                        <label>Year Completed</label>
                        <Input 
                            type="year"
                            name="dateCompleted"
                            value={currentArtPiece.dateCompleted}
                            onChange={handleInputChange}
                        />
                </FormGroup>
                <FormGroup>
                        <label>blurb</label>
                        <Input 
                            type="textarea"
                            name="blurb"
                            value={currentArtPiece.blurb}
                            onChange={handleInputChange}
                        />
                </FormGroup>
                <FormGroup>
                        <label>Price</label>
                        <Input 
                            type="string"
                            name="price"
                            value={currentArtPiece.price}
                            onChange={handleInputChange}
                        />
                </FormGroup>
                <FormGroup>
                        <label>Picture</label>
                        <Input 
                            type="text"
                            name="url"
                            value={currentArtPiece.url}
                            onChange={handleInputChange}
                        />
                </FormGroup>
                <FormGroup>
                    <Button
                        onClick={handleSave}
                    >
                        Submit Changes
                    </Button>
            </FormGroup>
         </Form>
    </Container>
    )
}