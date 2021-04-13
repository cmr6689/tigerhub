import React from 'react';
import logo from '../images/RIT_logo.png';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from "reactstrap";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderHeader() {
        return (
            <div className='header'>
                <img className='logo' src={logo} alt='logo' />
                <h1 className='tigerhub'>TigerHub</h1>
            </div>
        );
    }

    renderNavigation() {
        return (
            <div>
                <Navbar className='nav' color='black' dark expand='md'>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem color='secondary'>
                                <NavLink href="/components/">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">DEGREE PLANNING</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">FINANCE</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">DINING ORDER</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">CONTACT ADVISOR</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                {this.renderNavigation()}
            </div>
        );
    }
}

export default Header;