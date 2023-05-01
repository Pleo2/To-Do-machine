import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import EmptySearchValue from './index'

describe('<EmptySearchValue', () => {
  const mockSearchValue = 'chesse'
  const view = () => render(<EmptySearchValue searchValue={mockSearchValue} />)
  test('should see in the document', () => {
    view()
    screen.getByText(`no task has been found that contains: ${mockSearchValue}`)
  })
})