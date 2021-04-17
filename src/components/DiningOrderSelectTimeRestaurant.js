import React, {Component} from 'react';
import {Container, Row, Col, Table, Button, Card, CardBody, CardTitle, CardText, Media} from "reactstrap";
import crossroads from '../images/crossroads.png';
import artesano from '../images/artesano.png';
import commons from '../images/commons.png';
import gracies from '../images/gracies.png';
import salsas from '../images/salsas.png';

class DiningOrderSelectTimeRestaurant extends Component {
    constructor() {
        super();
    }

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
                                        <tr>
                                            <td>1:00 PM - 1:15 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('1:00 PM - 1:15 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>1:15 PM - 1:30 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('1:15 PM - 1:30 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>1:30 PM - 1:45 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('1:30 PM - 1:45 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>1:45 PM - 2:00 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('1:45 PM - 2:00 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2:00 PM - 2:15 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('2:00 PM - 2:15 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2:15 PM - 2:30 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('2:15 PM - 2:30 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2:30 PM - 2:45 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('2:30 PM - 2:45 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2:45 PM - 3:00 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('2:45 PM - 3:00 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>3:00 PM - 3:15 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('3:00 PM - 3:15 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>3:15 PM - 3:30 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('3:15 PM - 3:30 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>3:30 PM - 3:45 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('3:30 PM - 3:45 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>3:45 PM - 4:00 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('3:45 PM - 4:00 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>4:00 PM - 4:15 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('4:00 PM - 4:15 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>4:15 PM - 4:30 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('4:15 PM - 4:30 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>4:30 PM - 4:45 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('4:30 PM - 4:45 PM')}>Select Time</Button></td>
                                        </tr>
                                        <tr>
                                            <td>4:45 PM - 5:00 PM</td>
                                            <td><Button color="primary" onClick={() => this.props.setTime('4:45 PM - 5:00 PM')}>Select Time</Button></td>
                                        </tr>
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
                                        <tr>
                                            <td><Media left middle><Media object src={crossroads} alt={"Crossroads Logo"} style={this.props.restaurantImgStyle}></Media></Media></td>
                                            <td>Crossroads</td>
                                            <td><Button color="primary" onClick={() => this.props.setRestaurant('Crossroads')}>Order Here</Button></td>
                                        </tr>
                                        <tr>
                                            <td><Media left middle><Media object src={salsas} alt={"Salsarita's Logo"} style={this.props.restaurantImgStyle}></Media></Media></td>
                                            <td>Salsarita's</td>
                                            <td><Button color="primary" onClick={() => this.props.setRestaurant('Salsarita\'s')}>Order Here</Button></td>
                                        </tr>
                                        <tr>
                                            <td><Media left middle><Media object src={gracies} alt={"Gracie's Logo"} style={this.props.restaurantImgStyle}></Media></Media></td>
                                            <td>Gracie's</td>
                                            <td><Button color="primary" onClick={() => this.props.setRestaurant('Gracie\'s')}>Order Here</Button></td>
                                        </tr>
                                        <tr>
                                            <td><Media left middle><Media object src={commons} alt={"Commons Logo"} style={this.props.restaurantImgStyle}></Media></Media></td>
                                            <td>The Commons</td>
                                            <td><Button color="primary" onClick={() => this.props.setRestaurant('The Commons')}>Order Here</Button></td>
                                        </tr>
                                        <tr>
                                            <td><Media left middle><Media object src={artesano} alt={"Artesano Logo"} style={this.props.restaurantImgStyle}></Media></Media></td>
                                            <td>Artesano</td>
                                            <td><Button color="primary" onClick={() => this.props.setRestaurant('Artesano')}>Order Here</Button></td>
                                        </tr>
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