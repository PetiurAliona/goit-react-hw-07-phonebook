import {useEffect} from 'react'

import ContactForm from "./components/ContactForm/ContactForm"
import Filter from "./components/Filter/Filter"
import ContactsList from "./components/ContactsList/ContactsList"

import { useDispatch } from 'react-redux'
import { getContacts } from './redux/contacts/contacts-operations'

const App = () => {

const dispatch = useDispatch()

useEffect(() => 
  dispatch(getContacts())
, [dispatch])

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  )
}

export default App
