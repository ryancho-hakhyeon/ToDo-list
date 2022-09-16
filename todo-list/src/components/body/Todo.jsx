import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Button, Form } from 'react-bootstrap'
import { FcFullTrash } from 'react-icons/fc'
import { FiEdit } from 'react-icons/fi'
import { GrSave } from 'react-icons/gr'
import { GiCancel } from 'react-icons/gi'
 
import BGIMG from '../../assets/bg-note.jpg'
import './todo.css'

const Todo = () => {
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState([])
  const [editText, setEditText] = useState(false)
  const [editTodoIndex, setEditTodoIndex] = useState(null)
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
    setEditText(true)
    setEditTodoIndex(id)
  }, [])

  const handleSaveEditTodo = useCallback((id) => {
    setEditText(false)
    setEditTodoIndex(null)

    const previousTodoList = [...todoList]
    const newTodoList = previousTodoList.map((todo) => {
      if(todo.id === id){
        todo.text = editText
      }
      return todo
    })
    setTodoList(newTodoList)
  }, [editText, todoList])

  const handleCancelEditTodo = useCallback((id) => {
    setEditText(false)
    setEditTodoIndex(null)
  }, [])

  return (
    <>
      <div className='container__todo'>
        <Form className='d-flex justify-content-center' onSubmit={handleSubmit}>
          <Form.Group style={{'width': 350}}>
            <Form.Control size='sm' type='text' placeholder='Todo-List' value={input} onChange={handleChange} ref={ref}></Form.Control>
          </Form.Group>
          <Button className='ms-2' size='sm' variant='primary' type="submit">Add</Button>
        </Form>
        
        <div className='container__todo-list'>
          <div className='d-flex justify-content-center align-items-start'>
            <img src={BGIMG} alt="" className="position-absolute bg-img"/>
          </div>
          
          <div className='d-flex justify-content-center align-items-start todolist__box'>
            <Form>
              {
                todoList.map(todo => (
                  <div key={ `${todo.id}` } className='d-flex todo__list'>
                    { editText && editTodoIndex === todo.id ? (
                      <>
                        <Form.Group style={{'width': 285, 'marginBottom': 12}}>
                          <Form.Control style={{'height': 25}} size='s' type='text' placeholder={todo.text} onChange={(e) => setEditText(e.target.value)}>
                          </Form.Control>
                        </Form.Group>

                        <GrSave className='ms-2 button-icon' style={{'fontSize': 19.5}} onClick={() => handleSaveEditTodo(todo.id)}/>
                        <GiCancel  className='ms-2 button-icon' style={{'fontSize': 19.5}} onClick={() => handleCancelEditTodo(todo.id)}/>
                      </>
                    ) : (
                      <>
                        <Form.Check 
                          type='checkbox'
                          checked={todo.completed}
                          onChange={() => handleChecked(todo.id)}
                          className='me-2'
                        />
                        <p className={`text__box ${todo.completed ? 'completed' : ''}`}> { todo.text }</p>
                        <FiEdit className='me-2 button-icon' onClick={ () => handleEditTodo(todo.id) }/>
                        <FcFullTrash className='button-icon' onClick={ () => handleDeleteTodo(todo.id) }/>
                      </>
                    )}
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