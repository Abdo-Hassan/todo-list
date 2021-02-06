import React from 'react';

const ListOfTodo = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className='list-group-item'>
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfTodo;
