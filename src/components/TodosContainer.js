import React from 'react';
import Todos from './Todos/Todos';

const TodosContainer = () => {
  return (
    <div className='wrapper'>
      <h1>Todo list</h1>
      <Todos />
    </div>
  );
};

export default TodosContainer;
