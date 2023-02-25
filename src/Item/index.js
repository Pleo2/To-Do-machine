/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as TrashSVG } from '../Icons/trash.svg';
import { ReactComponent as CircleSVG } from '../Icons/check-circle.svg';
import './Item.css';

const variants = {
  hidden: {
    opacity: 0,
    y: -15,
  },
  visible: (indexTodo) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: (indexTodo + 0.5) * 0.05,
    },
  }),
  exit: {
    opacity: 0,
    x: -400,
    transition: {
      duration: 0.2,
    },
  },
};

const logoId = () => Math.floor(Math.random() * 1000);

export default function Item({
  completed,
  id,
  index,
  text,
  onComplete,
  onDelete,
}) {
  return (
    <motion.li
      className={`container-item ${completed && 'icon-check--icon'}`}
      key={id}
      variants={variants}
      custom={index}
      layoutId={text}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="circleSVG"
        onClick={onComplete}
      >
        <CircleSVG key={logoId()} />
      </motion.span>

      <p>{text}</p>

      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="trashSVG"
        onClick={onDelete}
      >
        <TrashSVG key={logoId()} />
      </motion.span>
    </motion.li>
  );
}
