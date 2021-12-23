import React from 'react'
//import { Button, Navbar, Form, FormControl, NavDropdown, Nav, Offcanvas, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavItem, NavLink, Nav, Collapse, NavbarBrand, NavbarToggler } from 'reactstrap';
import Logo from '../logo.svg'
function TopNav() {
    // Collapse isOpen State
    // Collapse isOpen State
    const [isOpen, setIsOpen] = React.useState(false);
    return (

        <div>
            <Navbar color="light" light >
                <NavbarBrand href="/">
                    <img
                        src={Logo}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                        alt='The Logo'
                    />
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#projects">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#team">Team</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#contact">Contact</NavLink>
                        </NavItem>
                        
                       
                    </Nav>
                </Collapse>
            </Navbar>
        </div >


    );
}

export default TopNav
