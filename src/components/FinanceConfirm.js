import React from 'react';
import {Container, Card, CardBody, CardText, Button} from 'reactstrap';

export default class FinanceConfirm extends React.Component {
    constructor(props) {
        super(props);
    }

    goBack() {
        this.props.transfer();
    }

    complete() {
        this.props.complete();
    }

    render() {
        return(
            <div>
                <Container>
                    <h1>Your transaction is almost done.</h1>
                    <h3>Please confirm the below information is correct before completing your transfer.</h3>
                    <Card>
                        <CardBody>
                            <CardText>Account: {this.props.account}</CardText>
                            <CardText>Payment Method: {this.props.method}</CardText>
                            <CardText>Amount: ${this.props.amount}</CardText>
                        </CardBody>
                    </Card>
                    <p>Some transactions may take multiple business days to complete.</p>
                </Container>
                <Button color='danger' onClick={() => this.goBack()}>Go Back</Button>
                <Button color='success' onClick={() => this.complete()}>Complete</Button>
            </div>
        );
    }
}