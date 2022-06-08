import { render } from '@redwoodjs/testing/web'

import Sketch from './Sketch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Sketch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sketch />)
    }).not.toThrow()
  })
})
