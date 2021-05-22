import React from 'react';

import Card from '../UI/Card';

import './UsersList.css';
const UsersList = (props) => {
    return (
      <Card>
        <ul className="users">
          {props.users.map((user) => (
            <li key ={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    );
}
export default UsersList;