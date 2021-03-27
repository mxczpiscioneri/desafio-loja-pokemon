import React from 'react'
import { render } from '@testing-library/react'
import Header from '.'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}))

describe('Header components', () => {
  test('Render with success', () => {
    const component = render(<Header />)
    expect(component).toMatchSnapshot()
  })
})
