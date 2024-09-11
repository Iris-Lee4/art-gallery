import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser, getUserByEmail } from "../../services/userService.jsx"
import { Button, Form, FormGroup, Input, Label, Container } from "reactstrap"

export const Register = (props) => {
  const [customer, setCustomer] = useState({
    email: "",
    firstName: "",
    lastName: "",
    isStaff: false,
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    createUser(customer).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "activeUser",
          JSON.stringify({
            id: createdUser.id,
            staff: createdUser.isStaff,
          })
        )

        navigate("/login")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getUserByEmail(customer.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewUser()
      }
    })
  }

  const updateCustomer = (evt) => {
    const copy = { ...customer }
    copy[evt.target.id] = evt.target.value
    setCustomer(copy)
  }

  return (
    <Container style={{ textAlign: "center" }}>
      <Form className="form-login" onSubmit={handleRegister}>
        <h3>Please fill out the form below to register with Art Gallery</h3>
        <FormGroup>
            <Input
              onChange={updateCustomer}
              type="text"
              id="firstName"
              className="form-control"
              placeholder="Enter your first name"
              required
              autoFocus
            />
        </FormGroup>
        <FormGroup>
            <Input
              onChange={updateCustomer}
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Enter your last name"
              required
              autoFocus
            />
        </FormGroup>
        <FormGroup>
            <Input
              onChange={updateCustomer}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
        </FormGroup>
        <FormGroup>
            <Label>
              <Input
                onChange={(evt) => {
                  const copy = { ...customer }
                  copy.isStaff = evt.target.checked
                  setCustomer(copy)
                }}
                type="checkbox"
                id="isStaff"
              />
              I am an employee{" "}
            </Label>
        </FormGroup>
        <FormGroup>
            <Button className="login-btn btn-info" type="submit">
              Register
            </Button>
        </FormGroup>
      </Form>
    </Container>
  )
}