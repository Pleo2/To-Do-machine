import { useState } from 'react';
import useLocalStorage from './customsHooks/useLocalStorage';
import useSearchValue from './customsHooks/useSearchValue';
import useSyncTodos from './customsHooks/useSyncTodos'

export default function useTodo() {
  const { item , saveItem, syncItems, loading, error } = useLocalStorage(
    'TODOS_V2',
    [],
  )

  const {
    searchValue,
    searchTodos,
    setSearchValue
  } = useSearchValue(item)
  // Pararmetros para Counter and ProgressBar

  const { showAlert, toggleShow } = useSyncTodos(syncItems)

  const [openModal, setOpenModal] = useState(false)

  const completedTodos = item.filter(todo => !!todo.completed).length
  const totalTodos = item.length

  const addTodo = text => {
    const newTodos = [...item]
    newTodos.push({
      completed: false,
      text,
    })
    saveItem(newTodos)
  }

  const completeOrUncompleteTodo = text => {
    const indexTodo = item.findIndex(todo => text === todo.text)
    const newTodos = [...item]
    // eslint-disable-next-line no-unused-expressions
    newTodos[indexTodo].completed === true
      ? (newTodos[indexTodo].completed = false)
      : (newTodos[indexTodo].completed = true)
    saveItem(newTodos)
  }

  const deleteTodo = text => {
    const indexTodo = item.findIndex(todo => text === todo.text)
    const newTodos = [...item]
    newTodos.splice(indexTodo, 1)
    saveItem(newTodos)
  }
  
  const states = {
    totalTodos,
    searchValue,
    searchTodos,
    loading,
    error,
    openModal,
    completedTodos,
    showAlert,
  }

  const setStates = {
    setSearchValue,
    completeOrUncompleteTodo,
    deleteTodo,
    setOpenModal,
    addTodo,
    toggleShow,
  }

  return {
    states,
    setStates,
  };
}
