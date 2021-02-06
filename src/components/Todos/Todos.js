import React from 'react';
import { Button } from 'react-bootstrap';

const Todos = () => {
  return (
    <form>
      <div className='todo-wrapper'>
        <input
          type='text'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          placeholder='Add new to do'
          name='todo'
          autofocus
        />
        <Button type='submit' className='btn btn-primary'>
          Add todo
        </Button>
        <Button id='clear-list' type='button' className='btn btn-dark m-2'>
          Clear list
        </Button>
      </div>
    </form>
  );
};

export default Todos;
