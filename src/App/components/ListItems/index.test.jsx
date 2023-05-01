import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockListItems, mockSearchTodos } from '../../__mocks__/mockListItems'
import ListItems from './index'

describe('<ListItems', () => {
  test('should see List items && <add new todo> in the button', () => {
    render(
      <ListItems
        error={mockListItems.error}
        loading={mockListItems.loading}
        searchTodos={mockListItems.searchTodos}
        totalTodos={mockListItems.totalTodos}
        searchValue={mockListItems.noSearchValue}
        openModal={mockListItems.openModal}
        onComplete={mockListItems.onComplete}
        onDelete={mockListItems.onDelete}
        setOpenModal={mockListItems.setOpenModal}
      />,
    )

    mockSearchTodos.forEach(item => {
      screen.getByText(item.text)
    })

    const button = screen.getByText('Add To-do')
    userEvent.click(button)
    expect(mockListItems.setOpenModal).toBeCalledTimes(1)
  })

  test('should see error component in the document ', () => {
    render(
      <ListItems
        error={mockListItems.errorTrue}
        loading={mockListItems.loading}
        searchTodos={mockListItems.searchTodos}
        totalTodos={mockListItems.totalTodos}
        searchValue={mockListItems.noSearchValue}
        openModal={mockListItems.openModal}
        onComplete={mockListItems.onComplete}
        onDelete={mockListItems.onDelete}
        setOpenModal={mockListItems.setOpenModal}
      />,
    )
    screen.getByText('error')
  })

  test('should see Loading component in the document ', () => {
    render(
      <ListItems
        error={mockListItems.error}
        loading={mockListItems.loadingTrue}
        searchTodos={mockListItems.searchTodos}
        totalTodos={mockListItems.totalTodos}
        searchValue={mockListItems.noSearchValue}
        openModal={mockListItems.openModal}
        onComplete={mockListItems.onComplete}
        onDelete={mockListItems.onDelete}
        setOpenModal={mockListItems.setOpenModal}
      />,
    )
    screen.getByText('Loading...')
  })

  test('should see no task has been found with searchValue & <add To-do {searchValue}> in the button', () => {
    render(
      <ListItems
        error={mockListItems.error}
        loading={mockListItems.loading}
        searchTodos={[]}
        totalTodos={mockListItems.totalTodos}
        searchValue={mockListItems.searchValue}
        openModal={mockListItems.openModal}
        onComplete={mockListItems.onComplete}
        onDelete={mockListItems.onDelete}
        setOpenModal={mockListItems.setOpenModal}
      />,
    )
    screen.getByText(
      `no task has been found that contains: ${mockListItems.searchValue}`,
    )
    const button = screen.getByText(
      `add To-do with ${mockListItems.searchValue}`,
    )
    userEvent.click(button)
    expect(mockListItems.setOpenModal).toBeCalledTimes(1)
  })

  test('should see clean listItems & <Create First Todo> in the button', () => {
    render(
      <ListItems
        error={mockListItems.error}
        loading={mockListItems.loading}
        searchTodos={[]}
        totalTodos={0}
        searchValue=""
        openModal={mockListItems.openModal}
        onComplete={mockListItems.onComplete}
        onDelete={mockListItems.onDelete}
        setOpenModal={mockListItems.setOpenModal}
      />,
    )
    const button = screen.getByText('Create First To-do')
    userEvent.click(button)
    expect(mockListItems.setOpenModal).toBeCalledTimes(1)
  })
})
