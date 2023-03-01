/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import useTodo from './useTodo';
import Header from '../Header';
import TodoCounter from '../Counter';
import ProgressBar from '../ProgressBar';
import SearchInput from '../SearchInput';
import ListItems from '../ListItems';
import CreateTodoButton from '../CreateBtn';
import ErrorTodo from '../ErrorTodo';
import LoadingTodo from '../LoadingTodo';
import Item from '../Item';
import Modal from '../Modal';
import EmptySearchValue from '../EmptySearchValue';
import { ChangeAlertWithStorageListener } from '../ChangeAlert.js';

export default function App() {
  const {
    error,
    loading,
    searchTodos,
    searchValue,
    setSearchValue,
    completeOrUncompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    addTodo,
    syncTodos,
  } = useTodo();

  return (
    <>
      <Header />

      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        loading={loading}
      />
      <ProgressBar
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        loading={loading}
      />

      <SearchInput
        setSearchValue={setSearchValue}
        loading={loading}
      />

      <ChangeAlertWithStorageListener syncTodos={syncTodos} />
      <ListItems
        error={error}
        loading={loading}
        searchTodos={searchTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <ErrorTodo />}
        onLoading={() => <LoadingTodo />}
        onEmptyTodo={() => (
          <CreateTodoButton
            advice="Create First To-do"
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
        onEmptySearchResults={(searchText) => (
          <>
            <CreateTodoButton
              advice={`add To-do with ${searchText}`}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
            <EmptySearchValue searchValue={searchText} />
          </>
        )}
        onThereIsTodo={() => (
          <CreateTodoButton
            advice="Add To-do"
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
        render={(todo, index) => (
          <Item
            index={index}
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeOrUncompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />

      <AnimatePresence>
        {!!openModal && (
          <Modal
            title="Create a new To-do"
            leftBtn="cancel"
            rightBt2="add"
            openModal={openModal}
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        )}
      </AnimatePresence>
    </>
  );
}
