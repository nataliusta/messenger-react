import React from 'react';
import classes from './UsersList.module.css';
import UsersItem from './UsersItem/UsersItem';


const UsersList = (props) => {

  let state = props.store.getState().usersList;

  let usersElements = state.usersData.map( user => <UsersItem id={user.id} name={user.name} /> );

    return (
      <div className={classes.usersList}>
        { usersElements }
      </div>
    );
  } 

  export default UsersList;