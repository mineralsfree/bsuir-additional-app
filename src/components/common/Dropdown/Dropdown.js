import React from 'react';
import Form from 'react-bootstrap/Form'

export const MyDropdown = ({input, meta, capture, items, onChange, ...props}) => {
    const options =  items && items.map((el) => {
        return (<option>{el.name || el}</option>)
    })
    return (<Form.Group controlId="exampleForm.ControlSelect1"   >
        <Form.Label>{capture}</Form.Label>
        <Form.Control as="select" onChange={onChange}>
            {options}
        </Form.Control>
    </Form.Group>)
}
