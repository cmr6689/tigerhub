import React from 'react';
import logo from '../images/RIT_logo.png';
import {Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Contact from "./Contact";
import DiningOrder from "./DiningOrder";
import Home from "./Home";
import AdvisorHome from "./AdvisorHome";
import StudentList from "./StudentList";
import Student from "./Student";
import Finance from "./Finance";
import DegreePlanning from "./DegreePlanning";

const students = [
    { id: 1, name: "Student Studentsen" },
    { id: 2, name: "Lores Ipsum" },
    { id: 3, name: "Zack Pepper" },
    { id: 4, name: "Jeff Loepsk" }
];

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
                <Router>
                <Navbar className='nav' color='black' dark expand='md'>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem color='secondary'>
                                <Link to='/'>
                                    <NavLink href="/components/">HOME</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/degree-planning'>
                                    <NavLink href="/components/">DEGREE PLANNING</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/finance'>
                                    <NavLink href="/components/">FINANCE</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/dining-order'>
                                    <NavLink href="/components/">DINING ORDER</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/contact'>
                                    <NavLink href="/components/">CONTACT</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                    <Switch>
                        <Route path='/degree-planning'>
                            <DegreePlanning />
                        </Route>
                        <Route path='/finance'>
                            <Finance />
                        </Route>
                        <Route path='/dining-order'>
                            <DiningOrder />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                        <Route path='/advisor-home'>
                            <AdvisorHome />
                        </Route>
                        <Route path='/student-list'>
                            <StudentList students={students}/>
                        </Route>
                        <Route path='/student'>
                            <Student />
                        </Route>
                    </Switch>
                </Router>
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