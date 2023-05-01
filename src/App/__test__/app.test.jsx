/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../index'

describe('<App/>', () => {
  const setup = () => render(<App />)
  test('should see in the document the Header', () => {
    setup()
    screen.getByText('Todo-Machine')
    screen.getByAltText('logo-Todo_machine')
  })

  test('should see in the document Counter', () => {
    setup()
    screen.getByText('Completed 0 of 0 To-do')
  })

  test('should see in the document Progress bar', () => {
    setup()
    screen.getByTestId('ProgressRoot')
  })

  test('should see in the document searchInput', () => {
    setup()
    screen.getByPlaceholderText("Search To-Do's")
  })

  test('should see in the document ListItems with Create first Todo', async () => {
    setup()
    await screen.findByText('Create First To-do')
  })
})
