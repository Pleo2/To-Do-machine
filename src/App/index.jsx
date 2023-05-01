/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import useTodo from './useTodo';
import Header from './components/Header';
import Counter from './components/Counter';
import ProgressBar from './components/ProgressBar';
import SearchInput from './components/SearchInput';
import ListItems from './components/ListItems';
import CreateTodoModal from './modals/CreateTodoModal';
import ChangeAlert from './components/ChangeAlert';

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
    showAlert,
  } = states;
  const {
    setSearchValue,
    completeOrUncompleteTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    toggleShow,
  } = setStates;

  return (
    <>
      <Header />

      <Counter
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

      {showAlert && <ChangeAlert toggleShow={toggleShow} />}
      
      
      <ListItems
        error={error}
        loading={loading}
        searchTodos={searchTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onComplete={completeOrUncompleteTodo}
        openModal={openModal}
        onDelete={deleteTodo}
        setOpenModal={setOpenModal}
      />

      <AnimatePresence>
        {!!openModal && (
          <CreateTodoModal
            title="Create a new To-do"
            leftBtn="cancel"
            rightBt2="add"
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        )}
      </AnimatePresence>
    </>
  );
}
