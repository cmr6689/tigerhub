import React from 'react';
import {Card, CardBody, CardTitle, CardText, Container, CardLink} from 'reactstrap';
import FinanceNav from "./FinanceNav"

function Finance() {
    return (
        <div>
            <h1>Finance page</h1>
            <div style={{display: 'flex'}}>
                <FinanceNav />
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
            </div>
        </div>
    );
}

export default Finance;