import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Tabs from '.'
import * as TypeContext from '../../contexts/type'
import { keys } from '../../hooks/useLocalStorage'
import { paths } from '../../routes'

const mockHistory = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistory
  })
}))

describe('Tabs components', () => {
  test('Render with success', () => {
    const component = render(<Tabs />)
    expect(component).toMatchSnapshot()
  })

  test('Change tab all', () => {
    const mockSetType = jest.fn()
    const mockUseContext = { type: null, setType: mockSetType }
    const type = 'all'
    jest
      .spyOn(TypeContext, 'useTypeContext')
      .mockImplementation(() => mockUseContext)

    render(<Tabs />)

    fireEvent.click(screen.getByText(type))

    expect(mockSetType).toBeCalledWith(keys.type, type)
    expect(mockHistory).toBeCalledWith(paths.home)
  })

  test('Change tab type', () => {
    const mockSetType = jest.fn()
    const mockUseContext = { type: null, setType: mockSetType }
    const type = 'normal'
    jest
      .spyOn(TypeContext, 'useTypeContext')
      .mockImplementation(() => mockUseContext)

    render(<Tabs />)

    fireEvent.click(screen.getByText(type))

    expect(mockSetType).toBeCalledWith(keys.type, type)
    expect(mockHistory).toBeCalledWith(paths.type.replace(':type', type))
  })
})
