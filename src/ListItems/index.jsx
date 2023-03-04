/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import './ListItems.css';

export default function ListItems({
  error,
  loading,
  searchTodos,
  totalTodos,
  searchValue,
  onError,
  onLoading,
  onEmptyTodo,
  onThereIsTodo,
  onEmptySearchResults,
  render,
  // eslint-disable-next-line react/prop-types
  children,
}) {
  return (
    <section className="TodoList--container">
      {error && onError()}

      {loading && onLoading()}

      {!loading && !totalTodos && onEmptyTodo()}

      {searchTodos?.length > 0 && onThereIsTodo()}

      {(totalTodos !== 0 && searchTodos?.length === 0) && onEmptySearchResults(searchValue)}

      {!loading && searchTodos?.map((todo, index) => render(todo, index))}
      <ul>
        <AnimatePresence>{children}</AnimatePresence>
      </ul>
    </section>
  );
}

ListItems.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  searchTodos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  totalTodos: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
  onError: PropTypes.func.isRequired,
  onLoading: PropTypes.func.isRequired,
  onEmptyTodo: PropTypes.func.isRequired,
  onThereIsTodo: PropTypes.func.isRequired,
  onEmptySearchResults: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};
