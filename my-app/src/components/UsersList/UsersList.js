import React from 'react';
import classes from './UsersList.module.css';


const UsersList = () => {
    return (
      <div className={classes.users}>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </div>
    );
  } 

  export default UsersList;