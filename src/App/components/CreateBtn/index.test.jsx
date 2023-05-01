import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreateBtn from './index'

describe('<CreateBtn', () => {
  mockHandler = jest.fn()
  const view = () => render(<CreateBtn advice="Create First To-do" setOpenModal={mockHandler} />)

  test('should render CreateBtn', () => {
    view()
    const button = screen.getByRole('button', {name: 'Create First To-do'})
    userEvent.click(button)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
