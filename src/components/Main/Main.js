import React from 'react';
import styles from './Main.module.scss';

import FormContainer from './FormContainer';




function Main() {

  return (
    <div className={styles.main}>
      <FormContainer />
    </div>
  );
}

export default Main;