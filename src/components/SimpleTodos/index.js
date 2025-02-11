import React, { useState } from 'react';
import TodoItem from '../TodoItem';
import './index.css';

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
];

const SimpleTodos = () => {
  const [todoList, setTodoList] = useState(initialTodosList);

  const onDeleteTodo = id => {
    const updatedList = todoList.filter(eachTodo => eachTodo.id !== id);
    setTodoList(updatedList);
  };

  return (
    <div className="app-con">
      <div className="list-con">
        <h1>Simple Todos</h1>
        <ul>
          {todoList.map(eachTodo => (
            <TodoItem
              key={eachTodo.id}
              onDeleteTodo={onDeleteTodo}
              todoDetails={eachTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SimpleTodos;
