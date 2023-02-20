import React from 'react';
import { motion } from 'framer-motion';
import './Counter.css'

export const TodoCounter = ({ total, completed }) => {
  return (
    <motion.h2
      className='title'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      Completed {completed} of {total} To-do
    </motion.h2>
  )
}
