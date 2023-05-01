import { renderHook, act } from '@testing-library/react'
import useLocalStorage from '../useLocalStorage'
import { mocknewitem } from '../../__mocks__/mocks.hooks/mocks.hooks'

describe('useLocalStorage', () => {
  test('should save item in the localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('TODOS_V2', []))
    act(() => {
      result.current.saveItem(mocknewitem)
    })
    expect(result.current.item).toBe(mocknewitem)
  })
  
  test('should sync item', () => {
    const { result } = renderHook(() => useLocalStorage('TODOS_V2', []))
    act(() => {
      result.current.syncItems()
    })

    expect(result.current.item).toStrictEqual([])
  })
})
