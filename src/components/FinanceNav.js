import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import FinanceTransfer from "./FinanceTransfer";

export default class FinanceNav extends React.Component {
    constructor(props) {
        super(props);
    }

    onLinkClick = (value) => {
        this.props.callback(value);
    };

    render() {
        return (
            <div>
                <Nav vertical style={{background: '#DEDEDE'}}>
                    <NavItem style={{border: 'solid'}}>
                        <NavLink onClick={(e) => this.onLinkClick("balances")}>BALANCES</NavLink>
                    </NavItem>
                    <NavItem style={{border: 'solid'}}>
                        <NavLink>TRANSACTION HISTORY</NavLink>
                    </NavItem>
                    <NavItem style={{border: 'solid'}}>
                        <NavLink onClick={(e) => this.onLinkClick("transfer")}>TRANSFER MONEY</NavLink>
                    </NavItem>
                    <NavItem style={{border: 'solid'}}>
                        <NavLink>PAYMENT METHODS</NavLink>
                    </NavItem>
                    <NavItem style={{border: 'solid'}}>
                        <NavLink>DINING & TIGER BUCKS</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}