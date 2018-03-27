import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import AgeStats from './AgeStats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      bithday: "1992-04-21",
      showStats: false
    };
  }
  changeBirthday() {
    console.log(this.state)
    this.setState({
      birthday: this.state.newDate,
      showStats: true
    });
  }
  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>input your birthday</h2>
          <FormControl type="date"
          onChange={ event => this.setState({ newDate: event.target.value})}
           /> <Button onClick={() => this.changeBirthday()}>
             submit</Button>
             {
               this.state.showStats ?
               <div className="fade age-stats">
             <AgeStats date={this.state.birthday}/>
               </div>
             :
             <div></div>
             }
        </Form>
      </div>
    );
  }
}
export default App;
