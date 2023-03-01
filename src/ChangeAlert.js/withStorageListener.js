/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener({ syncTodos }) {
    const [starageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V2') {
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      setStorageChange(false);
      syncTodos();
    };

    return (
      <WrappedComponent
        show={starageChange}
        toggleShow={toggleShow}
      />
    );
  };
}
