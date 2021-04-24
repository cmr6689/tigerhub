import React, {Component} from 'react';
import {Container} from "reactstrap";
import DiningOrderSelectTimeRestaurant from "./DiningOrderSelectTimeRestaurant";
import DiningOrderSelectItems from "./DiningOrderSelectItems";
import crossroads from '../images/crossroads.png';
import artesano from '../images/artesano.png';
import commons from '../images/commons.png';
import gracies from '../images/gracies.png';
import salsas from '../images/salsas.png';
import DiningOrderCheckout from "./DiningOrderCheckout";
import DiningOrderConfirmation from "./DiningOrderConfirmation";

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
        height: '95%',
        maxHeight: '100%',
        overflow: 'hidden',
        overflowY: 'scroll',
    }

    restaurantImgStyle = {
        maxWidth: 128,
        maxHeight: 128
    }

    times = [
        '1:00 PM - 1:15 PM',
        '1:15 PM - 1:30 PM',
        '1:30 PM - 1:45 PM',
        '1:45 PM - 2:00 PM',
        '2:00 PM - 2:15 PM',
        '2:15 PM - 2:30 PM',
        '2:30 PM - 2:45 PM',
        '2:45 PM - 3:00 PM',
        '3:00 PM - 3:15 PM',
        '3:15 PM - 3:30 PM',
        '3:30 PM - 3:45 PM',
        '3:45 PM - 4:00 PM',
        '4:00 PM - 4:15 PM',
        '4:15 PM - 4:30 PM',
        '4:30 PM - 4:45 PM',
        '4:45 PM - 5:00 PM',
    ]

    menuRestaurants = [
        {
            name: 'Crossroads',
            image: crossroads,
            categories: ['All Items', 'Pizza', 'Subs', 'Grab & Go', 'Asian', 'Grill', 'Pasta', 'Beverages']
        }, {
            name: 'Salsarita\'s',
            image: salsas,
            categories: ['All Items']
        }, {
            name: 'Gracie\'s',
            image: gracies,
            categories: ['All Items']
        }, {
            name: 'The Commons',
            image: commons,
            categories: ['All Items']
        }, {
            name: 'Artesano',
            image: artesano,
            categories: ['All Items']
        }
    ]

    subCustomizations = {
        selectOne: [
            {
                name: 'Toasted',
                options: [{name: "Yes"}, {name: "No"}]
            }, {
                name: 'Bread',
                options: [{name: "White Sub Roll"}, {name: 'Italian Sub Roll'}, {name: 'Multi-grain Sub Roll'}]
            }, {
                name: 'Protein',
                options: [{name: 'Ham'}, {name: 'Turkey'}, {name: 'Roast Beef'}, {name: 'Grilled Chicken'},
                    {name: 'Crispy Chicken'}, {name: 'Salami'}, {name: 'Capicola'}, {name: 'Tuna Salad'},
                    {name: 'Chicken Salad'}, {name: 'Hummus'}, {name: 'Bacon'}]
            }, {
                name: 'Cheese',
                options: [{name: 'American Cheese'}, {name: 'Provolone Cheese'}, {name: 'Swiss Cheese'},
                    {name: 'Pepper Jack Cheese'}, {name: 'Mozzarella Cheese'}, {name: 'Vegan Cheese'},
                    {name: 'No Cheese'}]
            }
        ],
        selectMultiple: [
            {
                name: 'Condiments',
                options: [{name: 'Mayo'}, {name: 'Light Mayo'}, {name: 'Horseradish Mayo'}, {name: 'Vegan Mayo'},
                    {name: 'Sub Oil'}, {name: 'Mustard'}, {name: 'Honey Mustard'}, {name: 'Dijon Mustard'},
                    {name: 'Ranch'}]
            }, {
                name: 'Toppings',
                options: [{name: 'Lettuce'}, {name: "Tomato"}, {name: 'Red Onions'}, {name: 'Dill Pickle'},
                    {name: 'Banana Peppers'}, {name: 'Sweet Peppers'}, {name: 'Black Olives'}]
            }, {
                name: 'Extra Protein',
                options: [{name: 'Ham', price: 2.5}, {name: 'Turkey', price: 2.5}, {name: 'Roast Beef', price: 3},
                    {name: 'Grilled Chicken', price: 2.0}, {name: 'Crispy Chicken', price: 2.5},
                    {name: 'Salami', price: 2.0}, {name: 'Capicola', price: 2.0}, {name: 'Tuna Salad', price: 1.75},
                    {name: 'Chicken Salad', price: 2.0}, {name: 'Hummus', price: 2.5}, {name: 'Bacon', price: 2.0}]
            }
        ]
    }

    menuItems = [
        {
            name: 'Vegan Pizza',
            price: 5.19,
            restaurants: ['Crossroads', 'The Commons', 'Gracie\'s'],
            categories: ['All Items', 'Pizza']
        }, {
            name: 'Cheese Pizza',
            price: 3.49,
            restaurants: ['Crossroads', 'The Commons', 'Gracie\'s'],
            categories: ['All Items', 'Pizza']
        }, {
            name: 'Gluten Free Pizza',
            price: 7.49,
            restaurants: ['Crossroads', 'The Commons', 'Gracie\'s'],
            categories: ['All Items', 'Pizza']
        }, {
            name: 'Pepperoni Pizza',
            price: 3.95,
            restaurants: ['Crossroads', 'The Commons', 'Gracie\'s'],
            categories: ['All Items', 'Pizza']
        }, {
            name: 'Chocolate Milk',
            price: 2.50,
            restaurants: ['Crossroads', 'The Commons', 'Gracie\'s', 'Artesano', 'Salsarita\'s'],
            categories: ['All Items', 'Beverages']
        }, {
            name: 'Bottled Water',
            price: 1.50,
            restaurants: ['Crossroads', 'The Commons', 'Gracie\'s', 'Artesano', 'Salsarita\'s'],
            categories: ['All Items', 'Beverages']
        }, {
            name: '6" Sub',
            price: 6.39,
            restaurants: ['Crossroads', 'The Commons', 'Gracie\'s'],
            categories: ['All Items', 'Subs'],
            customizations: this.subCustomizations
        }, {
            name: 'Footlong Sub',
            price: 9.85,
            restaurants: ['Crossroads', 'The Commons', 'Gracie\'s'],
            categories: ['All Items', 'Subs'],
            customizations: this.subCustomizations
        }
    ]

    constructor() {
        super();
        this.state = {
            stage: 0,
            time: -1,
            restaurantsVisible: false,
            restaurant: -1,
            category: 'All Items',
            cartIndex: 0,
            cart: [],
            canCheckout: false,
            paymentMethod: ''
        };
    }

    cartAddItem(name, basePrice, customizations) {
        this.setState({cart: this.state.cart.concat([{id: this.state.cartIndex, name: name, basePrice: basePrice, customizations: customizations}]), cartIndex: this.state.cartIndex+1});
    }

    cartRemoveItem(id) {
        var cartItems = this.state.cart;
        var resultCart = [];
        cartItems.forEach((item) => {
            if (item.id !== id) {
                resultCart.push(item);
            }
        });
        this.setState({cart: resultCart});
    }

    calculatePrice(item) {
        var cost = 0;
        cost += item.basePrice;
        if (item.customizations.length > 0) {
            item.customizations.forEach((customization) => {
                cost += customization.price;
            })
        }
        return cost;
    }

    calculateTotal() {
        var total = 0;
        this.state.cart.forEach((item) => {
            total += this.calculatePrice(item);
        })
        return total;
    }

    setTime(time) {
        this.setState({time: time, restaurantsVisible: true});
    }

    setRestaurant(restaurant) {
        this.setState({restaurant: restaurant, stage: 1});
    }

    backToSelectTimeRestaurant() {
        this.setState({stage: 0, restaurant: -1, category: 'All Items', cart: [], cartIndex: 0})
    }

    setCategory(category) {
        this.setState({category: category})
    }

    goToCheckout() {
        this.setState({stage: 2})
    }

    backToSelectItems() {
        this.setState({stage: 1})
    }

    goToConfirmation(paymentMethod) {
        this.setState({stage: 3, paymentMethod: paymentMethod})
    }

    returnToHomepage() {
        this.setState({
            stage: 0,
            time: -1,
            restaurantsVisible: false,
            restaurant: -1,
            category: 'All Items',
            cartIndex: 0,
            cart: [],
            canCheckout: false,
            paymentMethod: ''
        })
    }

    render() {
        return (
            <div style={this.rootStyle}>
                <Container style={this.containerStyle}>
                    {this.state.stage === 0 &&
                    <DiningOrderSelectTimeRestaurant
                        rootStyle={this.rootStyle}
                        cardHeightStyle={this.cardHeightStyle}
                        cardTextOverflowStyle={this.cardTextOverflowStyle}
                        time={this.state.time}
                        times={this.times}
                        setTime={this.setTime.bind(this)}
                        restaurantsVisible={this.state.restaurantsVisible}
                        restaurants={this.menuRestaurants}
                        restaurantImgStyle={this.restaurantImgStyle}
                        setRestaurant={this.setRestaurant.bind(this)}/>
                    }
                    {this.state.stage === 1 &&
                    <DiningOrderSelectItems
                        rootStyle={this.rootStyle}
                        cardHeightStyle={this.cardHeightStyle}
                        cardTextOverflowStyle={this.cardTextOverflowStyle}
                        backAction={this.backToSelectTimeRestaurant.bind(this)}
                        restaurant={this.state.restaurant}
                        restaurants={this.menuRestaurants}
                        category={this.state.category}
                        setCategory={this.setCategory.bind(this)}
                        items={this.menuItems}
                        cart={this.state.cart}
                        calculatePrice={this.calculatePrice.bind(this)}
                        calculateTotal={this.calculateTotal.bind(this)}
                        cartAddItem={this.cartAddItem.bind(this)}
                        cartRemoveItem={this.cartRemoveItem.bind(this)}
                        goToCheckout={this.goToCheckout.bind(this)}
                    />
                    }
                    {this.state.stage === 2 &&
                    <DiningOrderCheckout
                        rootStyle={this.rootStyle}
                        cardHeightStyle={this.cardHeightStyle}
                        cardTextOverflowStyle={this.cardTextOverflowStyle}
                        backAction={this.backToSelectItems.bind(this)}
                        time={this.state.time}
                        restaurant={this.state.restaurant}
                        cart={this.state.cart}
                        calculatePrice={this.calculatePrice.bind(this)}
                        calculateTotal={this.calculateTotal.bind(this)}
                        cartRemoveItem={this.cartRemoveItem.bind(this)}
                        goToConfirmation={this.goToConfirmation.bind(this)}
                    />
                    }
                    {this.state.stage == 3 &&
                    <DiningOrderConfirmation
                        time={this.state.time}
                        restaurant={this.state.restaurant}
                        paymentMethod={this.state.paymentMethod}
                        calculateTotal={this.calculateTotal.bind(this)}
                        cart={this.state.cart}
                        returnToHomepage={this.returnToHomepage.bind(this)}
                    />
                    }
                </Container>
            </div>
        );
    }
}

export default DiningOrder;