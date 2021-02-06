import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const newDate = new Date().toISOString().split('T')[0];
  const [todos, setTodos] = useState([
    { id: 1, todo: 'have breakfast', date: newDate },
    { id: 2, todo: 'go to work', date: newDate },
    { id: 3, todo: 'sleep well', date: newDate },
  ]);
  return (
    <TodoContext.Provider value={todos}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
