import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     firstNum : 0,
     secondNum : 0,
     total : 0,
     operation : ''
    }
  }

  handleResult = (e) => {
      const {operation, firstNum, secondNum} = this.state;
      // let total = 0;
      // switch (this.state.operation){  
      //     case operation === '+':  
      //         total = firstNum+ secondNum;  
      //         break; 
      //     case operation === '-':  
      //         total = firstNum - secondNum;  
      //         break; 
      //     case operation === '*':  
      //         total = firstNum * secondNum;  
      //         break;
      //     case operation === '/':  
      //         total = firstNum / secondNum;  
      //         break;  
      //     case operation === '**':  
      //         total = firstNum ** secondNum;  
      //         break;  
      //     default :
      //         break;        
    if (operation === "-") {
        this.setState({total : firstNum - secondNum})
    }
    else if (operation === "+") {
        this.setState({total : firstNum + secondNum})
    }
    else if (operation === "*") {
      this.setState({total : firstNum * secondNum})
    }else if (operation === "/") {
      this.setState({total : firstNum / secondNum})
    }else{
      this.setState({total : firstNum ** secondNum})
    }
}
  render() {
    const {total ,firstNum , secondNum , operation} = this.state;
    return(
     
      <div className = "center">
        <h1>SIMPLE CALCULATOR</h1>
        <hr></hr>
        <br></br>
        FirstNumber : <input type = "number" placeholder= "FirstNumber" onChange = {e => this.setState({firstNum : Number(e.target.value)})}></input>
        <br></br>
        <br></br>
        SecondNumber : <input type = "number" placeholder = "SecondNumber" onChange = {e => this.setState({secondNum : Number(e.target.value)})}></input>
        <br></br>
        <br></br>
        <div>
                <button className = "button1" value = "+" onClick ={e => this.setState({operation : e.target.value})}>+</button>&nbsp;
                <button className = "button1" value = "-" onClick ={e => this.setState({operation : e.target.value})}>-</button>&nbsp;
                <button className = "button1" value = "*" onClick ={e => this.setState({operation : e.target.value})}>*</button>&nbsp;
                <button className = "button1" value = "/" onClick ={e => this.setState({operation : e.target.value})}>/</button>&nbsp;
                <button className = "button1" value = "**" onClick ={e => this.setState({operation : e.target.value})}>**</button>
        </div>
        <br></br>
        <div><button onClick = {e => this.handleResult(e)}>Calculate</button></div>
        <br></br>
        
        The result of {firstNum} {operation} {secondNum} is {total}
        <br></br>
        <br></br>
      </div>
    );
  }
  
}

export default App;
