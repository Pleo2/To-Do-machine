/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { TodoProvider } from '../TodoContext';
import AppUI from './AppUI';

export default function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
