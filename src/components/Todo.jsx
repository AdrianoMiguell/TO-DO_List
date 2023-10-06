import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo-list"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {/* {todos.map((todo) => ( */}
      <div className="todo">
        <div>
          <p> {todo.text} </p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>
            Completar
          </button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>
            X
          </button>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Todo;
