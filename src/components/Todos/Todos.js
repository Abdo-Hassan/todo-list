import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import ListOfTodo from './ListOfTodo';
import { TodoContext } from '../../context/TodoContext';

const Todos = () => {
  const { addTodo, clearList } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      addTodo(newTodo);
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
          onClick={() => clearList()}
        >
          Clear list
        </Button>
      </div>
      <ListOfTodo valid={valid} />
    </form>
  );
};

export default Todos;
