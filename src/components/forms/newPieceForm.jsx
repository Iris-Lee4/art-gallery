import { useState } from "react"
import { createNewArtPiece } from "../../services/artService.jsx"
import { useNavigate } from "react-router-dom"
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"

export const NewPieceForm = ({ currentUser }) => {
    const [artPiece, setArtPiece] = useState({ name: "", artist: "", medium: "", dimensions: "", dateCompleted: "", blurb: "", price: "", url: "" })

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (artPiece.name && artPiece.artist && artPiece.medium && artPiece.dimensions && artPiece.dateCompleted && artPiece.blurb && artPiece.price && artPiece.url) {
            const newArtPiece = {
                name: artPiece.name,
                artist: artPiece.artist,
                medium: artPiece.medium,
                dimensions: artPiece.dimensions,
                dateCompleted: artPiece.dateCompleted,
                blurb: artPiece.blurb,
                price: artPiece.price,
                url: artPiece.url,
                userId: 1,
                dateSold: ""
            }
            
            createNewArtPiece(newArtPiece).then(() => {
                navigate("/all")
            })
        } else {
            window.alert("Please complete all fields")
        }
    }

    return (
        <Container>
            <Form>
                <h2>Add New Piece to Art Gallery</h2>
                    <FormGroup>
                            <Label>Name</Label>
                            <Input
                                type="text"
                                placeholder="name of piece"
                                onChange={(event) => {
                                    const artPieceCopy = { ...artPiece }
                                    artPieceCopy.name = event.target.value
                                    setArtPiece(artPieceCopy)
                                }}
                            />
                    </FormGroup>
                    <FormGroup>
                            <Label>Artist</Label>
                            <Input
                                type="text"
                                placeholder="artist"
                                onChange={(event) => {
                                    const artPieceCopy = { ...artPiece }
                                    artPieceCopy.artist = event.target.value
                                    setArtPiece(artPieceCopy)
                                }}
                            />
                    </FormGroup>
                    <FormGroup>
                        
                            <Label>medium</Label>
                            <Input
                                type="text"
                                placeholder="medium"
                                onChange={(event) => {
                                    const artPieceCopy = { ...artPiece }
                                    artPieceCopy.medium = event.target.value
                                    setArtPiece(artPieceCopy)
                                }}
                            />
                    </FormGroup>
                    <FormGroup>
                        
                            <Label>dimensions</Label>
                            <Input
                                type="text"
                                placeholder="dimensions"
                                onChange={(event) => {
                                    const artPieceCopy = { ...artPiece }
                                    artPieceCopy.dimensions = event.target.value
                                    setArtPiece(artPieceCopy)
                                }}
                            />
                    </FormGroup>
                    <FormGroup>
                        
                            <Label>Year Completed</Label>
                            <Input
                                type="year"
                                placeholder="year completed"
                                onChange={(event) => {
                                    const artPieceCopy = { ...artPiece }
                                    artPieceCopy.dateCompleted = event.target.value
                                    setArtPiece(artPieceCopy)
                                }}
                            />
                    </FormGroup>
                    <FormGroup>
                        
                            <Label>blurb</Label>
                            <Input
                                type="textarea"
                                placeholder="a few words about the work or the artist"
                                onChange={(event) => {
                                    const artPieceCopy = { ...artPiece }
                                    artPieceCopy.blurb = event.target.value
                                    setArtPiece(artPieceCopy)
                                }}
                            />
                    </FormGroup>
                    <FormGroup>
                        
                            <Label>Price</Label>
                            <Input
                                type="number"
                                placeholder="price in USD"
                                onChange={(event) => {
                                    const artPieceCopy = { ...artPiece }
                                    artPieceCopy.price = event.target.value
                                    setArtPiece(artPieceCopy)
                                }}
                            />
                    </FormGroup>
                    <FormGroup>
                        
                            <Label>Picture</Label>
                            <Input
                                type="text"
                                placeholder="link to picture of piece"
                                onChange={(event) => {
                                    const artPieceCopy = { ...artPiece }
                                    artPieceCopy.url = event.target.value
                                    setArtPiece(artPieceCopy)
                                }}
                            />
                    </FormGroup>
                    <FormGroup>
                        <Button
                            onClick={handleSave}
                        >
                            Submit New Art Piece
                        </Button>
                </FormGroup>
            </Form>
        </Container>
    )

}