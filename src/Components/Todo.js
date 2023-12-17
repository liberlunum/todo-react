import {
  RiSkullFill,
  RiDeleteBin2Fill,
  RiCheckDoubleFill,
} from "react-icons/ri";
import styles from "./Todo.module.css";
function Todo({
  text,
  date,
  id,
  isCompleted,
  deleteTodo,
  checkTodoHandler,
  initialTodos,
}) {
  function onClick() {
    checkTodoHandler(id);
  }

  return (
    <div
      className={`${styles.todo} ${isCompleted ? styles.completedTodo : ""}`}
    >
      <div className={styles.todoText}>
        <RiSkullFill className={styles.todoIcon} />
        {text}
      </div>
      <div className={styles.todoDate}>{date}</div>
      <div>
        <RiCheckDoubleFill className={styles.checkIcon} onClick={onClick} />
        <RiDeleteBin2Fill
          className={styles.deleteIcon}
          onClick={() => deleteTodo(id)}
        />
      </div>
    </div>
  );
}
export default Todo;
