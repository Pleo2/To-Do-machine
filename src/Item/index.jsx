import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import CircleSVG from '../Icons/Circle';
import CheckCircleSVG from '../Icons/Check-circle';
import TrashSVG from '../Icons/Trash';
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
        {!completed && <CircleSVG width="16" height="16" /> }
        {completed && <CheckCircleSVG width="16" height="16" /> }
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

Item.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
