/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import './ListItems.css';

export default function ListItems(props) {
  return (
    <section className="TodoList--container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos && props.onEmptyTodo()}

      {props.searchTodos.length > 0 && props.onThereIsTodo()}

      {(props.totalTodos !== 0 && props.searchTodos.length === 0) && props.onEmptySearchResults(props.searchValue)}

      {!props.loading && props.searchTodos.map((todo, index) => props.render(todo, index))}
      <ul>
        <AnimatePresence>{props.children}</AnimatePresence>
      </ul>
    </section>
  );
}
