import Todo from "./Todo";

function TodoList({ todos, deleteTodo, checkTodoHandler, initialTodos }) {
  return todos.length === 0 ? (
    <h2>Пока ничего</h2>
  ) : (
    <div>
      {initialTodos.map((todo, index) => (
        <Todo
          key={todo.id}
          text={todo.text}
          date={todo.date}
          id={todo.id}
          isCompleted={todo.isCompleted}
          deleteTodo={deleteTodo}
          checkTodoHandler={checkTodoHandler}
          initialTodos={initialTodos}
        />
      ))}
    </div>
  );
}
export default TodoList;
