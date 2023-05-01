import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
import { render } from '@testing-library/react'
import Plus from './Plus'
import Circle from './Circle'
import CheckCircle from './Check-circle'
import Trash from './Trash'

describe('Icon Component render', () => {
  describe('<Plus/>', () => {
    test('should see in the document', () => {
      const view = render(<Plus />)
      expect(view).toBeDefined()
    })
  })
  describe('<Circle/>', () => {
    test('should see in the document', () => {
      const view = render(<Circle />)
      expect(view).toBeDefined()
    })
  })
  describe('CheckCircle', () => {
    test('should see in the document', () => {
      const view = render(<CheckCircle />)
      expect(view).toBeDefined()
    })
  })
  describe('Trash', () => {
    test('should see in the document', () => {
      const view = render(<Trash />)
      expect(view).toBeDefined()
    })
  })
})