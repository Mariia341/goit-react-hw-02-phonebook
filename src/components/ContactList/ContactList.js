import PropTypes from 'prop-types';
import React from "react";
import { Item, Text, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <Item key={id}>
                <Text>{name} {number}</Text>
                 <Button onClick={() => onDeleteContact(id)}>Delete</Button>
            </Item>
        ))}  
       
    </ul>
);


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDelereContact: PropTypes.func.isRequired,
};

export default ContactList;