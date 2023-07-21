// index.js
import React from "react";
import ReactDOM from "react-dom";
import TodoListApp from "./TodoListApp";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoListApp />
  </React.StrictMode>,
  document.getElementById("root")
);
