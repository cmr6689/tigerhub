import React from 'react';
import {Button, Container, Form, FormGroup, Label, Input, InputGroup,
    InputGroupAddon, InputGroupText} from 'reactstrap';

export default class FinanceTransfer extends React.Component {
    constructor(props) {
        super(props);
    }

    sendAccount(value) {
        this.props.changeAccount(value);
    }

    sendMethod(value) {
        this.props.changeMethod(value);
    }

    sendAmount(amount) {
        this.props.changeAmount(amount);
    }

    render() {
        return (
            <div>
                <Container style={{display: 'flex'}}>
                    <Form>
                        <FormGroup>
                            <Label for="selectAccount">Which account?</Label>
                            <Input type="select" id="selectAccount" onChange={(e) => this.sendAccount(e.target.value)}>
                                <option>Academic Balance</option>
                                <option>Dining Dollars</option>
                                <option>Tiger Bucks</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="selectMethod">Which method?</Label>
                            <Input type="select" id="selectMethod" onChange={(e) => this.sendMethod(e.target.value)}>
                                <option>KeyBank</option>
                                <option>American Express</option>
                                <option>Chase</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="enterAmount">How much?</Label>
                            <InputGroup>
                                <InputGroupAddon addonType={"prepend"}>
                                    <InputGroupText>$</InputGroupText>
                                </InputGroupAddon>
                                <Input type="amount" id="selectAmount" placeholder="000.00" onChange={(e) => this.sendAmount(e.target.value)}/>
                            </InputGroup>
                        </FormGroup>
                        <Button color='danger' onClick={this.props.changePage("balances")}>Go Back</Button>
                        <Button color='success' onClick={this.props.changePage("confirm")}>Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}