import React from 'react';
import {
  initialState,
  reducer,
  actionTypes,
} from '../reducers/reducerLocalStorage'

export default function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue }),
  )

  const { sync, loading, error, item } = state

  // Action creators
  const onError = Error => dispatch({ type: actionTypes.error, payload: Error })
  const onSuccess = parsedItem =>
    dispatch({ type: actionTypes.success, payload: parsedItem })
  const onSave = newItem =>
    dispatch({ type: actionTypes.save, payload: newItem })
  const onSync = () => dispatch({ type: actionTypes.sync })

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem
        const localStorageItem = localStorage.getItem(itemName)

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        onSuccess(parsedItem)
      } catch (Error) {
        onError(Error)
      }
    }, 800)
  }, [sync])

  const saveItem = newItem => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      onSave(newItem)
    } catch (Error) {
      onError(Error)
    }
  }

  const syncItems = () => {
    onSync()
  }

  return {
    item,
    loading,
    error,
    saveItem,
    syncItems,
  }
}
