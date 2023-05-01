import React from 'react';

export default function useSearchValue(allTodos) {
  const [searchValue, setSearchValue] = React.useState('')
  let searchTodos
  if (searchValue.length < 1) {
    searchTodos = allTodos
  } else {
    searchTodos = allTodos.filter(todo => {
      const itemText = todo.text.toLowerCase()
      const searchText = searchValue.toLocaleLowerCase()
      return itemText.includes(searchText)
    })
  }

  return {
    searchValue,
    searchTodos,
    setSearchValue,
  }
}
