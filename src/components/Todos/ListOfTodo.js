import React from 'react';

const ListOfTodo = ({ todos, valid }) => {
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
    </div>
  );
};

export default ListOfTodo;
