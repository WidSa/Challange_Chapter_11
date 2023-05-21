/** @jest-environment jsdom */
import React from 'react'
import { render } from './testUtils.js'
import Home from '../pages/home/index.jsx'
import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

const mockRouter = {
  route: '/mock-route',
  basePath: '',
  pathname: '/mock-route',
  query: {},
  asPath: '/mock-route'
}

useRouter.mockReturnValue(mockRouter)

describe('render test', () => {
  it('renders home page without crashing', () => {
    const home = render(<Home />)
    expect(home).toMatchSnapshot()
  })
})
