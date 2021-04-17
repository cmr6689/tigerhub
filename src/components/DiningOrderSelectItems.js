import React, {Component} from 'react';
import {Container, Row, Col, Table, Button, Card, CardBody, CardTitle, CardText, Media} from "reactstrap";
import crossroads from '../images/crossroads.png';
import artesano from '../images/artesano.png';
import commons from '../images/commons.png';
import gracies from '../images/gracies.png';
import salsas from '../images/salsas.png';

class DiningOrderSelectItems extends Component {
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
                                <CardTitle>Categories: {this.props.restaurant}</CardTitle>
                                <CardText style={this.props.cardTextOverflowStyle}>

                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
                <Col md="4">
                    <div>
                        <Card style={this.props.cardHeightStyle}>
                            <CardBody>
                                <CardTitle>Items</CardTitle>
                                <CardText style={this.props.cardTextOverflowStyle}>

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