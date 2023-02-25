/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import './Counter.css';
import { TodoContext } from '../TodoContext';

export default function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <motion.h2
      className="title"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      Completed
      {' '}
      {completedTodos}
      {' '}
      of
      {' '}
      {totalTodos}
      {' '}
      To-do
    </motion.h2>
  );
}
