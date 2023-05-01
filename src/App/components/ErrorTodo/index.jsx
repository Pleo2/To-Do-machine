/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';

export default function ErrorTodo() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
      style={{
        color: 'red',
        margin: 'auto',
        textAlign: 'center',
        marginTop: '1rem',
      }}
    >
      error
    </motion.p>
  );
}
