import React from 'react'
import { render } from '@testing-library/react'
import Loading from '.'

describe('Loading components', () => {
  test('Render with success - with backdrop', () => {
    const component = render(<Loading backdrop={true} />)
    expect(component).toMatchSnapshot()
  })

  test('Render with success - without backdrop', () => {
    const component = render(<Loading backdrop={false} />)
    expect(component).toMatchSnapshot()
  })
})
