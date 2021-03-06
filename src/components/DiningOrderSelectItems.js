import React, {Component} from 'react';
import {Row, Col, Table, Button, Card, CardBody, CardTitle, CardText} from "reactstrap";
import DiningOrderCustomizeModal from "./DiningOrderCustomizeModal";

class DiningOrderSelectItems extends Component {
    categories = []

    render() {
        return (
            <Row>
                <Col md="3">
                    <div>
                        <Card style={this.props.cardHeightStyle}>
                            <CardBody>
                                <CardTitle class={"container-fluid"}>
                                    <Row>
                                        <Col md={"3"}><Button color={"danger"} onClick={this.props.backAction}>Back</Button></Col>
                                        <Col md={"9"}>Categories: {this.props.restaurant}</Col>
                                    </Row>

                                </CardTitle>
                                <CardText style={this.props.cardTextOverflowStyle}>
                                    {this.props.restaurants.forEach((restaurant) => {
                                        if (restaurant.name === this.props.restaurant) {
                                            this.categories = restaurant.categories;
                                        }
                                    })}
                                    <Table>
                                    {this.categories.map((category) => {
                                        return (
                                            <tr>
                                                <td>{category}</td>
                                                {category !== this.props.category && <td><Button color={"primary"} style={this.props.buttonStyle} onClick={() => this.props.setCategory(category)}>Select</Button></td>}
                                                {category === this.props.category && <td><Button color={"success"} style={this.props.buttonStyle}>Selected</Button></td>}
                                            </tr>
                                        )
                                    })}
                                    </Table>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
                <Col md="5">
                    <div>
                        <Card style={this.props.cardHeightStyle}>
                            <CardBody>
                                <CardTitle>Items</CardTitle>
                                <CardText style={this.props.cardTextOverflowStyle}>
                                    <Table>
                                        <thead>
                                            <th>Item</th>
                                            <th>Base Price</th>
                                            <th></th>
                                        </thead>
                                        {this.props.items.map((item) => {
                                            if (item.restaurants.includes(this.props.restaurant) && item.categories.includes(this.props.category)) {
                                                return (
                                                    <tr>
                                                        <td>{item.name}</td>
                                                        <td>${item.price.toFixed(2)}</td>
                                                        <td><DiningOrderCustomizeModal item={item} addToCart={this.props.cartAddItem}></DiningOrderCustomizeModal></td>
                                                    </tr>
                                                )
                                            } else {
                                                return (
                                                    <span> </span>
                                                )
                                            }
                                        })}
                                    </Table>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
                <Col md="4">
                    <div>
                        <Card style={this.props.cardHeightStyle}>
                            <CardBody>
                                <CardTitle>Cart</CardTitle>
                                <CardText style={this.props.cardTextOverflowStyle}>
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
                                        <tr>
                                            <td><b>Total</b></td>
                                            <td>${this.props.calculateTotal().toFixed(2)}</td>
                                            <td><Button color={"success"} onClick={() => this.props.goToCheckout()} disabled={this.props.cart.length < 1}>Checkout</Button></td>
                                        </tr>
                                    </Table>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default DiningOrderSelectItems;