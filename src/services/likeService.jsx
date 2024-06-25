export const createLike = (like) => {
    return fetch('http://localhost:8088/likedPieces', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(like)
    })
}

export const getLikesByArtPieceId = (artPieceId) => {
    return fetch(`http://localhost:8088/likedPieces?pieceId=${artPieceId}&_expand=user`)
    .then((res) => res.json())
}


export const deleteLike = (likeId) => {
    return fetch(`http://localhost:8088/likedPieces/${likeId}`, {
        method: "DELETE",
    })
}

export const getLikedPiecesByUser = (userId) => {
    return fetch(`http://localhost:8088/likedPieces?userId=${userId}&_expand=piece`)
    .then((res) => res.json())
}