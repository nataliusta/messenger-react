import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
      <div className={classes.header}>
        <img src="https://i.pinimg.com/originals/f3/53/5d/f3535dc3f95e71506f7c80755610176c.png" alt="Whatsapp logo." />
        <span className={classes.logo}>WhatsApp</span>
      </div>
    );
  }

  export default Header;