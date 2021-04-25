import React, {Component} from 'react';
import {Row, Col, Table, Button, Card, CardBody, CardTitle, CardText, CardFooter} from "reactstrap";

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
                                                <Table style={this.props.lineHeightStyle}>
                                                    <thead>
                                                    <th>Item</th>
                                                    <th>Price</th>
                                                    <th></th>
                                                    </thead>
                                                    {this.props.cart.map((item) => {
                                                        return (
                                                            <tr>
                                                                <td>{item.name}
                                                                    {item.customizations.map((customization) => {
                                                                        if (customization.value === true) {
                                                                            return (
                                                                                <div><br/>- {customization.name}{(customization.hasOwnProperty('price')&&customization.price!==0) && <span> (+${customization.price.toFixed(2)})</span>}</div>
                                                                            )
                                                                        } else {
                                                                            return (
                                                                                <div><br/>- {customization.name}: {customization.value}{(customization.hasOwnProperty('price')&&customization.price!==0) && <span> (+${customization.price.toFixed(2)})</span>}</div>
                                                                            )
                                                                        }
                                                                    })}
                                                                </td>
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