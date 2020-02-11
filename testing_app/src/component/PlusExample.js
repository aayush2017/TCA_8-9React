import React from 'react';

export default class PlusExample extends React.Component {
    constructor() {
        super();
        this.initialState = {
            a: 0,
            b: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.checkValue = this.checkValue.bind(this);
        this.state = this.initialState;
    }
    handleChange(event) {
        this.setState({
          [event.target.name] : [event.target.value]
        });
      }
      checkValue() {
          var c;
          c = parseInt(this.state.a) + parseInt(this.state.b);
        alert(c);
      }
    render() {
        return (
            <div>
                <h1>Addition Example</h1>
                <label>A <input type="text" name="a" value={this.state.a} onChange={this.handleChange} /></label>
                <label>B <input type="text" name="b" value={this.state.b} onChange={this.handleChange} /></label>
                <button onClick={this.checkValue}>Check</button>
            </div>
            
        );
    }
}
