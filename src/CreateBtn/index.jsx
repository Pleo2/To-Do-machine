import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import PlusSVG from '../Icons/Plus';
import './CreateButton.css';

export default function CreateTodoButton({ advice, openModal, setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return (
    <motion.div
      className="container-button"
      onClick={onClickButton}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <PlusSVG
        width="15"
        height="15"
      />
      <span>
        {advice}
      </span>
    </motion.div>
  );
}

CreateTodoButton.propTypes = {
  advice: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
