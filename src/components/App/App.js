import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import styles from './App.module.scss';

import Header from '../Header';
import Main from '../Main';





function App() {


  return (
    <div className={styles.App}>
      <Container>
        <Row>
          <Col>
            <Header/>
            <Main/>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
