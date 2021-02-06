import React, { useState } from 'react';
import { TodosData } from '../../data/data';
import { Button } from 'react-bootstrap';
import ListOfTodo from './ListOfTodo';

const Todos = () => {
  const newDate = new Date().toISOString().split('T')[0];
  const [todos, setTodos] = useState(TodosData);
  const [newTodo, setNewTodo] = useState('');
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newId = todos[todos.length - 1].id ? todos[todos.length - 1].id : 0;
    if (newTodo) {
      setTodos([...todos, { id: ++newId, todo: newTodo, date: newDate }]);
      setNewTodo('');
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='todo-wrapper'>
        <input
          type='text'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          placeholder='Add new to do'
          name='todo'
          autoFocus
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <Button type='submit' className='btn btn-primary'>
          Add todo
        </Button>
        <Button
          id='clear-list'
          type='button'
          className='btn btn-dark m-2'
          onClick={() => setTodos([])}
        >
          Clear list
        </Button>
      </div>
      <ListOfTodo todos={todos} valid={valid} />
    </form>
  );
};

export default Todos;
