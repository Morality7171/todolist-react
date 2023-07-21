// TodoForm.js
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const TodoForm = (props) => {
  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="add item . . . "
            size="lg"
            value={props.userInput}
            onChange={(item) => props.updateInput(item.target.value)}
            aria-label="add something"
            aria-describedby="basic-addon2"
          />
          <InputGroup style={{ justifyContent: "center" }}>
            <Button variant="primary" className="mt-2" onClick={props.addItem}>
              ADD
            </Button>
          </InputGroup>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default TodoForm;
