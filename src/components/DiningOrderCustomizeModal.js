import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

const DiningOrderCustomizeModal = (props) => {
    const {
        item,
        addToCart
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    var customizations = [];

    function addItemToCart() {
        if (item.hasOwnProperty('customizations')) {
            item.customizations.selectOne.map((selection) => {
                var customization;
                if (selection.hasOwnProperty('price')) {
                    customization = {name: selection.name, value: document.getElementById("customization" + selection.name).value, price: selection.price};
                } else {
                    customization = {name: selection.name, value: document.getElementById("customization" + selection.name).value, price: 0};
                }
                customizations.push(customization);
            });
            item.customizations.selectMultiple.map((selection) => {
                selection.options.map((option) => {
                    if (document.getElementById("customization" + option.name).checked) {
                        var customization;
                        if (option.hasOwnProperty('price')) {
                            customization = {name: option.name, value: true, price: option.price};
                        } else {
                            customization = {name: option.name, value: true, price: 0};
                        }
                        customizations.push(customization);
                    }
                })
            });
        }
        if (document.getElementById("customizationAllergy").value !== "") {
            var customization = {name: "Allergies", value: document.getElementById("customizationAllergy").value, price: 0}
            customizations.push(customization);
        }


        console.log(customizations);
        addToCart(item.name, item.price, customizations);
        toggle();
    }

    return (
        <div>
            <Button color="success" onClick={toggle}>Add to Cart</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Customize Item: {item.name}</ModalHeader>
                <ModalBody>
                    <Form>
                        {item.hasOwnProperty('customizations') && item.customizations.selectOne.map((selection) => {
                                return(
                                    <FormGroup>
                                        <Label for={"customization" + selection.name}><b>{selection.name}</b></Label>
                                        <Input type="select" id={"customization" + selection.name}>
                                            {selection.options.map((option) => {
                                                return(<option>{option.name}</option>);
                                            })}
                                        </Input>
                                    </FormGroup>);
                            })}
                        {item.hasOwnProperty('customizations') && item.customizations.selectMultiple.map((selection) => {
                                return(
                                    <div>
                                        <b>{selection.name}</b>
                                        {selection.options.map((option) => {
                                            return (
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="checkbox" id={"customization" + option.name} />
                                                        {option.name} {option.hasOwnProperty('price') && <span>(+${option.price.toFixed(2)})</span>}
                                                    </Label>
                                                </FormGroup>
                                            );
                                        })}
                                    </div>
                                )
                            })}
                        <FormGroup>
                            <Label for={"customizationAllergy"}><b>Allergies: </b></Label>
                            <Input id={"customizationAllergy"}></Input>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    <Button color="success" onClick={addItemToCart}>Add to Cart</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DiningOrderCustomizeModal;