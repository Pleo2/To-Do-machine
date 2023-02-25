import React from 'react';

export default function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (Error) {
        setError(Error);
      }
    }, 300);
  }, []);

  function saveItem(newTodos) {
    const stringifyTodos = JSON.stringify(newTodos);
    localStorage.setItem(itemName, stringifyTodos);
    setItem(newTodos);
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}
