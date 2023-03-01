/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';

export default function EmptySearchValue({ searchValue }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
      style={{
        color: '#999',
        margin: 'auto',
        textAlign: 'center',
        marginTop: '1rem',
      }}
    >
      no task has been found that contains: {searchValue}
    </motion.p>
  );
}
