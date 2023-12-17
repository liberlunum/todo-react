import styles from "./TodoForm.module.css";
import { useState } from "react";

function TodoForm({ addNewTodo }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addNewTodo(text, date);
    setText("");
  };
  const onTextChange = (e) => {
    setText(e.target.value);
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          className={styles.todoInput}
          type="text"
          placeholder={"Введите задание..."}
          value={text}
          onChange={onTextChange}
        />
        <input
          className={styles.inputCalendar}
          type="date"
          value={date}
          onChange={onDateChange}
        />
        <button className={styles.todoButton}>Добавить</button>
      </form>
    </>
  );
}
export default TodoForm;
