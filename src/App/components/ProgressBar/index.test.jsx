import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor } from '@testing-library/react'
import ProgressBar from './index'

describe('<ProgressBar />', () => {
  const mockBar = {
    totalTodos: 5,
    completedTodos: 5,
    loading: true,
    noLoading: false,
  }

  test('should see the Bar is loading', () => {
    render(
      <ProgressBar
        completedTodos={mockBar.completedTodos}
        totalTodos={mockBar.totalTodos}
        loading={mockBar.loading}
      />,
    )
    const ProgressRoot = screen.getByTestId('ProgressRoot')
    expect(ProgressRoot).toHaveClass('ProgressRoot--loading')
  })

  test('should see the Bar is no loading', async () => {
    render(
      <ProgressBar
        completedTodos={mockBar.completedTodos}
        totalTodos={mockBar.totalTodos}
        loading={mockBar.noLoading}
      />,
    )
    const ProgressIndicator = screen.getByTestId('ProgressIndicator')
    expect(ProgressIndicator).not.toHaveClass('ProgressRoot--loading')
  })

  test('should see in the Bar the real progress', async () => {
    render(
      <ProgressBar
        completedTodos={mockBar.completedTodos}
        totalTodos={mockBar.totalTodos}
        loading={mockBar.noLoading}
      />,
    )

    const mockProgress = Math.round(
      (100 / mockBar.totalTodos) * mockBar.completedTodos,
    )

    const ProgressIndicator = screen.getByTestId('ProgressIndicator')
    
    await waitFor(() => {
      expect(ProgressIndicator).toHaveStyle({
        transform: `translateX(-${100 - mockProgress}%)`,
      })
    })
  })
})
