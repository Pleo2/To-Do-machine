/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import './Counter.css';

export default function TodoCounter({ completedTodos, totalTodos }) {
  return (
    <motion.h2
      className="title"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      Completed {completedTodos} of {totalTodos} To-do
    </motion.h2>
  );
}
