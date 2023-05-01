/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import './ChangeAlert.css'

export default function ChangeAlert({ toggleShow }) {
    return (
      <motion.div
        className="container--changes-alert"
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <motion.p className="p--changes-alert">Changes are available</motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.85 }}
          type="button"
          onClick={() => {
            toggleShow()
          }}
        >
          reload to view them
        </motion.button>
      </motion.div>
    )
}

ChangeAlert.prototype = {
  syncTodos: PropTypes.func.isRequired,
}
