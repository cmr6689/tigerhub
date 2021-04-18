import React, {Component} from 'react';
import {Row, Col, Table, Button, Card, CardBody, CardTitle, CardText, Media, CardFooter} from "reactstrap";
import {Link} from "react-router-dom";

class DiningOrderCheckout extends Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <center>
                        <br/><br/>
                        <h1>Order Confirmation</h1><br/>
                        <h1>5541</h1><br/><br/><br/>
                        <span>Your order has been sent to <b>{this.props.restaurant}</b> for pickup between <b>{this.props.time}</b>.</span><br/><br/>
                        <span>Your total is <b>${this.props.calculateTotal()}</b>, charged to <b>{this.props.paymentMethod}</b>.</span><br/><br/>
                        <span>Once it is time to begin preparing your order, you will receive a text message on your phone. You will receive another message once your order is ready for pickup.</span><br/><br/>
                        <span>Please do not enter the restaurant until your order is ready.</span><br/>
                        <span>Thanks!</span><br/><br/><br/><br/>
                        <Link to='/tigerhub/student'><Button color={"primary"}>Return to Homepage</Button></Link>
                    </center>
                </Col>
            </Row>
        );
    }
}

export default DiningOrderCheckout;