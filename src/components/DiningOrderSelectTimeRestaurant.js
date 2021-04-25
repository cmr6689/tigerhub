import React, {Component} from 'react';
import {Row, Col, Table, Button, Card, CardBody, CardTitle, CardText, Media} from "reactstrap";

class DiningOrderSelectTimeRestaurant extends Component {
    render() {
        return (
            <Row>
                <Col md="4">
                    <div>
                        <Card style={this.props.cardHeightStyle}>
                            <CardBody>
                                <CardTitle>Select Time</CardTitle>
                                <CardText style={this.props.cardTextOverflowStyle}>
                                    <Table>
                                        {this.props.times.map((time) => {
                                            return (
                                                <tr>
                                                    <td>{time}</td>
                                                    {time !== this.props.time && <td><Button color="primary" style={this.props.buttonStyle} onClick={() => this.props.setTime(time)}>Select Time</Button></td>}
                                                    {time === this.props.time && <td><Button color="success" style={this.props.buttonStyle}>Selected Time</Button></td>}
                                                </tr>
                                            )
                                        })}
                                    </Table>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
                <Col md="8">
                    <div>
                        <Card style={this.props.cardHeightStyle}>
                            <CardBody>
                                <CardTitle>Select Restaurant{this.props.restaurantsVisible && <span> for Pickup between <b>{this.props.time}</b></span>}</CardTitle>
                                <CardText style={this.props.cardTextOverflowStyle}>
                                    {!this.props.restaurantsVisible && <center>Select a Time to view Restaurants</center>}
                                    {this.props.restaurantsVisible && <Table>
                                        {this.props.restaurants.map((restaurant) => {
                                            const name = restaurant.name;
                                            const image = restaurant.image;
                                            return (
                                                <tr>
                                                    <td><Media left middle><Media object src={image} alt={name + " Logo"} style={this.props.restaurantImgStyle}></Media></Media></td>
                                                    <td>{name}</td>
                                                    <td><Button color="primary" onClick={() => this.props.setRestaurant(name)}>Order Here</Button></td>
                                                </tr>
                                            );
                                        })
                                        }
                                    </Table>}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default DiningOrderSelectTimeRestaurant;