import React, {Component} from 'react';
import {Row, Col, Table, Button, Card, CardBody, CardTitle, CardText, Media, CardFooter} from "reactstrap";

class DiningOrderCheckout extends Component {
    render() {
        return (
            <Row>
                <Col md="12">
                    <div>
                        <Card style={this.props.cardHeightStyle}>
                            <CardBody>
                                <CardTitle class={"container-fluid"}>
                                    <Row>
                                        <Col md={"1"}><Button color={"danger"} onClick={this.props.backAction}>Back</Button></Col>
                                        <Col md={"11"}><center>Checkout - Order from <b>{this.props.restaurant}</b> for pickup between <b>{this.props.time}</b></center></Col>
                                    </Row>
                                </CardTitle>
                                <CardText style={this.props.cardTextOverflowStyle}>
                                    <Table>
                                        <tr>
                                            <td>
                                                <Table>
                                                    <thead>
                                                    <th>Item</th>
                                                    <th>Price</th>
                                                    <th></th>
                                                    </thead>
                                                    {this.props.cart.map((item) => {
                                                        return (
                                                            <tr>
                                                                <td>{item.name}</td>
                                                                <td>${this.props.calculatePrice(item).toFixed(2)}</td>
                                                                <td><Button color={"danger"} onClick={() => this.props.cartRemoveItem(item.id)}>Remove</Button></td>
                                                            </tr>
                                                        )
                                                    })}
                                                </Table>
                                            </td>
                                        </tr>
                                    </Table>
                                </CardText>
                            </CardBody>
                            <CardFooter>
                                <span><b>Total: ${this.props.calculateTotal().toFixed(2)}</b></span>
                                <span class={"float-right"}>
                                    <Button color={"primary"} onClick={() => this.props.goToConfirmation('Dining Dollars')} disabled={this.props.cart.length < 1}>Dining Dollars</Button>
                                    <Button color={"primary"} onClick={() => this.props.goToConfirmation('Credit/Debit')} disabled={this.props.cart.length < 1}>Credit/Debit</Button>
                                </span>
                            </CardFooter>
                        </Card>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default DiningOrderCheckout;