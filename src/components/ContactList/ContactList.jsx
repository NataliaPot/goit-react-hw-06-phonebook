import React from 'react';
import { ListItem } from './ContactList.styled';
import Contact from 'components/Contact/Contact';
import FilterContact from 'components/FilterContact/FilterContact';
import { nanoid } from '@reduxjs/toolkit';
import {useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const onFilteredContact = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <>
      <FilterContact />
      <ListItem>
        {onFilteredContact.map(contact => (
          <Contact key={nanoid()} {...contact} />
        ))}
      </ListItem>
    </>
  );
};

export default ContactList;
