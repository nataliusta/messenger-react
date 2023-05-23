import React from 'react';
import classes from './UsersList.module.css';
import UsersItem from './UsersItem/UsersItem';

const UsersList = () => {
    return (
      <div className={classes.usersList}>
        <UsersItem name="User 1" id="1"/>
        <UsersItem name="User 2" id="2"/>
        <UsersItem name="User 3" id="3"/>
      </div>
    );
  } 

  export default UsersList;