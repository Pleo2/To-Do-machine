import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Header from './index'

test('render content', () => {
  const c = render(<Header />)
  c.getByText('Todo-Machine')
  // opcion to used nomenclature of jest
  // expect(c.container).toHaveTextContent('Todo-Machine')
}) 