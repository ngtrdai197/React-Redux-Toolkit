import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, fetchTodos, fetchPostsListApi } from "../store/todos";
import Todo from "../components/Todo";

function TodoList() {
  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchPostsListApi());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todosList) || [];
  const postsList = useSelector((state) => state.todos.postsList);
  console.log("postsList", postsList);
  const onAddTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      todo: "New Todo",
      compeleted: false,
    };
    dispatch(addTodo(newTodo));
  };
  return (
    <div>
      <h4>Todo list</h4>
      <button onClick={onAddTodo}>Add todo</button>
      {todos.length ? (
        todos.map((todo, index) => <Todo key={index} todo={todo} />)
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default TodoList;
