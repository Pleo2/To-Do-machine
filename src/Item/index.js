import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as TrashSVG } from "../Icons/trash.svg";
import { ReactComponent as CircleSVG } from "../Icons/check-circle.svg";
import "./Item.css";

const variants = {
  hidden: {
    opacity:0,
    y:-15
  },
  visible: (indexTodo )=> ({
    opacity:1,
    y:0,
    transition: {
      duration: 0.80,
      delay: (indexTodo + 1) * 0.2,
    }
  }),
  exit:{
    opacity:0,
    x: -400,
    transition:{
      duration: 0.40
    }
  }
}

let logoId = () => Math.floor(Math.random() * 1000);

export const Item = (props) => {
  return (
    // si props.complete se realiza un condicional el cual si es true crea la clase 'icon-check--icon'
    <motion.li
      className={`container-item ${props.completed && "icon-check--icon"}`}
      key={props.id}
      variants={variants}
      custom={props.index}
      layoutId={props.text}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <motion.span
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.95}}
        className='circleSVG'
        onClick={() => props.onComplete()}
        >
        <CircleSVG key={logoId()} />
      </motion.span>

      <p>{props.text}</p>

      <motion.span
        whileHover={{ scale: 1.05}}
        whileTap={{ scale: 0.95}}
        className={`trashSVG`}
        onClick={() => props.onDelete()}
      >
        <TrashSVG key={logoId()} />
      </motion.span>
    </motion.li>
  );
};
