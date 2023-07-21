// App.js
import React, { Component } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class TodoListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: [],
    };
  }

  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  addItem() {
    if (this.state.userInput.trim() !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };

      const list = [...this.state.list];
      list.push(userInput);

      this.setState({
        list,
        userInput: "",
      });
    }
  }

  deleteItem(key) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== key);

    this.setState({
      list: updateList,
    });
  }

  editItem = (index) => {
    const todos = [...this.state.list];
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...todos];
      updatedTodos[index].value = editedTodo;
      this.setState({
        list: updatedTodos,
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <TodoForm
          userInput={this.state.userInput}
          updateInput={(value) => this.updateInput(value)}
          addItem={() => this.addItem()}
        />
        <TodoList
          list={this.state.list}
          deleteItem={(key) => this.deleteItem(key)}
          editItem={(index) => this.editItem(index)}
        />
      </div>
    );
  }
}

export default TodoListApp;
