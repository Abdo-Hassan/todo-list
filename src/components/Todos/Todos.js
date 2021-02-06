import React, { useState, useEffect } from 'react';
import { TodosData } from '../../data/data';
import { Button } from 'react-bootstrap';
import ListOfTodo from './ListOfTodo';

const Todos = () => {
  const [todos, setTodos] = useState(TodosData);

  return (
    <>
      <form>
        <div className='todo-wrapper'>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Add new to do'
            name='todo'
            autoFocus
          />
          <Button type='submit' className='btn btn-primary'>
            Add todo
          </Button>
          <Button id='clear-list' type='button' className='btn btn-dark m-2'>
            Clear list
          </Button>
        </div>
      </form>
      <ListOfTodo todos={todos} />
    </>
  );
};

export default Todos;
