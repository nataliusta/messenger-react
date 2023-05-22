import React from 'react';
import classes from './UsersList.module.css';
import UsersItem from './UsersItem/UsersItem';

const UsersList = () => {
    return (
      <div className={classes.usersList}>
        <UsersItem />
        <UsersItem />
        <UsersItem />
      </div>
    );
  } 

  export default UsersList;