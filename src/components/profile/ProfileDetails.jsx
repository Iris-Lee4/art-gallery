import { useEffect, useState } from "react"
import { getUserById } from "../../services/userService.jsx"
import { Container, ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap"

export const UserDetails = ({ currentUser }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        getUserById(currentUser?.id)
        .then((data) => {
            setUser(data)
        })
    }, [currentUser])

    return (
        <Container>
            <ListGroup>
                <h2>
                    My Profile
                </h2>
                <ListGroupItem> 
                    Name: {user.firstName} {user.lastName}
                </ListGroupItem>
                <ListGroupItem>
                        Email: {user.email}
                </ListGroupItem>
            </ListGroup>
        </Container>
    )
}