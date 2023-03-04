import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import './Counter.css';

export default function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <motion.h2
      className={`title ${loading === true && 'title--loading'}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      {`Completed ${completedTodos} of ${totalTodos} To-do`}
    </motion.h2>
  );
}

TodoCounter.propTypes = {
  completedTodos: PropTypes.number.isRequired,
  totalTodos: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};
