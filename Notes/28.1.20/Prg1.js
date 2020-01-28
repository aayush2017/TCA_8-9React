import React from 'react';

export default class Prg1 extends React.Component {
    constructor() {
        super();
        this.initialState = {
            fullname: '',
            username: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.state = this.initialState;
    }
    handleChange(event) {
        this.setState({
          [event.target.name] : [event.target.value]
        });
      }
    render() {
        return (
            <div>
                <h1>Hello From ABC</h1>
                <label>Fullname <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleChange} /></label>
                <label>Username <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /></label>
            </div>
            
        );
    }
}
