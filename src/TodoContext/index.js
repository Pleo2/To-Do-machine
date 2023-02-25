/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import useSearchValue from './useSearchValue';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);

  const {
    searchValue,
    searchItem: searchTodos,
    setSearchItem: setSearchValue,
  } = useSearchValue(todos);
  // Pararmetros para Counter and ProgressBar

  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeOrUncompleteTodo = (text) => {
    const indexTodo = todos.findIndex((todo) => text === todo.text);
    const newTodos = [...todos];
    // eslint-disable-next-line no-unused-expressions
    newTodos[indexTodo].completed === true
      ? (newTodos[indexTodo].completed = false)
      : (newTodos[indexTodo].completed = true);
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex((todo) => text === todo.text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchTodos,
        completeOrUncompleteTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
