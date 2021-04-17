import React from 'react';
import logo from '../images/RIT_logo.png';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink,
    Button,
    DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown
} from "reactstrap";
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
import Finance from "./Finance";
import DegreePlanning from "./DegreePlanning";
import StudentStudentsen from "./StudentStudensen";

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
            isOpen: false,
            signedIn: false,
            signedOut: true,
            student: false,
            advisor: false
        };
    }

    showComponent(name) {
        switch(name) {
            case "signedOut":
                this.setState({signedIn: false, signedOut: true, student: false, advisor: false});
                break;
            case "signedInStudent":
                this.setState({signedIn: true, signedOut: false, student: true, advisor: false});
                break;
            case "signedInAdvisor":
                this.setState({signedIn: true, signedOut: false, student: false, advisor: true});
                break;
            default:
                this.setState({signedIn: false, signedOut: true, student: false, advisor: false});
                break;
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderHeaderSignedOut() {
        return (
            <div className='header'>
                <div>
                    <img className='logo' src={logo} alt='logo' />
                    <h1 className='tigerhub'>TigerHub</h1>
                </div>
                <UncontrolledButtonDropdown direction='left' className='login'>
                    <DropdownToggle caret>
                        Login
                    </DropdownToggle>
                    <DropdownMenu>
                        <Router>
                            <Link to='/tigerhub/student/'>
                                <DropdownItem onClick={() => this.showComponent("signedInStudent")}>Student</DropdownItem>
                            </Link>
                            <Link to='/tigerhub/advisor/'>
                                <DropdownItem onClick={() => this.showComponent("signedInAdvisor")}>Advisor</DropdownItem>
                            </Link>
                        </Router>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </div>
        );
    }

    renderHeaderSignedIn() {
        return (
            <div className='header'>
                <div>
                    <img className='logo' src={logo} alt='logo' />
                    <h1 className='tigerhub'>TigerHub</h1>
                </div>
                <Router>
                    <Link to='/tigerhub/'>
                        <Button className='login' onClick={() => this.showComponent("signedOut")}>Log Out</Button>
                    </Link>
                </Router>
            </div>
        );
    }

    renderNavigationSignedOut() {
        return (
            <div>
                {this.renderHeaderSignedOut()}
                <h1 style={{textAlign: "center"}}>Please Login to TigerHub</h1>
            </div>
        );
    }

    renderNavigationSignedInStudent() {
        return (
            <div>
                {this.renderHeaderSignedIn()}
                <Router>
                <Navbar className='nav' color='black' dark expand='md'>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem color='secondary'>
                                <Link to='/tigerhub/student'>
                                    <NavLink href="/components/">HOME</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/tigerhub/student/degree-planning'>
                                    <NavLink href="/components/">DEGREE PLANNING</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/tigerhub/student/finance'>
                                    <NavLink href="/components/">FINANCE</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/tigerhub/student/dining-order'>
                                    <NavLink href="/components/">DINING ORDER</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/tigerhub/student/contact'>
                                    <NavLink href="/components/">CONTACT</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                    <Switch>
                        <Route path='/tigerhub/student/degree-planning'>
                            <DegreePlanning />
                        </Route>
                        <Route path='/tigerhub/student/finance'>
                            <Finance />
                        </Route>
                        <Route path='/tigerhub/student/dining-order'>
                            <DiningOrder />
                        </Route>
                        <Route path='/tigerhub/student/contact'>
                            <Contact />
                        </Route>
                        <Route path='/tigerhub/student'>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }

    renderNavigationSignedInAdvisor() {
        return (
            <div>
                {this.renderHeaderSignedIn()}
                <Router>
                    <Navbar className='nav' color='black' dark expand='md'>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem color='secondary'>
                                    <Link to='/tigerhub/advisor'>
                                        <NavLink href="/components/">HOME</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/tigerhub/advisor/student-list'>
                                        <NavLink href="/components/">STUDENT LIST</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/tigerhub/advisor/email'>
                                        <NavLink href="/components/">EMAIL</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/tigerhub/advisor/course-search'>
                                        <NavLink href="/components/">COURSE SEARCH</NavLink>
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <Switch>
                        <Route path='/tigerhub/advisor/email'>

                        </Route>
                        <Route path='/tigerhub/advisor/student-list'>
                            <StudentList students={students}/>
                        </Route>
                        <Route path='/tigerhub/advisor/course-search'>

                        </Route>
                        <Route path='/tigerhub/advisor'>
                            <AdvisorHome />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }

    render() {
        const {signedOut, signedIn, student, advisor} = this.state;
        return (
            <div>
                {signedOut && (
                    this.renderNavigationSignedOut()
                )}
                {signedIn && student && (
                    this.renderNavigationSignedInStudent()
                )}
                {signedIn && advisor && (
                    this.renderNavigationSignedInAdvisor()
                )}
            </div>
        );
    }
}

export default Header;