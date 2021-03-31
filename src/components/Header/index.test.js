import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Header from '.'
import { paths } from '../../routes'

const mockHistory = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory
  })
}))

describe('Header components', () => {
  test('Render with success', () => {
    const component = render(<Header />)
    expect(component).toMatchSnapshot()
  })

  test('search pokemon with success', () => {
    render(<Header />)

    const input = screen.getByPlaceholderText('Procurar...')

    fireEvent.change(input, { target: [{ value: 'bulbasaur' }] })

    fireEvent.submit(input)

    expect(mockHistory).toBeCalledWith(paths.details.replace(':name', 'bulbasaur'))
  })

  test('search pokemon empty', () => {
    render(<Header />)

    const input = screen.getByPlaceholderText('Procurar...')

    fireEvent.change(input, { target: [{ value: '' }] })

    fireEvent.submit(input)

    expect(mockHistory).not.toBeCalled()
  })
})
