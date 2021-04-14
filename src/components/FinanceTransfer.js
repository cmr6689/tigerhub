import React from 'react';
import FinanceNav from "./FinanceNav";
import {Container, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

function FinanceTransfer() {
    return(
        <div>
            <div style={{display: 'flex'}}>
                <FinanceNav />
                <div>
                    <Container style={{display: 'flex'}}>
                        <Form>
                            <FormGroup>
                                <Label for="selectAccount">Which account?</Label>
                                <Input type="select" id="selectAccount">
                                    <option>Academic Balance</option>
                                    <option>Dining Dollars</option>
                                    <option>Tiger Bucks</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="selectMethod">Which method?</Label>
                                <Input type="select" id="selectMethod">
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
                                    <Input type="amount" id="selectAmount" placeholder="000.00"/>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default FinanceTransfer;