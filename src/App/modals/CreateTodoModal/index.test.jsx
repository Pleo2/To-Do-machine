import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import Modal from './index'

describe('Modal', () => {
  const mockFn = jest.fn()
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal')
  const setup = () => {
    render(
      <Modal
        title="Create a new To-do"
        leftBtn="cancel"
        rightBt2="add"
        setOpenModal={mockFn}
        addTodo={mockFn}
      />,
      {
        container: document.body.appendChild(modalRoot),
      },
    )
  }
  beforeEach(() => {
    setup()
  })

  test('should render children into a portal', () => {
    screen.getByText('Create a new To-do')
    screen.getByText('add')
  })
  test('should clip action on button cancel', () => {
    const cancelBtn = screen.getByRole('button', { name: 'cancel' })
    userEvent.click(cancelBtn)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
  test('should clip action on button add', () => {
    const addBtn = screen.getByRole('button', { name: 'add' })
    userEvent.keyboard('hola')
    userEvent.click(addBtn)
    // setOpenModal and AddTodo 2 calls
    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})
