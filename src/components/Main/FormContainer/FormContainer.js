import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import DatePicker from "react-datepicker";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './FormContainer.module.scss';
import "react-datepicker/dist/react-datepicker.css";


import {changeFrom} from '../../../redux/actions'; 
import {changeTo} from '../../../redux/actions'; 



function FormContainer() {

  const state = useSelector(state => state );
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className={styles.form}>
      <Form>
          <Row>
            <Col md={4}>
                <Form.Group controlId="from-select">
                  <Form.Label>From:</Form.Label>
                  <Form.Control as="select" value={state.selectedFrom} onChange={(event) => dispatch(changeFrom(event.target.value))}>
                  <option>--Choose departure station--</option>
                    {state.data.map((option) => (
                      <option key={option.id} value={option.from}>{option.from}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="to-select">
                <Form.Label>To</Form.Label>
                <Form.Control as="select" value={state.selectedTo} onChange={(event) => dispatch(changeTo(event.target.value))}>
                <option>--Choose destination station--</option>
                  {state.destinationList.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label className={styles.datapicerLabel}  htmlFor="datapicker">Select Date:</Form.Label>
                <DatePicker
                  id="datapicker" 
                  selected={startDate} 
                  onChange={date => setStartDate(date)}
                 />
              </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
              <Form.Group controlId="time-select">
                <Form.Label>Time:</Form.Label>
                <Form.Control as="select" custom>
                  <option>--Choose departure time--</option>
                  {state.departureList.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
            <Button
              className={styles.sendBtn} 
              variant="primary" 
              type="submit">
                Search
            </Button>
            </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormContainer;