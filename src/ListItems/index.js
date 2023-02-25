/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import './ListItems.css';

export default function ListItems(props) {
  return (
    <section>
      <ul>
        <AnimatePresence>{props.children}</AnimatePresence>
      </ul>
    </section>
  );
}
