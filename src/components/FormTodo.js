import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const FormTodo = (props) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    props.onAdd(value)
    setValue("")
  }
  return (
    <Form className="card" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>TODOS</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button variant="primary mt-3" type="submit">
        Add Todo
      </Button>
    </Form>
  )
}

export default FormTodo
