import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import BGIMG from '../../assets/bg-note.jpg'
import './todo.css'

const Todo = () => {
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodoList([
      ...todoList, 
      { id: Math.floor(Math.random() * 10000),
        text: input
      }])
    setInput('')
  }

  return (
    <>
      <div className='container__todo'>
        <Form className='d-flex justify-content-center todo__form' onSubmit={handleSubmit}>
          <Form.Group style={{'width': 350}} className=''>
            <Form.Control size='sm' type='text' placeholder='Todo-List' value={input} onChange={handleChange}></Form.Control>
          </Form.Group>
          <Button className='ms-2' size='sm' variant='primary' type="submit">Add</Button>
        </Form>
        
        <div className='container__todo-list'>
          <img src={BGIMG} alt="" className="bg-img"/>
        </div>
      </div>
      
    </>
  )
}

export default Todo