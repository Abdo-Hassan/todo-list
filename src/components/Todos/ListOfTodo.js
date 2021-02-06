import React, { useContext } from 'react';
import DoneTodos from '../DoneTodos/DoneTodos';
import { TodoContext } from '../../context/TodoContext';

const ListOfTodo = ({ valid }) => {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {!valid && (
        <div className='alert alert-danger invalid' role='alert'>
          Please enter a new todo
        </div>
      )}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className='list-group-item'>
            <span>{todo.todo}</span>
            <span className='todo-date'>{todo.date}</span>
            <i className='far fa-edit edit'></i>
            <i className='far fa-trash-alt remove'></i>
          </li>
        ))}
      </ul>
      <DoneTodos />
    </div>
  );
};

export default ListOfTodo;
