import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ChangeAlert from './index'

describe('<ChangeAlert />', () => {
  const mockFn = jest.fn()

  test('should show ChangeAlert', () => {
    render(<ChangeAlert toggleShow={mockFn} />)
    screen.getByText('reload to view them')
  })
  test('should button {name:"to relad to view them"} call function', () => {
    render(<ChangeAlert toggleShow={mockFn} />)
    userEvent.click(screen.getByRole('button', { name: 'reload to view them' }))
    expect(mockFn).toBeCalledTimes(1)
  })
})
