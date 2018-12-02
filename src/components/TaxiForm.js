import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

export default class TaxiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    console.log("form props", this.props)
    return (
      <>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Name:</Label>
            <Input type="text" name="name" id="form-name" placeholder="name" bsSize="sm" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleNumber">Phone:</Label>
            <Input type="text" name="phone" id="exampleNumber" placeholder="phone" bsSize="sm" />
          </FormGroup>

          {/* <FormGroup>
            <Label for="exampleAddress">Starting Point</Label>
            <Input type="text" name="start-address" id="start-address" placeholder="starting address"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Destination</Label>
            <Input type="text" name="destination-address" id="destination-address" placeholder="destination address"/>
          </FormGroup> */}
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
            <Input type="email" name="email" id="form-email" placeholder="email" bsSize="sm" />
          </FormGroup>

          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleSelect">Passengers:</Label>
                <Input type="select" name="passengers" id="form-occupants" bsSize="sm">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9 or more</option>
                </Input>
              </FormGroup>
            </Col>
          </Row> 

          <FormGroup>
            <Label for="exampleCheckbox">Direction:</Label>
            <div>
              <CustomInput inline checked type="radio" id="one-way" name="direction" label="One-way" />
              <CustomInput inline type="radio" id="two-way" name="direction" label="Two-way" />
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
            <Input type="textarea" name="comments" id="form-comments" />
          </FormGroup>
  
          <Button className="mt-3 mb-5 px-5" color="warning">Submit</Button>
        </Form>
      </>
    );
  }
}