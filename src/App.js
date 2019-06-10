import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos:[],
      text:'',
      isClicked: false

    };
  }

  onClick = () => { 
    this.setState ({
      isClicked:true,
      todos:this.state.todos.concat(this.state.text),
      text:''
    })
  }

  onChange = (event) => {
    console.log(event);
    console.log(event.target.value);

    this.setState({
      text:event.target.value
    });
  }

  render() {
    return(
      <div className="App">
          {this.state.todos.map(function(value, index, array) {
             return (
               <li>
                {value}
               </li>
             );
          })}
        <input value={this.state.text} onChange={this.onChange}/>
        <button onClick={this.onClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
