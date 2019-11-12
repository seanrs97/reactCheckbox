import React, {Component} from 'react';
import './App.css';

class App3 extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
      /* need for set state */  this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            return {
                count: prevState.count + 10000000
            }
        })
    }
    render(){
        return(
            <div>
                <h1> {this.state.count}</h1>
                <button onClick = {this.handleClick}>Change!</button>
            </div>
        )
    }
}
export default App3