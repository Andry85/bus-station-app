import React, { useState, useEffect } from "react";
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
import {changeDate} from '../../../redux/actions'; 
import {changeTime} from '../../../redux/actions'; 
import {changePath} from '../../../redux/actions';





function FormContainer() {

  const state = useSelector(state => state );
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());

  let isDisabled = true;

  if (state.selectedFrom && state.selectedTo && state.selectedTime && state.weekDay) {
    isDisabled = false;
  }



  return (
    <div className={styles.form}>
      <Form>
          <Row>
            <Col md={4}>
                <Form.Group controlId="from-select">
                  <Form.Label>From:</Form.Label>
                  <Form.Control as="select" value={state.selectedFrom} onChange={(event) => dispatch(changeFrom(event.target.value))}>
                  <option value=''>--Choose departure station--</option>
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
                <option value=''>--Choose destination station--</option>
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
                  onChange={date => {
                    setStartDate(date);
                    dispatch(changeDate(date));
                    
                  }
                   
                  }
                 />
              </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
              <Form.Group controlId="time-select">
                <Form.Label>Time:</Form.Label>
                <Form.Control as="select" value={state.selectedTime} onChange={(event) => dispatch(changeTime(event.target.value))}>
                  <option value=''>--Choose departure time--</option>
                  {state.departureList.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
            <Button
              className={styles.sendBtn} 
              disabled={isDisabled}
              onClick={(event) => {
                  event.preventDefault();
                  dispatch(changePath())
                }
              }
              variant="primary" 
              type="submit">
                Search
            </Button>
            </Col>
        </Row>
      </Form>

    

      {state.path.dayOn &&
        <ul className={styles.searchResult}>
          {state.path.stops.map((item, index) => (
              <li>
                <h3>{item.title}</h3>
                <p>{item.time}</p>
              </li>
          ))}
        </ul>
      }

      {state.path.dayOff &&
        <p className={styles.dayOffClass}>There is not a departure at {state.weekDay}</p>
      }

    </div>
  );
}

export default FormContainer;