import React, {Component} from 'react';
import {Container, Row, Col, Table, Button, Card, CardBody, CardTitle, CardText, Media} from "reactstrap";
import crossroads from '../images/crossroads.png';
import artesano from '../images/artesano.png';
import commons from '../images/commons.png';
import gracies from '../images/gracies.png';
import salsas from '../images/salsas.png';

class DiningOrderSelectTimeRestaurant extends Component {
    rootStyle = {
        overflow: 'hidden'
    }

    cardHeightStyle = {
        height: '80vh'
    }

    cardTextOverflowStyle = {
        height: '100%',
        maxHeight: '100%',
        overflow: 'hidden',
        overflowY: 'scroll'
    }

    restaurantImgStyle = {
        maxWidth: 128,
        maxHeight: 128
    }

    constructor() {
        super();
        this.state = {
            restaurantsVisible: false,
            time: -1
        };
    }

    selectTime(time) {
        this.setState({restaurantsVisible: true, time: time});
    }

    render() {
        return (
            <div style={this.rootStyle}>
                <Container>
                    <Row>
                        <Col md="4">
                            <div>
                                <Card style={this.cardHeightStyle}>
                                    <CardBody>
                                        <CardTitle>Select Time</CardTitle>
                                        <CardText style={this.cardTextOverflowStyle}>
                                            <Table>
                                                <tr>
                                                    <td>1:00 PM - 1:15 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('1:00 PM - 1:15 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>1:15 PM - 1:30 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('1:15 PM - 1:30 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>1:30 PM - 1:45 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('1:30 PM - 1:45 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>1:45 PM - 2:00 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('1:45 PM - 2:00 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>2:00 PM - 2:15 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('2:00 PM - 2:15 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>2:15 PM - 2:30 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('2:15 PM - 2:30 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>2:30 PM - 2:45 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('2:30 PM - 2:45 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>2:45 PM - 3:00 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('2:45 PM - 3:00 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>3:00 PM - 3:15 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('3:00 PM - 3:15 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>3:15 PM - 3:30 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('3:15 PM - 3:30 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>3:30 PM - 3:45 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('3:30 PM - 3:45 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>3:45 PM - 4:00 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('3:45 PM - 4:00 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>4:00 PM - 4:15 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('4:00 PM - 4:15 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>4:15 PM - 4:30 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('4:15 PM - 4:30 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>4:30 PM - 4:45 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('4:30 PM - 4:45 PM')}>Select Time</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>4:45 PM - 5:00 PM</td>
                                                    <td><Button color="primary" onClick={() => this.selectTime('4:45 PM - 5:00 PM')}>Select Time</Button></td>
                                                </tr>
                                            </Table>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                        <Col md="8">
                            <div>
                                <Card style={this.cardHeightStyle}>
                                    <CardBody>
                                        <CardTitle>Select Restaurant{this.state.restaurantsVisible && <span> for Pickup between <b>{this.state.time}</b></span>}</CardTitle>
                                        <CardText style={this.cardTextOverflowStyle}>
                                            {!this.state.restaurantsVisible && <center>Select a Time to view Restaurants</center>}
                                            {this.state.restaurantsVisible && <Table>
                                                <tr>
                                                    <td><Media left middle><Media object src={crossroads} alt={"Crossroads Logo"} style={this.restaurantImgStyle}></Media></Media></td>
                                                    <td>Crossroads</td>
                                                    <td><Button color="primary">Order Here</Button></td>
                                                </tr>
                                                <tr>
                                                    <td><Media left middle><Media object src={salsas} alt={"Salsarita's Logo"} style={this.restaurantImgStyle}></Media></Media></td>
                                                    <td>Salsarita's</td>
                                                    <td><Button color="primary">Order Here</Button></td>
                                                </tr>
                                                <tr>
                                                    <td><Media left middle><Media object src={gracies} alt={"Gracie's Logo"} style={this.restaurantImgStyle}></Media></Media></td>
                                                    <td>Gracie's</td>
                                                    <td><Button color="primary">Order Here</Button></td>
                                                </tr>
                                                <tr>
                                                    <td><Media left middle><Media object src={commons} alt={"Commons Logo"} style={this.restaurantImgStyle}></Media></Media></td>
                                                    <td>The Commons</td>
                                                    <td><Button color="primary">Order Here</Button></td>
                                                </tr>
                                                <tr>
                                                    <td><Media left middle><Media object src={artesano} alt={"Artesano Logo"} style={this.restaurantImgStyle}></Media></Media></td>
                                                    <td>Artesano</td>
                                                    <td><Button color="primary">Order Here</Button></td>
                                                </tr>
                                            </Table>}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default DiningOrderSelectTimeRestaurant;