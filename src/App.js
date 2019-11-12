import React, {Component} from 'react';
import './App.css';
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import ToDo from "./components/ToDo";
import ContentCard from "./components/ContentCard";
import Product from "./components/Product";
import productsData from "./components/vschoolProducts";
import toDoData from "./components/toDoData";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: toDoData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    this.setState(prevState => {
       const updatededTodos = prevState.todos.map(todo =>{
         if(todo.id == id){
           todo.completed = !todo.completed
         }
         return todo
       })
       return {
         todos: updatededTodos
       }
    })
    console.log("changed", id)
  }
  render(){
    const toDo = this.state.todos.map(item => <ToDo key = {item.id} item = {item}
    handleChange = {this.handleChange}/>)
    return(
      <div className = "toDoContainer">
        {toDo}
      </div>
    )
  }
}

export default App;
