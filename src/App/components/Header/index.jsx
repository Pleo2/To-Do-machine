import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <img src="./minus-square.png" alt="logo-Todo_machine" />
        <h1
          style={{ color: 'rgb(37, 37, 37)' }}
        >
          Todo-Machine
        </h1>
      </nav>
    </header>
  );
}
