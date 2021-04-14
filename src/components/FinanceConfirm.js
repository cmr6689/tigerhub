import React from 'react';
import FinanceNav from "./FinanceNav";
import {Container, Card, CardBody, CardText, Button} from 'reactstrap';

export class FinanceConfirm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div style={{display: 'flex'}}>
                    <FinanceNav />
                    <Container>
                        <h1>Your transaction is almost done.</h1>
                        <h3>Please confirm the below information is correct before completing your transfer.</h3>
                        <Card>
                            <CardBody>
                                <CardText>Account: xxxxx</CardText>
                                <CardText>Payment Method: xxxxx</CardText>
                                <CardText>Amount: $xxx.xx</CardText>
                            </CardBody>
                        </Card>
                        <p>Some transactions may take multiple business days to complete.</p>
                    </Container>
                    <Button color='danger'>Go Back</Button>
                    <Button color='success'>Complete</Button>
                </div>
            </div>
        );
    }
}