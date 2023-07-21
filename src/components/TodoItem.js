// TodoItem.js
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const TodoItem = (props) => {
  return (
    <div>
      <ListGroup.Item variant="dark" action style={{ display: "flex", justifyContent: "space-between" }}>
        {props.item.value}
        <span>
          <Button style={{ marginRight: "10px" }} variant="success" onClick={props.deleteItem}>
            DONE
          </Button>
          <Button variant="secondary" onClick={props.editItem}>
            Edit
          </Button>
        </span>
      </ListGroup.Item>
    </div>
  );
};

export default TodoItem;
