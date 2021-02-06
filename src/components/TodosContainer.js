import React from 'react';
import DoneTodos from './DoneTodos/DoneTodos';
import Todos from './Todos/Todos';

const TodosContainer = () => {
  return (
    <>
      <Todos />
      <DoneTodos />
    </>
  );
};

export default TodosContainer;
