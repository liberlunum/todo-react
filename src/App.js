import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./Components/TodoForm";
import TodoActions from "./Components/TodoActions";
import TodoList from "./Components/TodoList";
import { useEffect, useState } from "react";

function App() {
  const [sourceTodos, setSourceTodos] = useState([]);
  const [todosForShow, setTodosForShow] = useState([]);

  useEffect(() => {
    saveInitialTodos();
  }, [sourceTodos]);

  const saveInitialTodos = () => {
    const copyTodos = JSON.parse(JSON.stringify(sourceTodos));
    setTodosForShow(copyTodos);
  };

  const deleteSortedTodoHandler = () => {
    setTodosForShow(sourceTodos);
  };

  const addNewTodoHandler = (text, date) => {
    const objectTodo = {
      text: text,
      date: date,
      isCompleted: false,
      id: uuidv4(),
      sorted: false,
    };
    setSourceTodos([...sourceTodos, objectTodo]);
  };
  const deleteTodoHandler = (id) => {
    setSourceTodos(sourceTodos.filter((todo) => todo.id !== id));
  };
  const checkTodoHandler = (id) => {
    setSourceTodos(
      sourceTodos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const sortingTextMinMaxHandler = () => {
    const sorted = [...todosForShow].sort((text1, text2) => {
      const textA = text1.text.toLowerCase();
      const textB = text2.text.toLowerCase();
      if (textA < textB) return -1;
      if (textA > textB) return 1;
      return 0;
    });
    setTodosForShow(sorted);
  };

  const sortingTextMaxMinHandler = () => {
    const sorted = [...todosForShow].sort((text1, text2) => {
      const textA = text1.text.toLowerCase();
      const textB = text2.text.toLowerCase();
      if (textA > textB) return -1;
      if (textA < textB) return 1;
      return 0;
    });
    setTodosForShow(sorted);
  };

  const sortingDateMinMaxHandler = () => {
    const sorted = [...todosForShow].sort((date1, date2) => {
      const dateA = date1.date;
      const dateB = date2.date;
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });
    setTodosForShow(sorted);
  };

  const sortingDateMaxMinHandler = () => {
    const sorted = [...todosForShow].sort((date1, date2) => {
      const dateA = date1.date;
      const dateB = date2.date;
      if (dateA < dateB) return -1;
      if (dateA > dateB) return 1;
      return 0;
    });
    setTodosForShow(sorted);
  };

  const filtersTextTodoHandler = (filtersText) => {
    const filters = sourceTodos.filter((todo) =>
      todo.text.includes(filtersText)
    );
    setTodosForShow(filters);
  };
  const filtersDateTodoHandler = (filtersDate) => {
    const filters = sourceTodos.filter((todo) =>
      todo.date.includes(filtersDate)
    );
    setTodosForShow(filters);
  };

  const filtersTextAndDateHandler = (filtersText, filtersDate) => {
    const filters = sourceTodos.filter((todo) => {
      const result =
        todo.text.includes(filtersText) && todo.date.includes(filtersDate);

      return result;
    });
    setTodosForShow(filters);
  };
  return (
    <div className="App">
      <h1 className={"title"}>Что будем делать?</h1>
      <TodoForm
        addNewTodo={addNewTodoHandler}
        saveInitialTodos={saveInitialTodos}
      />
      <TodoActions
        sortingTextMinMaxHandler={sortingTextMinMaxHandler}
        sortingTextMaxMinHandler={sortingTextMaxMinHandler}
        sortingDateMinMaxHandler={sortingDateMinMaxHandler}
        sortingDateMaxMinHandler={sortingDateMaxMinHandler}
        deleteSortedTodoHandler={deleteSortedTodoHandler}
        filtersTextTodoHandler={filtersTextTodoHandler}
        filtersDateTodoHandler={filtersDateTodoHandler}
        filtersTextAndDateHandler={filtersTextAndDateHandler}
        todos={sourceTodos}
      />
      <TodoList
        todos={sourceTodos}
        deleteTodo={deleteTodoHandler}
        checkTodoHandler={checkTodoHandler}
        initialTodos={todosForShow}
      />
    </div>
  );
}

export default App;
