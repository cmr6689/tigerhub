import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

export default class FinanceNav extends React.Component {

    onLinkClick = (value) => {
        this.props.callback(value);
    };

    render() {
        return (
            <div>
                <Nav vertical style={{background: '#DEDEDE'}}>
                    <NavItem style={{border: 'solid'}}>
                        <NavLink href="#" style={{color: 'black', fontWeight: 'bold'}} onClick={(e) => this.onLinkClick("balances")}>BALANCES</NavLink>
                    </NavItem>
                    <NavItem style={{border: 'solid'}}>
                        <NavLink href="#" style={{color: 'black', fontWeight: 'bold'}}>TRANSACTION HISTORY</NavLink>
                    </NavItem>
                    <NavItem style={{border: 'solid'}}>
                        <NavLink href="#" style={{color: 'black', fontWeight: 'bold'}} onClick={(e) => this.onLinkClick("transfer")}>TRANSFER MONEY</NavLink>
                    </NavItem>
                    <NavItem style={{border: 'solid'}}>
                        <NavLink href="#" style={{color: 'black', fontWeight: 'bold'}}>PAYMENT METHODS</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}