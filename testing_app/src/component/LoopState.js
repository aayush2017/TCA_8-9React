import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Alert } from 'react-bootstrap';
// npm install react-bootstrap bootstrap
export default class LoopState extends React.Component {
    constructor() {
        super();
        this.initialState = {
            fnm: '',
            mess: 'Check Vote Eligibilty',
            messColor: 'primary'
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.checkVal = this.checkVal.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name] : [event.target.value]
        });
    }
    checkVal() {
        var age = parseInt(this.state.fnm);
        if(age >=18 && age <=50) {
            this.setState({
                mess: 'You are Eligible for the Vote !',
                messColor: 'success'
                });
            // this.state.messColor = 'sucess';
        } else {
            this.setState({
            mess: 'You are not Eligible for the Vote !',
            messColor: 'danger'
            });
        //    this.state.;
        }
    }
    render() {
        return(
            <div class="container">
                <Form>
                    <Form.Group>
                        <Form.Label>Enter your Age</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Age" name="fnm" value={this.state.a} onChange={this.handleChange} ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button onClick={this.checkVal}>Check</Button>
                    </Form.Group>
                </Form>
                <Alert key='0' variant={this.state.messColor}>
                    {this.state.mess}
                </Alert>
            </div>
        );
    }
}