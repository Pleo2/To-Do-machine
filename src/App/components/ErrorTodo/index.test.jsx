import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import ErrorTodo from './index'

describe('<ErrorTodo', () => {
  const view = () => render(<ErrorTodo/>)
  test('should see in the document', () => {
    view()
    const text = screen.getByText('error')
    expect(text).toHaveStyle({ color: 'red' })
  })
})