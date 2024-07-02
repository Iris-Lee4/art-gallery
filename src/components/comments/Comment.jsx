
import { ListGroupItem } from "reactstrap"

export const Comment = ({ comment, currentUser }) => {

    return (
        <ListGroupItem
        key={comment.id}
        currentUser={currentUser}
        color="dark"
        >
        {comment.comment}

        - {comment.user.firstName} {comment.user.lastName}
        </ListGroupItem>         
    )

}
