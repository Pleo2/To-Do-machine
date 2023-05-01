import { renderHook, act } from '@testing-library/react'
import useSyncTodos from '../useSyncTodos'

describe('useSyncTodos', () => {
  const mockFn = jest.fn()
  test('should showAlert false', () => {
    const { result } = renderHook(() => useSyncTodos())
    expect(result.current.showAlert).toBe(false)
  })
  test('should toggleShow function change showAlert and call syncTodos()', () => {
    const { result } = renderHook(() => useSyncTodos(mockFn))
    act(() => {
      result.current.toggleShow()
    })
    expect(result.current.showAlert).toBe(false)
    expect(mockFn).toBeCalledTimes(1)
  })
})
