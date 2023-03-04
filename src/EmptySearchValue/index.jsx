import React from 'react';
import PropTypes from 'prop-types';
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
      {`no task has been found that contains: ${searchValue}`}
    </motion.p>
  );
}

EmptySearchValue.propTypes = {
  searchValue: PropTypes.string.isRequired,
};
