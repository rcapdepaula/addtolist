import React, { useState } from 'react'
// styles
import { Wrapper, FormWrapper, List } from './ControlledInputs.styles'

const ControlledInputs = () => {
  // first name state
  const [firstName, setFirstName] = useState('')
  //email state
  const [email, setEmail] = useState('')
  // create a state value for list of people
  const [people, setPeople] = useState([])
  // handlesubmit, add item to list and spread people if both and email are not empty on people
  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName.length > 0 && email.length > 0) {
      setPeople(people.concat({ firstName: firstName, email: email }))
      setEmail('')
      setFirstName('')
    }
  }

  return (
    <Wrapper>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          {/* firt name */}
          <label htmlFor='firstName'>Nome</label>
          <input
            type='text'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* email */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit'>Adicionar à lista</button>
        </form>
      </FormWrapper>
      {/* //create a list of people */}
      <List>
        <ul>
          {people.map((person) => (
            <li key={person.email}>
              <span>{person.firstName}: </span>
              <p> {person.email}</p>
            </li>
          ))}
        </ul>
      </List>
    </Wrapper>
  )
}

export default ControlledInputs
