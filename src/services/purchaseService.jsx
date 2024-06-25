export const getPurchasedByUserId = (userId) => {
    return fetch(`http://localhost:8088/pieces?userId=${userId}`)
    .then((res) => res.json())
}

export const purchaseArtPiece = (artPiece) => {
    return fetch(`http://localhost:8088/pieces/${artPiece.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(artPiece)
    })
}