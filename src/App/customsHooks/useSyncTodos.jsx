import React from 'react'

export default function useSyncTodos(syncTodos) {
  const [ showAlert, setShowAlert ] = React.useState(false)
  React.useEffect(() => {
    setTimeout(
      () =>
        window.addEventListener('storage', changes => {
          if (changes.key === 'TODOS_V2') {
            setShowAlert(true)
          }
        }),
      2000,
    )
  }, [])

  const toggleShow = () => {
    setShowAlert(false)
    syncTodos()
  }
  return {
    showAlert,
    toggleShow,
  }
}
