import React from 'react';
import classes from './UsersList.module.css';
import UsersItem from './UsersItem/UsersItem';

const UsersList = () => {

  let UsersData = [
    {id: 1, name: "User 1"},
    {id: 2, name: "User 2"},
    {id: 3, name: "User 3"},
  ]

    return (
      <div className={classes.usersList}>
        <UsersItem id={UsersData[0].id} name={UsersData[0].name} />
        <UsersItem id={UsersData[1].id} name={UsersData[1].name}/>
        <UsersItem id={UsersData[2].id} name={UsersData[2].name}/>
      </div>
    );
  } 

  export default UsersList;