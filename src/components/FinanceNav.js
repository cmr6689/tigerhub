import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';
import {Link, Route} from 'react-router-dom';
import {FinanceTransfer} from "./FinanceTransfer";

function FinanceNav() {
    return(
        <div>
            <Route path='/finance/transfer'>
                <FinanceTransfer />
            </Route>
            <Nav vertical style={{background: '#DEDEDE'}}>
                <NavItem style={{border: 'solid'}}>
                    <Link to='/finance'>
                        <NavLink>BALANCES</NavLink>
                    </Link>
                </NavItem>
                <NavItem style={{border: 'solid'}}>
                    <NavLink>TRANSACTION HISTORY</NavLink>
                </NavItem>
                <NavItem style={{border: 'solid'}}>
                    <Link to='/finance/transfer'>
                        <NavLink href="/components/">TRANSFER MONEY</NavLink>
                    </Link>
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