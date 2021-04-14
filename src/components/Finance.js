import React from 'react';
import {Card, CardBody, CardTitle, CardText, Container, CardLink} from 'reactstrap';
import FinanceNav from "./FinanceNav";
import FinanceTransfer from "./FinanceTransfer";
import FinanceConfirm from "./FinanceConfirm";
import FinanceComplete from "./FinanceComplete";

export default class Finance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBalances: true,
            showTransfer: false,
            showConfirm: false,
            showComplete: false,
            account: "default",
            method: "default",
            amount: 0.0
        }
        this.showComponent = this.showComponent.bind(this);
        this.showBalances = this.showBalances.bind(this);
        this.showTransfer = this.showTransfer.bind(this);
        this.showConfirm = this.showConfirm.bind(this);
        this.showComplete = this.showComplete.bind(this);
        this.setAccount = this.setAccount.bind(this);
        this.setMethod = this.setMethod.bind(this);
        this.setAmount = this.setAmount.bind(this);
    }

    showComponent(name) {
        switch (name) {
            case "balances":
                this.setState({showBalances: true, showTransfer: false, showConfirm: false, showComplete: false});
                break;
            case "transfer":
                this.setState({showBalances: false, showTransfer: true, showConfirm: false, showComplete: false});
                break;
            case "confirm":
                this.setState({showBalances: false, showTransfer: false, showConfirm: true, showComplete: false});
                break;
            case "complete":
                this.setState({showBalances: false, showTransfer: false, showConfirm: false, showComplete: true});
                break;
            default:
                this.setState({showBalances: true, showTransfer: false, showConfirm: false, showComplete: false});
        }
    }

    showBalances() {
        this.showComponent("balances");
    }

    showTransfer() {
        this.showComponent("transfer");
    }

    showConfirm() {
        this.showComponent("confirm");
    }

    showComplete() {
        this.showComponent("complete")
    }

    setAccount(name) {
        this.setState({account: {name}});
    }

    setMethod(name) {
        this.setState({method: {name}});
    }

    setAmount(value) {
        this.setState({amount: {value}});
    }

    render() {
        const {showBalances, showTransfer, showConfirm, showComplete} = this.state;
        return (
            <div>
                <h1></h1>
                <div style={{display: 'flex'}}>
                    <FinanceNav callback={this.showComponent}/>
                    {showBalances && (
                            <div>
                                <Container style={{display: 'flex'}}>
                                    <Card style={{width: '50%'}}>
                                        <CardBody>
                                            <CardTitle>Academic Balance</CardTitle>
                                            <CardText>$5000.00</CardText>
                                            <CardLink>See History</CardLink>
                                            <CardLink>Make Payment</CardLink>
                                        </CardBody>
                                    </Card>
                                    <Card style={{width: '50%'}}>
                                        <CardBody>
                                            <CardTitle>Dining Dollars</CardTitle>
                                            <CardText>$200.00</CardText>
                                            <CardLink>See History</CardLink>
                                            <CardLink>Make Payment</CardLink>
                                        </CardBody>
                                    </Card>
                                    <Card style={{width: '50%'}}>
                                        <CardBody>
                                            <CardTitle>Tiger Bucks</CardTitle>
                                            <CardText>$0.00</CardText>
                                            <CardLink>See History</CardLink>
                                            <CardLink>Make Payment</CardLink>
                                        </CardBody>
                                    </Card>
                                </Container>
                            </div>
                    )}
                    {showTransfer && (
                        <FinanceTransfer changeAccount={this.setAccount} changeMethod={this.setMethod} changeAmount={this.setAmount}
                             confirm={this.showConfirm} balances={this.showBalances}/>
                    )}
                    {showConfirm && (
                        <FinanceConfirm account={this.state.account} method={this.state.method} amount={this.state.amount}
                            complete={this.showComplete} transfer={this.showTransfer}/>
                    )}
                    {showComplete && (
                        <FinanceComplete transfer={this.showTransfer} balances={this.showBalances}/>
                    )}
                </div>
            </div>
        );
    }
}