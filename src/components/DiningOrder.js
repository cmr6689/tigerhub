import React, {Component} from 'react';
import {Container, Row, Col, Table, Button, Card, CardBody, CardTitle, CardText, Media} from "reactstrap";
import crossroads from '../images/crossroads.png';
import artesano from '../images/artesano.png';
import commons from '../images/commons.png';
import gracies from '../images/gracies.png';
import salsas from '../images/salsas.png';
import DiningOrderSelectTimeRestaurant from "./DiningOrderSelectTimeRestaurant";
import DiningOrderSelectItems from "./DiningOrderSelectItems";

class DiningOrder extends Component {
    rootStyle = {
        overflow: 'hidden',
    }

    containerStyle = {
        maxWidth: '100%'
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
            restaurantsVisible: false,
            restaurant: -1
        };
    }

    setTime(time) {
        this.setState({time: time, restaurantsVisible: true});
    }

    setRestaurant(restaurant) {
        this.setState({restaurant: restaurant, stage: 1});
    }

    render() {
        return (
            <div style={this.rootStyle}>
                <Container style={this.containerStyle}>
                    {this.state.stage == 0 &&
                    <DiningOrderSelectTimeRestaurant
                        rootStyle={this.rootStyle}
                        cardHeightStyle={this.cardHeightStyle}
                        cardTextOverflowStyle={this.cardTextOverflowStyle}
                        time={this.state.time}
                        setTime={this.setTime.bind(this)}
                        restaurantsVisible={this.state.restaurantsVisible}
                        restaurantImgStyle={this.restaurantImgStyle}
                        setRestaurant={this.setRestaurant.bind(this)}/>
                    }
                    {this.state.stage == 1 &&
                    <DiningOrderSelectItems
                        rootStyle={this.rootStyle}
                        restaurant={this.state.restaurant}
                    />
                    }
                </Container>
            </div>
        );
    }
}

export default DiningOrder;