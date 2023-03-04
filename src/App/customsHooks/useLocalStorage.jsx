import React from 'react';

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sync: 'SYNC',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    sync: true,
    loading: false,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sync]: {
    ...state,
    sync: false,
    loading: true,
  },
});

const initialState = ({ initialValue }) => ({
  sync: true,
  loading: true,
  error: false,
  item: initialValue,
});

const reducer = (state, action) => reducerObject(state, action.payload)[action.type] || state;

export default function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue }),
  );

  const {
    sync,
    loading,
    error,
    item,
  } = state;

  // Action creators
  const onError = (Error) => dispatch({ type: actionTypes.error, payload: Error });
  const onSuccess = (parsedItem) => dispatch({ type: actionTypes.success, payload: parsedItem });
  const onSave = (newItem) => dispatch({ type: actionTypes.save, payload: newItem });
  const onSync = () => dispatch({ type: actionTypes.sync });

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
        onSuccess(parsedItem);
      } catch (Error) {
        onError(Error);
      }
    }, 800);
  }, [sync]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (Error) {
      onError(Error);
    }
  };

  const syncItems = () => {
    onSync();
  };

  return {
    item,
    loading,
    error,
    saveItem,
    syncItems,
  };
}
