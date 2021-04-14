import React from 'react';
import {Button, Container} from "reactstrap";

export default class FinanceComplete extends React.Component {
    constructor(props) {
        super(props);
    }

    toTransfer() {
        this.props.changePage("transfer");
    }

    toBalances() {
        this.props.changePage("balances");
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Your transaction is complete!</h1>
                    <h3>Your account balance should be updated once your financial institution completes the
                        transaction.</h3>
                </Container>
                <Button color='danger' onClick={() => this.toTransfer()}>Make Another Payment</Button>
                <Button color='success' onClick={() => this.toBalances()}>View Balances</Button>
            </div>
        );
    }
}