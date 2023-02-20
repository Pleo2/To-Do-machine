import React from "react";
import { AppUI } from './AppUI'

// import './App.css';
let itemId = () => Math.floor(Math.random() * 1000);

const DefaultTodos = [
  { text: 'Ingles practica en la mananna muajajaja 🟠', completed: false, itemId: itemId()},
  { text: 'Platzi termina curso de React 📖', completed: false,itemId: itemId()},
  { text: 'Ver the office 📺', completed: true, itemId: itemId()},
  { text: 'Jugar Valorant 🎮', completed: true, itemId: itemId()},
  { text: 'Arreglar switch 🏏 ', completed: false,itemId: itemId()},
]

export const App = () =>  {
  const [todos, setTodos] = React.useState(DefaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if (!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeOrUncompleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => text === todo.text);
    const newTodos = [...todos]
    newTodos[indexTodo].completed === true ? newTodos[indexTodo].completed = false : newTodos[indexTodo].completed = true
    setTodos(newTodos);
  }
  
  const deleteTodo = (text) => {
    const indexTodo = todos.findIndex(todo => text === todo.text);
    const newTodos = [...todos]
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completeOrUncompleteTodo={completeOrUncompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}