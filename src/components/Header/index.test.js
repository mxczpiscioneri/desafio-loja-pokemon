import React from 'react'
import { render } from '@testing-library/react'
import Header from '.'

describe('Header components', () => {
  test('Render with success', () => {
    const component = render(<Header />)
    expect(component).toMatchSnapshot()
  })
})
