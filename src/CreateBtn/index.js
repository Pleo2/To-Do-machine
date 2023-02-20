import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as PlusSVG } from "../Icons/plus.svg";
import './CreateButton.css';

export const CreateTodoButton = (props) => {
  const onClickButton = (msg) => {
    alert(msg);
  }

  return (
    <motion.div
      className="container-button"
      onClick={() => { onClickButton('agreagaste una tarea') }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3}}
    >
      <PlusSVG /> <span>Add new To-do</span>
    </motion.div>
  )
}