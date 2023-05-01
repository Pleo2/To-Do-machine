import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import PlusSVG from '../Icons/Plus';
import './CreateButton.css';

export default function CreateTodoButton({ advice, setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <motion.button
      type='button'
      className="button--add-todo"
      onClick={onClickButton}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <PlusSVG
        width="15"
        height="15"
      />
      <span>
        {advice}
      </span>
    </motion.button>
  );
}

CreateTodoButton.propTypes = {
  advice: PropTypes.string.isRequired,
  // openModal: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
