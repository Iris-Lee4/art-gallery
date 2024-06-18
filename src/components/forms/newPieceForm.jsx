import { useState } from "react"
import { createNewArtPiece } from "../../services/artService.jsx"
import { useNavigate } from "react-router-dom"

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
                url: artPiece.url
            }
            
            createNewArtPiece(newArtPiece).then(() => {
                navigate("/all")
            })
        } else {
            window.alert("Please complete all fields")
        }
    }

    return (
        <form>
            <h2>Add New Piece to Art Gallery</h2>
                <fieldset>
                    <div>
                        <label>Name</label>
                        <input 
                            type="text"
                            placeholder="name of piece"
                            onChange={(event) => {
                                const artPieceCopy = { ...artPiece }
                                artPieceCopy.name = event.target.value
                                setArtPiece(artPieceCopy)
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Artist</label>
                        <input 
                            type="text"
                            placeholder="artist"
                            onChange={(event) => {
                                const artPieceCopy = { ...artPiece }
                                artPieceCopy.artist = event.target.value
                                setArtPiece(artPieceCopy)
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>medium</label>
                        <input 
                            type="text"
                            placeholder="medium"
                            onChange={(event) => {
                                const artPieceCopy = { ...artPiece }
                                artPieceCopy.medium = event.target.value
                                setArtPiece(artPieceCopy)
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>dimensions</label>
                        <input 
                            type="text"
                            placeholder="dimensions"
                            onChange={(event) => {
                                const artPieceCopy = { ...artPiece }
                                artPieceCopy.dimensions = event.target.value
                                setArtPiece(artPieceCopy)
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Year Completed</label>
                        <input 
                            type="year"
                            placeholder="year completed"
                            onChange={(event) => {
                                const artPieceCopy = { ...artPiece }
                                artPieceCopy.dateCompleted = event.target.value
                                setArtPiece(artPieceCopy)
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>blurb</label>
                        <input 
                            type="text"
                            placeholder="blurb"
                            onChange={(event) => {
                                const artPieceCopy = { ...artPiece }
                                artPieceCopy.blurb = event.target.value
                                setArtPiece(artPieceCopy)
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Price</label>
                        <input 
                            type="number"
                            placeholder="price in USD"
                            onChange={(event) => {
                                const artPieceCopy = { ...artPiece }
                                artPieceCopy.price = event.target.value
                                setArtPiece(artPieceCopy)
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Picture</label>
                        <input 
                            type="text"
                            placeholder="link to picture of piece"
                            onChange={(event) => {
                                const artPieceCopy = { ...artPiece }
                                artPieceCopy.url = event.target.value
                                setArtPiece(artPieceCopy)
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                <div>
                    <button
                        onClick={handleSave}
                    >
                        Submit New Art Piece
                    </button>
                </div>
            </fieldset>
        </form>
    )

}