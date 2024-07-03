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

export const CustomerNav = (args) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}
        container='fluid'
        expand={true}
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
              <NavLink href="/liked">
                Liked
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/purchased">
                My Pieces
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