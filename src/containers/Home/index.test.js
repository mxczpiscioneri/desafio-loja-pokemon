import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import Home from '.'

const containerComponent = (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
)

describe('Home container', () => {
  test('Render the basic layout', () => {
    const component = render(containerComponent)
    expect(component).toMatchSnapshot()
  })
})
