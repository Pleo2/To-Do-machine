import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Counter from './index'

describe('<TodoCounter />', () => {
  const mockedAmountTodo = {
    todoComplete: 4,
    totalTodos: 6,
    loadingState: false,
    loadingStateTrue: true,
  }

  describe('if TodoCounterState is true', () => {
    test('should see counter in screen with todoComplete and TotalTodos', () => {
      const view = render(
        <Counter
          completedTodos={mockedAmountTodo.todoComplete}
          totalTodos={mockedAmountTodo.totalTodos}
          loading={mockedAmountTodo.loadingState}
        />,
      )

      const counterH21 = screen.getByTestId('counter')

      expect(counterH21).not.toHaveClass('title--loading')
      expect(view.container).toHaveTextContent(
        `${mockedAmountTodo.todoComplete}`,
      )
      expect(view.container).toHaveTextContent(
        `${mockedAmountTodo.totalTodos}`,
      )
    })
  })

  describe('if TodoCounter is false', () => {
    test('should counter add title loading, if Counter.loading is true', () => {
      // eslint-disable-next-line no-unused-vars
      const view = render(
        <Counter
          completedTodos={mockedAmountTodo.todoComplete}
          totalTodos={mockedAmountTodo.totalTodos}
          loading={mockedAmountTodo.loadingStateTrue}
        />,
      )
      const counterH22 = screen.getByTestId('counter')
      expect(counterH22).toHaveClass('title--loading')
    })
  })
})
