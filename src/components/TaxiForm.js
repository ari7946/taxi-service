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
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" name="name" id="form-name" placeholder="name" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="form-email" placeholder="email" />
              </FormGroup>
            </Col>
          </Row>
          {/* <FormGroup>
            <Label for="exampleAddress">Starting Point</Label>
            <Input type="text" name="start-address" id="start-address" placeholder="starting address"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Destination</Label>
            <Input type="text" name="destination-address" id="destination-address" placeholder="destination address"/>
          </FormGroup> */}
          <Row form>
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
          </Row>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label for="exampleSelect">Number of Occupants</Label>
                <Input type="select" name="select" id="form-occupants">
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
            <Label for="exampleCheckbox">Direction</Label>
            <div>
              <CustomInput inline checked type="radio" id="exampleCustomRadio" name="customRadio" label="One-way" />
              <CustomInput inline type="radio" id="exampleCustomRadio2" name="customRadio" label="Two-way" />
            </div>
          </FormGroup>
          <Button color="info my-3 px-5">Submit</Button>
        </Form>
      </>
    );
  }
}