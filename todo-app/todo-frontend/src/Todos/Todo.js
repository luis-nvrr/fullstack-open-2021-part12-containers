import React from "react";

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "70%",
    margin: "auto",
  };

  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  const notDoneInfo = (
    <>
      <span id="not-done">This todo is not done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
        <button onClick={onClickComplete(todo)}> Set as done </button>
      </span>
    </>
  );

  const doneInfo = (
    <>
      <span id="done">This todo is done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
      </span>
    </>
  );

  return (
    <div id="todo-item" style={style} >
      <span id="todo-text">{todo.text}</span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  );
};

export default Todo;
