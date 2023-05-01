import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import LoadingTodo from './index'

describe('<LoadingTodo />', () => {
  test('should see in the documnet', () => {
    render(<LoadingTodo />)
    screen.getByText('Loading...')
  })
})