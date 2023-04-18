/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import useTodo from './useTodo';
import Header from './components/Header';
import TodoCounter from './components/Counter';
import ProgressBar from './components/ProgressBar';
import SearchInput from './components/SearchInput';
import ListItems from './components/ListItems';
import CreateTodoButton from './components/CreateBtn';
import ErrorTodo from './components/ErrorTodo';
import LoadingTodo from './components/LoadingTodo';
import Item from './components/Item';
import CreateTodoModal from './modals/CreateTodoModal';
import EmptySearchValue from './components/EmptySearchValue';
import ChangeAlertWithStorageListener from './components/ChangeAlert';

export default function App() {
  const { states, setStates } = useTodo();
  const {
    totalTodos,
    searchValue,
    searchTodos,
    loading,
    error,
    openModal,
    completedTodos,
  } = states;
  const {
    setSearchValue,
    completeOrUncompleteTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    syncTodos,
  } = setStates;

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
          <CreateTodoModal
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
