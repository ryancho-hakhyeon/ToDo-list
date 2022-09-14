import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FcFullTrash } from 'react-icons/fc'
import { FiEdit } from 'react-icons/fi'

import BGIMG from '../../assets/bg-note.jpg'
import './todo.css'

const Todo = () => {
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState([])
  const ref = useRef(null)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    ref.current.focus()
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    
    const previousTodoList = [...todoList]

    if (input === "") {
      return
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text: input,
        completed: false
      }
      const newTodoList = previousTodoList.concat(newTodo)
      setTodoList(newTodoList)
    }
    setInput('')
    
  }, [todoList, input])

  const handleChecked = useCallback((id) => {
    const previousTodoList = [...todoList]
    const newTodoList = previousTodoList.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodoList(newTodoList)
  }, [todoList])

  const handleDeleteTodo = useCallback((id) => {
    const previousTodoList = [...todoList]
    const newTodoList = previousTodoList.filter((todo) => todo.id !== id)

    setTodoList(newTodoList)
  }, [todoList])

  const handleEditTodo = useCallback((id) => {
    console.log(id)
  }, [])

  return (
    <>
      <div className='container__todo'>
        <Form className='d-flex justify-content-center' onSubmit={handleSubmit}>
          <Form.Group style={{'width': 350}} className=''>
            <Form.Control size='sm' type='text' placeholder='Todo-List' value={input} onChange={handleChange} ref={ref}></Form.Control>
          </Form.Group>
          <Button className='ms-2' size='sm' variant='primary' type="submit">Add</Button>
        </Form>
        
        <div className='container__todo-list'>
          <div className='d-flex justify-content-center align-items-start'>
            <img src={BGIMG} alt="" className="position-absolute bg-img"/>
          </div>
          
          <div className='todolist__box'>
            <Form>
              {
                todoList.map(todo => (
                  <div key={ `${todo.id}` } className='d-flex todo__list'>
                    <Form.Check 
                      type='checkbox'
                      checked={todo.completed}
                      onChange={() => handleChecked(todo.id)}
                      className='me-2'
                    />
                    <p className={`text__box ${todo.completed ? 'completed' : ''}`}> { todo.text }</p>
                    <FiEdit className='me-2 button-icon' onClick={ () => handleEditTodo(todo.id) }/>
                    <FcFullTrash className='button-icon' onClick={ () => handleDeleteTodo(todo.id) }/>
                  </div>
                ))
              }
            </Form>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Todo