import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import styles from './App.module.scss';

import Header from '../Header';





function App() {


  return (
    <div className={styles.App}>
      <Container>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
