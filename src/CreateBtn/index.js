/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import PlusSVG from '../Icons/Plus';
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
