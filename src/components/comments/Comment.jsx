
import { ListGroupItem } from "reactstrap"

export const Comment = ({ comment, currentUser }) => {

    return (
        <ListGroupItem
        key={comment.id}
        currentUser={currentUser}
        >
        {comment.comment}

        - {comment.user.firstName} {comment.user.lastName}
        </ListGroupItem>         
    )

}




