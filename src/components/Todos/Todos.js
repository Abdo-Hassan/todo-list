import React, { useState, useEffect } from 'react';
import { TodosData } from '../../data/data';
import { Button } from 'react-bootstrap';
import ListOfTodo from './ListOfTodo';

const Todos = () => {
  const newDate = new Date().toISOString().split('T')[0];
  const [todos, setTodos] = useState(TodosData);
  const [newTodo, setNewTodo] = useState({});

  const handleClick = () => {
    setTodos([...todos, newTodo]);
  };

  const handleChange = (e) => {
    const todoValue = e.target.value;
    let newId = todos[todos.length - 1].id ? todos[todos.length - 1].id : 0;
    setNewTodo({ ...newTodo, id: ++newId, todo: todoValue, date: newDate });
  };

  return (
    <>
      <div className='todo-wrapper'>
        <input
          type='text'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          placeholder='Add new to do'
          name='todo'
          autoFocus
          onChange={handleChange}
        />
        <Button type='submit' className='btn btn-primary' onClick={handleClick}>
          Add todo
        </Button>
        <Button id='clear-list' type='button' className='btn btn-dark m-2'>
          Clear list
        </Button>
      </div>
      <ListOfTodo todos={todos} />
    </>
  );
};

export default Todos;
