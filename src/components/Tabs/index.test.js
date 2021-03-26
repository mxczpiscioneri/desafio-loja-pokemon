import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Tabs from '.'
import * as TypeContext from '../../contexts/type'
import { keys } from '../../hooks/useLocalStorage'

describe('Tabs components', () => {
  test('Render with success', () => {
    const component = render(<Tabs />)
    expect(component).toMatchSnapshot()
  })

  test('Change tab', () => {
    const mockSetType = jest.fn()
    const mockUseContext = { type: null, setType: mockSetType }
    const type = 'normal'
    jest
      .spyOn(TypeContext, 'useTypeContext')
      .mockImplementation(() => mockUseContext)

    render(<Tabs />)

    fireEvent.click(screen.getByText(type))

    expect(mockSetType).toBeCalledWith(keys.type, type)
  })
})
