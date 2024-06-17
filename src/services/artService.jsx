export const getAllArtPieces = () => {
    return fetch('http://localhost:8088/pieces')
    .then((res) => res.json())
}