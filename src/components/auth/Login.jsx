import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Register } from "./Register.jsx"
import { getUserByEmail } from "../../services/userService.jsx"
import { Button, Container, Form, FormGroup } from "reactstrap"

export const Login = () => {
  const [email, set] = useState("")
  const navigate = useNavigate()

  //when user clicks on login store login in local storage then navigate back to home
  //simulation to test different users in application - not IRL
  const handleLogin = (e) => {
    e.preventDefault()

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "activeUser",
          JSON.stringify({
            id: user.id,
            isStaff: user.isStaff,
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <Container className="container-login">
        <Form 
            className="form-login"
            onSubmit={handleLogin}
        >
          <h1>Art Gallery</h1>
          <FormGroup>
              <input
                type="email"
                value={email}
                onChange={(evt) => set(evt.target.value)}
                className="form-control"
                placeholder="Email address"
                required
                autoFocus
              />
          </FormGroup>
          <FormGroup>
              <Button className="login-btn btn-info" type="submit">
                Sign in
              </Button>
          </FormGroup>
        </Form>      
        <Link to="/register"
        >
          Not a Member Yet?
        </Link>    
      </Container>
  )
}