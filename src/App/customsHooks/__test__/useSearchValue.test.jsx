import { renderHook, act } from '@testing-library/react'
import useSearchValue from '../useSearchValue'
import { mockItem } from '../../__mocks__/mocks.hooks/mocks.hooks'

describe('useSearchValue', () => {
  test('should searchValue be equal empty string', () => {
    const { result } = renderHook(() => useSearchValue(mockItem))
    expect(result.current.searchValue).toBe('')
  })

  test('should set search value', () => {
    const { result } = renderHook(() => useSearchValue(mockItem))
    act(() => {
      result.current.setSearchValue('create')
    })
    expect(result.current.searchValue).toBe('create')
  })

  test('should return filter searchTodos to set searchValue', () => {
    const { result } = renderHook(() => useSearchValue(mockItem))
    act(() => {
      result.current.setSearchValue('To-do')
    })
    const { searchTodos } = result.current

    searchTodos.forEach(item => expect(item.text).toContain('To-do'))
  })
})
