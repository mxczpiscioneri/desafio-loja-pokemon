import ReactDOM from 'react-dom'

jest.mock('react-dom')

describe('ReactDOM render', () => {
  test('render success', () => {
    require('./index')

    expect(ReactDOM.render).toBeCalled()
  })
})
