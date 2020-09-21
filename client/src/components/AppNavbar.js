import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavBrand,
    Nav,
    NavItem,
    NavLink,
    Container, NavbarBrand
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    // bind this to the function toggle in constructor
    toggle = ()=> {
        this.setState({
            isOpen: !this.state.isOpen
        })        
    }

    render() {
        return(
            <div>
            <Navbar color="dark" dark expands="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/"> Shopping List </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/shreyadate05/Shopping-List">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            </div>
        );

    }

}


export default AppNavbar;