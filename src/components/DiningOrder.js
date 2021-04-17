import React, {Component} from 'react';
import {Container, Row, Col, Table, Button, Card, CardBody, CardTitle, CardText, Media} from "reactstrap";
import crossroads from '../images/crossroads.png';
import artesano from '../images/artesano.png';
import commons from '../images/commons.png';
import gracies from '../images/gracies.png';
import salsas from '../images/salsas.png';
import DiningOrderSelectTimeRestaurant from "./DiningOrderSelectTimeRestaurant";

class DiningOrder extends Component {
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
            stage: 0,
            time: -1,
            restaurant: -1
        };
    }

    setTime(time) {
        this.setState({time: time});
    }

    setRestaurant(restaurant) {
        this.setRestaurant({restaurant: restaurant})
    }

    render() {
        return (
            <div><DiningOrderSelectTimeRestaurant time={this.state.time} setTime={this.setTime} restaurant={this.state.restaurant} setRestaurant={this.setRestaurant}/></div>
        );
    }
}

export default DiningOrder;