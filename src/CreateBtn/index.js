/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as PlusSVG } from '../Icons/plus.svg';
import './CreateButton.css';

// eslint-disable-next-line react/prop-types
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
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <PlusSVG />
      <span>
        {advice}
      </span>
    </motion.div>
  );
}
