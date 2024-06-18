export const getAllArtPieces = () => {
    return fetch('http://localhost:8088/pieces')
    .then((res) => res.json())
}

export const getArtPieceById = (artPieceId) => {
    return fetch(`http://localhost:8088/pieces/${artPieceId}`)
    .then((res) => res.json())
}

export const createNewArtPiece = (artPiece) => {
    return fetch('http://localhost:8088/pieces', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(artPiece)
    })
}