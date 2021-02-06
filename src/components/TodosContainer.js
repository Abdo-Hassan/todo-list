import React from 'react';
import DoneTodos from './DoneTodos/DoneTodos';
import Todos from './Todos/Todos';

const TodosContainer = () => {
  return (
    <div className='wrapper'>
      <h1>Todo list</h1>
      <Todos />
      <DoneTodos />
    </div>
  );
};

export default TodosContainer;
