import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const AdminNav = (args) => {

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}
        container='fluid'
        expand={true}
        // fixed='top'
        color='dark'
        dark
      >
        <NavbarBrand href="/">Art Gallery</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/all">
              All Artwork
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/sold">
                Sold
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/new">
                Add New
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">
                My Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"
                onClick={() => {
                    localStorage.removeItem("activeUser")
                }}
              >
                <strong>Logout</strong>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}