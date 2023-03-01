/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { motion } from 'framer-motion';
import withStorageListener from './withStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
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
        <motion.p
          className="p--changes-alert"
        >
          Changes are available
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.85 }}
          type="button"
          onClick={() => {
            toggleShow(false);
          }}
        >
          reload to view them
        </motion.button>
      </motion.div>
    );
  }
  return null;
}

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
