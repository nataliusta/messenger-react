import React from 'react';
import classes from './UsersList.module.css';
import UsersItem from './UsersItem/UsersItem';

const UsersList = (props) => {

  let usersData = [
    {id: 1, name: "User 1"},
    {id: 2, name: "User 2"},
    {id: 3, name: "User 3"},
  ];

  let usersElements = usersData.map( user=> <UsersItem id={user.id} name={user.name} /> );

    return (
      <div className={classes.usersList}>
        { usersElements }
      </div>
    );
  } 

  export default UsersList;