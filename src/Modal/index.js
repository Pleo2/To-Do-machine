/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import './Modal.css';

export default function Modal({
  title,
  leftBtn,
  rightBt2,
  openModal,
  setOpenModal,
  addTodo,
}) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onAddsubmit = (event) => {
    event.preventDefault();
    if (newTodoValue !== '') {
      addTodo(newTodoValue);
      setOpenModal(!openModal);
    }
  };

  const onWrite = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(!openModal);
  };

  return ReactDOM.createPortal(
    <>
      <motion.div
        className="ModalBackground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div className="ModalContainer">
        <motion.div
          className="ModalContainerInput"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <h3>{title}</h3>
          <form onSubmit={onAddsubmit}>
            <textarea
              autoFocus
              placeholder="Write your to-do..."
              value={newTodoValue}
              onChange={onWrite}
            />
            <div className="containerButton">
              <motion.button
                type="button"
                onClick={onCancel}
                style={{ cursor: 'pointer' }}
              >
                {leftBtn}
              </motion.button>

              <motion.button
                type="submit"
                style={{ cursor: 'pointer' }}
              >
                {rightBt2}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </>,
    document.getElementById('modal'),
  );
}
