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
            page: "balances",
            account: "default",
            method: "default",
            amount: 0.0
        }
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent(name) {
        this.setState({page: {name}});
    }

    setAccount(name) {
        this.state.account = name;
    }

    setMethod(name) {
        this.state.method = name;
    }

    setAmount(value) {
        this.state.amount = value;
    }

    render() {
        return (
            <div>
                <h1></h1>
                <div style={{display: 'flex'}}>
                    <FinanceNav callback={this.showComponent}/>
                    {this.state.page == "balances" && (
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
                    {this.state.page == "transfer" && (
                        <FinanceTransfer changeAccount={this.setAccount} changeMethod={this.setMethod} changeAmount={this.setAmount}
                            changePage={this.showComponent}/>
                    )}
                    {this.state.page == "confirm" && (
                        <FinanceConfirm account={this.state.account} method={this.state.method} amount={this.state.amount} changePage={this.showComponent()}/>
                    )}
                    {this.state.page == "complete" && (
                        <FinanceComplete changePage={this.showComponent}/>
                    )}
                </div>
            </div>
        );
    }
}