import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

function FinanceNav() {
    return(
        <div>
            <Nav vertical style={{background: '#DEDEDE'}}>
                <NavItem style={{border: 'solid'}}>
                    <NavLink>BALANCES</NavLink>
                </NavItem>
                <NavItem style={{border: 'solid'}}>
                    <NavLink>TRANSACTION HISTORY</NavLink>
                </NavItem>
                <NavItem style={{border: 'solid'}}>
                    <NavLink href="">TRANSFER MONEY</NavLink>
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

export default FinanceNav;