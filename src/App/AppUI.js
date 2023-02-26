/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { TodoContext } from '../TodoContext';
import Header from '../Header';
import TodoCounter from '../Counter';
import ProgressBar from '../ProgressBar';
import SearchInput from '../SearchInput';
import ListItems from '../ListItems';
import CreateTodoButton from '../CreateBtn';
import Item from '../Item';
import Modal from '../Modal';

export default function AppUI() {
  const {
    error,
    loading,
    searchTodos,
    setSearchValue,
    completeOrUncompleteTodo,
    deleteTodo,
    openModal,
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <>
      <Header />

      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
      <ProgressBar
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />

      <SearchInput
        setSearchValue={setSearchValue}
      />

      <ListItems>
        {error && (
          <p style={{ color: 'red', margin: 'auto', textAlign: 'center' }}>
            error
          </p>
        )}
        {loading && (
          <p style={{ color: 'gray', margin: 'auto', textAlign: 'center' }}>
            loading...
          </p>
        )}
        {!loading && !searchTodos.length && (
          <CreateTodoButton advice="Create First To-do" />
        )}
        {searchTodos.length && <CreateTodoButton advice="Add To-do" />}

        {searchTodos.map((todo, index) => (
          <Item
            index={index}
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeOrUncompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </ListItems>

      <AnimatePresence>
        {!!openModal && (
          <Modal
            title="Create a new To-do"
            leftBtn="cancel"
            rightBt2="add"
          />
        )}
      </AnimatePresence>
    </>
  );
}
