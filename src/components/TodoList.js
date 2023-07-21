// TodoList.js
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <ListGroup>
            {props.list.map((item, index) => (
              <TodoItem
                key={index}
                item={item}
                deleteItem={() => props.deleteItem(item.id)}
                editItem={() => props.editItem(index)}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;
