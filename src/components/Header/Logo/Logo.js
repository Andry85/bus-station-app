import React from 'react';
import styles from './Logo.module.scss';

import logo_lic from './img/buss-station-logo.png';



function Logo() {

  return (
    <a href="/" className={styles.logo}>
      <img src={logo_lic} alt="logo"/>
    </a>
  );
}

export default Logo;