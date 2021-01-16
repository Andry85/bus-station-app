import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import styles from './App.module.scss';

import Header from '../Header';
import Main from '../Main';
import Footer from "../Footer";





function App() {


  return (
    <div className={styles.App}>
      <Container>
        <Row>
          <Col>
            <Header/>
            <Main/>
            <Footer text="Copyright 2021 © Bus Station App. All Rights Reserved." />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
