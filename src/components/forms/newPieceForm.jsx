import { useState } from "react"

export const NewPieceForm = ({ currentUser }) => {
    const [artPiece, setArtPiece] = useState({ name: "", artist: "", medium: "", dimensions: "", dateCompleted: "", blurb: "", price: "", url: "" })

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
                                const artPieceCopy => { ...artPiece }
                                artPieceCopy.name = event.target.value
                                setArtPiece(artPieceCopy)
                            }}
                        />
                    </div>
                </fieldset>
        </form>
    )

}