import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import axios from 'axios';

export default class TaxiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passengers: 1,
      name: '',
      phone: '',
      email: '',
      passengers: 1,
      direction: 'One-way',
      comments: '',
    }
  }

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log('form state ', this.state);
    axios
      .put("http://localhost:3002/send", this.state)
      .then(response => {
        if (response.data.msg === 'success') {
          alert("Message Sent."); 
          this.setState({
            passengers: 1,
            name: '',
            phone: '',
            email: '',
            direction: 'One-way',
            comments: '',
          })
        } else if (response.data.msg === 'fail') {
            alert("Message failed to send.")
        }
      })
      .catch((error) => console.log(error))
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log("form props", this.props)
    console.log(this.state)
    return (
      <>
        <Form onSubmit={(e) => this.handleFormSubmit(e)}>
          <FormGroup>
            <Label for="exampleEmail">Name:</Label>
            <Input type="text" name="name" id="form-name" placeholder="name" bsSize="sm" onChange={(e) => this.handleChange(e)}/>
          </FormGroup>

          <FormGroup>
            <Label for="exampleNumber">Phone:</Label>
            <Input type="text" name="phone" id="exampleNumber" placeholder="phone" bsSize="sm" onChange={(e) => this.handleChange(e)}/>
          </FormGroup>

          {/* <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input type="date" name="date" id="form-date" placeholder="date placeholder" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleTime">Time</Label>
                <Input type="time" name="time" id="form-time" placeholder="time placeholder" />
            </FormGroup>
          </Col>
          </Row> */}

          <FormGroup form>
            <Label for="exampleEmail">Email:</Label>
            <Input type="email" name="email" id="form-email" placeholder="email" bsSize="sm" onChange={(e) => this.handleChange(e)}/>
          </FormGroup>

          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleSelect">Passengers:</Label>
                <Input type="select" name="passengers" id="form-occupants" bsSize="sm" onChange={(e) => this.handleChange(e)}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9 or more</option>
                </Input>
              </FormGroup>
            </Col>
          </Row> 

          <FormGroup>
            <Label for="exampleCheckbox">Direction:</Label>
            <div>
              <CustomInput 
                inline checked 
                type="radio" 
                id="one-way" 
                name="direction"
                value="One-way" 
                label="One-way" 
                onChange={(e) => this.handleChange(e)}
                checked={this.state.direction === 'One-way'} 
              />
              <CustomInput 
                inline 
                type="radio" 
                id="two-way" 
                name="direction" 
                value="Two-way" 
                label="Two-way"
                onChange={(e) => this.handleChange(e)}
                checked={this.state.direction === 'Two-way'} 
              />
            </div>
          </FormGroup>

          {/* <FormGroup>
            <Label for="exampleCheckbox">Payment:</Label>
            <div>
              <CustomInput inline checked type="radio" id="cash" name="payment" label="Cash" />
              <CustomInput inline type="radio" id="card" name="payment" label="Card" />
            </div>
          </FormGroup> */}


          <FormGroup>
            <Label for="exampleText">Comments:</Label>
            <Input type="textarea" name="comments" id="form-comments" onChange={(e) => this.handleChange(e)}/>
          </FormGroup>
  
          <Button className="mt-3 mb-5 px-5" color="warning">Submit</Button>
        </Form>
      </>
    );
  }
}