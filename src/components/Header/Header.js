import React from 'react';
import styles from './Header.module.scss';

import Logo from './Logo';



function Header() {

  return (
    <div className={styles.header}>
      <Logo/>
    </div>
  );
}

export default Header;