import React from 'react'
import { render } from '@testing-library/react'
import Drawer from '.'

describe('Drawer components', () => {
  test('Render with success', () => {
    const component = render(<Drawer open={true} toggleDrawer={jest.fn()} />)
    expect(component).toMatchSnapshot()
  })
})
