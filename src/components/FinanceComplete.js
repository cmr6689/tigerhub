import React from 'react';
import FinanceNav from "./FinanceNav";
import {Button, Container} from "reactstrap";

function FinanceComplete() {
    return(
        <div>
            <div style={{display: 'flex'}}>
                <FinanceNav />
                <Container>
                    <h1>Your transaction is complete!</h1>
                    <h3>Your account balance should be updated once your financial institution completes the transaction.</h3>
                </Container>
                <Button color='danger'>Make Another Payment</Button>
                <Button color='success'>View Balances</Button>
            </div>
        </div>
    );
}

export default FinanceComplete;