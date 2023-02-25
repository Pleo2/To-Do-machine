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

const itemId = () => Math.floor(Math.random() * 1000);
const DefaultTodos = JSON.stringify([
  {
    text: 'Ingles practica en la mananna muajajaja 🟠',
    completed: false,
    itemId: itemId(),
  },
  {
    text: 'Platzi termina curso de React 📖',
    completed: false,
    itemId: itemId(),
  },
  { text: 'Ver the office 📺', completed: true, itemId: itemId() },
  { text: 'Jugar Valorant 🎮', completed: true, itemId: itemId() },
  { text: 'Arreglar switch 🏏 ', completed: false, itemId: itemId() },
]);
localStorage.setItem('TODOS_V2', DefaultTodos);
