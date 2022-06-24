import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = (props) => {
  return (
    <div className="todo">
      {props.text}
      <div>
        <Button className="mt-3" onClick={() => props.delete(props.index)}>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default Todo;
