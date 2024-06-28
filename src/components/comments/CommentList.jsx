// import { useEffect, useState } from "react"
// import { getCommentsByArtPieceId } from "../../services/commentService.jsx"
// import { CardSubtitle, ListGroup, ListGroupItem } from "reactstrap"

// export const CommentList = ({ currentUser, artPieceId }) => {
//     const [selectComments, setSelectedComments] = useState([])

//     useEffect(() => {
        
//         getAndSetComments(artPieceId)

//     }, [artPieceId])
    
//     const getAndSetComments = (artPieceId) => {
//         getCommentsByArtPieceId(artPieceId).then((data) => {
//             setSelectedComments(data)
//         })
//     }

//     return (
//         <>
//         <CardSubtitle>Comments</CardSubtitle>
//         <ListGroup>
//             {selectComments.map(comment => {
//                 return (
//                     <ListGroupItem
//                         key={comment.id}
//                         currentUser={currentUser}
//                     >
//                         {comment.comment}

//                         - {comment.user.firstName} {comment.user.lastName}
//                     </ListGroupItem>
//                 )
//             })}
//         </ListGroup>
//         </>
//     )
// }

