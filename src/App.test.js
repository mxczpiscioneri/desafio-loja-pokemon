import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('render App', () => {
  test('render with success', () => {
    const component = render(<App />)
    expect(component).toMatchSnapshot()
  })
})
