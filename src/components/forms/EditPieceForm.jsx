import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getArtPieceById, updateArtPiece } from "../../services/artService.jsx"

export const EditPieceForm = ( { currentUser }) => {

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
        <form>
        <h2>Edit Piece</h2>
            <fieldset>
                <div>
                    <label>Name</label>
                    <input 
                        type="text"
                        name="name"
                        value={currentArtPiece.name}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Artist</label>
                    <input 
                        type="text"
                        name="artist"
                        value={currentArtPiece.artist}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>medium</label>
                    <input 
                        type="text"
                        name="medium"
                        value={currentArtPiece.medium}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>dimensions</label>
                    <input 
                        type="text"
                        name="dimensions"
                        value={currentArtPiece.dimensions}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Year Completed</label>
                    <input 
                        type="year"
                        name="dateCompleted"
                        value={currentArtPiece.dateCompleted}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>blurb</label>
                    <input 
                        type="text"
                        name="blurb"
                        value={currentArtPiece.blurb}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Price</label>
                    <input 
                        type="string"
                        name="price"
                        value={currentArtPiece.price}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Picture</label>
                    <input 
                        type="text"
                        name="url"
                        value={currentArtPiece.url}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
            <div>
                <button
                    onClick={handleSave}
                >
                    Submit Changes
                </button>
            </div>
        </fieldset>
    </form>
    )
}