import React from 'react'
import PropTypes from 'prop-types'
import './ListItems.css'
import ErrorTodo from '../ErrorTodo'
import LoadingTodo from '../LoadingTodo'
import CreateTodoButton from '../CreateBtn'
import EmptySearchValue from '../EmptySearchValue'
import Item from '../Item'

export default function ListItems({
  error,
  loading,
  searchTodos,
  totalTodos,
  searchValue,
  openModal,
  setOpenModal,
  onComplete,
  onDelete,
}) {
  return (
    <section className="TodoList--container">
      {error && <ErrorTodo />}
      {loading && <LoadingTodo />}
      {(!loading && searchTodos?.length === 0) && (
        <CreateTodoButton
          advice="Create First To-do"
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      {totalTodos !== 0 && searchTodos?.length === 0 && (
        <>
          <CreateTodoButton
            advice={`add To-do with ${searchValue}`}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
          <EmptySearchValue searchValue={searchValue} />
        </>
      )}
      {searchTodos?.length > 0 && (
        <CreateTodoButton
          advice="Add To-do"
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      {!loading &&
        searchTodos?.map((todo, index) => (
          <Item
            index={index}
            id={`${index}${todo.text}`}
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onComplete(todo.text)}
            onDelete={() => onDelete(todo.text)}
          />
        ))}
    </section>
  )
}

ListItems.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  searchTodos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  totalTodos: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}
