import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import {render, screen, waitFor } from '@testing-library/react'
import SearchInput from './index'

describe('<SearchInput', () => {
  const mockSearch = {
    loading: false,
    searchValue: 'hola',
    loadingTrue: true,
  }

  test('should see searchinput in the document', () => {
    render(
      <SearchInput
        setSearchValue={jest.fn()}
        loading={mockSearch.loading}
      />
    )

    screen.getByPlaceholderText("Search To-Do's")
  })

  test('should disable input when loading is true', async () => {
    render(<SearchInput
      setSearchValue={jest.fn()}
      loading
    />)
    await waitFor(() => {
      const input = screen.getByPlaceholderText("Search To-Do's")
      expect(input).toHaveAttribute('disabled')
    })
  }) 
})
