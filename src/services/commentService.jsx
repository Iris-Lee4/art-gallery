export const createComment = (comment) => {
    return fetch('http://localhost:8088/comments', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
}

export const getCommentsByArtPieceById = (artPieceId) => {
    return fetch(`http://localhost:8088/comments?pieceId=${artPieceId}&_expand=user`)
    .then((res) => res.json())
}