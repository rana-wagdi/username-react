import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button'

import './AddUser.css'
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState("");


    const addUserHandler = (event) => {
        event.preventDefault();
    }
    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
    }

    return (
      <Card >
        <form className="input" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    );
}

export default AddUser;