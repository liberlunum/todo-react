import styles from "./TodoActions.module.css";
import { useEffect, useState } from "react";

function TodoActions({
  sortingTextMinMaxHandler,
  sortingTextMaxMinHandler,
  sortingDateMinMaxHandler,
  sortingDateMaxMinHandler,
  deleteSortedTodoHandler,
  filtersTextTodoHandler,
  filtersDateTodoHandler,
  filtersTextAndDateHandler,
  todos,
}) {
  const [sortText, setSortText] = useState(null);
  const [sortDate, setSortDate] = useState(null);
  const [checkBoxText, setCheckBoxText] = useState(false);
  const [checkBoxDate, setCheckBoxDate] = useState(false);
  const [filtersText, setFiltersText] = useState();
  const [filtersDate, setFiltersDate] = useState();

  useEffect(() => {
    onInputChange();
  }, [filtersText, filtersDate, checkBoxText, checkBoxDate]);

  const handleChangeCheckBoxText = () => {
    setCheckBoxText(!checkBoxText);
  };
  const handleChangeCheckBoxDate = () => {
    setCheckBoxDate(!checkBoxDate);
  };
  const onInputChange = () => {
    if (checkBoxText && checkBoxDate) {
      filtersTextAndDateHandler(filtersText, filtersDate);
      return;
    }
    if (checkBoxText) {
      filtersTextTodoHandler(filtersText);
      return;
    }
    if (checkBoxDate) {
      filtersDateTodoHandler(filtersDate);
      return;
    }
    if (checkBoxText === false && checkBoxDate === false) {
      filtersTextAndDateHandler("", "");
      return;
    }
    if (checkBoxText === false) {
      filtersTextTodoHandler();
      return;
    }
    if (filtersDate === false) {
      filtersDateTodoHandler();
      return;
    }
  };
  const toggleTextSorting = () => {
    if (sortText === null) {
      sortingTextMinMaxHandler();
      setSortText("asc");
      return;
    }
    if (sortText === "asc") {
      sortingTextMinMaxHandler();
      setSortText("desc");
      return;
    }
    if (sortText === "desc") {
      sortingTextMaxMinHandler();
      setSortText("asc");
      return;
    }
  };

  const toggleDateSorting = () => {
    if (sortDate === null) {
      sortingDateMinMaxHandler();
      setSortDate("asc");
      return;
    }
    if (sortDate === "asc") {
      sortingDateMinMaxHandler();
      setSortDate("desc");
      return;
    }
    if (sortDate === "desc") {
      sortingDateMaxMinHandler();
      setSortDate("asc");
      return;
    }
  };
  const deleteSorting = () => {
    deleteSortedTodoHandler();
  };

  const onTextChange = (e) => {
    setFiltersText(e.target.value);
  };

  const onDateChange = (e) => {
    setFiltersDate(e.target.value);
  };

  return (
    <div className={styles.flexContainer}>
      {/*БЛОК СОРТИРОВКИ*/}

      <div className={styles.sorting}>
        <h2 className={styles.titleTodoActions}>Сортировка</h2>
        <div>
          <button
            className={styles.buttonSortingDate}
            onClick={toggleDateSorting}
          >
            По дате
          </button>
          <button
            className={styles.buttonSortingText}
            onClick={toggleTextSorting}
          >
            По тексту
          </button>
        </div>
        <div>
          <button
            className={styles.buttonDeleteSorting}
            onClick={deleteSorting}
          >
            Убрать сортировку
          </button>
        </div>
      </div>

      {/*   БЛОК ФИЛТРАЦИИ*/}

      <div className={styles.filters}>
        <h2 className={styles.titleTodoActions}>Фильтрация</h2>
        <div className={styles.flexContainerForFilters}>
          <div className={styles.filtersText}>
            {/*ФИЛЬТРАЦИЯ ПО ТЕКСТУ */}

            <input
              type="checkbox"
              id="text"
              onChange={handleChangeCheckBoxText}
            />
            <label htmlFor="text">По тексту</label>
            <div>
              <input
                className={styles.filtersInputText}
                type="text"
                value={filtersText}
                onChange={onTextChange}
              />
            </div>
            <div>
              <button className={styles.filtersButton}>Применить</button>
            </div>
          </div>
          <div className={styles.filtersDate}>
            {/*ФИЛЬТРАЦИЯ ПО ДАТЕ */}

            <input
              type="checkbox"
              id="date"
              onChange={handleChangeCheckBoxDate}
            />
            <label htmlFor="date">По дате</label>
            <div>
              <input
                className={styles.filtersInputDate}
                type="date"
                value={filtersDate}
                onChange={onDateChange}
              />
            </div>
            <div>
              <button className={styles.filtersButton}>Применить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoActions;
