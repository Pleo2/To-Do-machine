export const mockSearchTodos = [
  {
    index: 0,
    key: 'todo nro 0',
    text: 'todo nro 0',
    completed: true,
    onComplete: () => mockFn(),
    onDelete: () => mockFn(),
  },
  {
    index: 1,
    key: 'todo nro 1',
    text: 'todo nro 1',
    completed: true,
    onComplete: () => mockFn(),
    onDelete: () => mockFn(),
  },
  {
    index: 2,
    key: 'todo nro 2',
    text: 'todo nro 2',
    completed: true,
    onComplete: () => mockFn(),
    onDelete: () => mockFn(),
  },
]

export const mockListItems = {
  error: false,
  errorTrue: true,
  loading: false,
  loadingTrue: true,
  searchTodos: mockSearchTodos,
  totalTodos: 10,
  noSearchValue: '',
  searchValue: 'hola',
  openModal: false,
  onComplete: jest.fn(),
  onDelete: jest.fn(),
  setOpenModal: jest.fn(),
}
