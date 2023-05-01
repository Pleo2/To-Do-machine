import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockItem } from '../../__mocks__/mockItem'
import Item from './index'

describe('<Item/>', () => {
  test('should see In the document TODO uncomplete and call the function with user click', () => {
    render(
      <Item
        completed={mockItem.unComplete}
        id={mockItem.id}
        index={mockItem.index}
        text={mockItem.text}
        onComplete={mockItem.onComplete}
        onDelete={mockItem.onDelete}
      />,
    )

    screen.getByText(mockItem.text)
    const buttonCircle = screen.getByTitle('CircleSVG')
    const buttonTrash = screen.getByTitle('TrashSVG')

    userEvent.click(buttonCircle)
    expect(mockItem.onComplete).toBeCalledTimes(1)
    userEvent.click(buttonTrash)
    expect(mockItem.onDelete).toBeCalledTimes(1)
  })

  test('should see In the document TODO Complete', () => {
    render(
      <Item
        completed={mockItem.complete}
        id={mockItem.id}
        index={mockItem.index}
        text={mockItem.text}
        onComplete={mockItem.onComplete}
        onDelete={mockItem.onDelete}
      />,
    )

    screen.getByText(mockItem.text)
    screen.getByTitle('CheckCircleSVG')
    screen.getByTitle('TrashSVG')
  })
})
