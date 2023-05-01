import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import './Modal.css';

export default function Modal({
  title,
  leftBtn,
  rightBt2,
  setOpenModal,
  addTodo
}) {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onAddsubmit = (event) => {
    event.preventDefault();
    if (newTodoValue !== '') {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  const onWrite = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <>
      <motion.div
        className="ModalBackground"
        initial={{ opacity: 0, scale: 0}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
        exit={{ opacity: 0, scale: 0}}
      />
      <motion.div className="ModalContainer">
        <motion.div
          className="ModalContainerInput"
          initial={{ opacity: 0,}}
          animate={{ opacity: 1,}}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <h3>{title}</h3>
          <form onSubmit={onAddsubmit}>
            <textarea
              name='textarea-todo'
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              placeholder="Write your to-do..."
              value={newTodoValue}
              onChange={onWrite}
            />
            <div className="containerButton">
              <motion.button
                name={leftBtn}
                type="button"
                onClick={onCancel}
                style={{ cursor: 'pointer' }}
              >
                {leftBtn}
              </motion.button>

              <motion.button
                name={rightBt2}
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
