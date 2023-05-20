/** @jest-environment jsdom */
import React from 'react'
import { render } from './testUtils.js'
import RegisterPage from '../pages/register/index.jsx'
import { useRouter } from 'next/router'
import { screen } from '@testing-library/dom'

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
  it('renders register page without crashing', () => {
    render(<RegisterPage />)
  })
})

describe('form test', () => {
  it('form contains email input', () => {
    render(<RegisterPage />)
    const emailInput = screen.queryByLabelText('Email')
    expect(emailInput).toBeInTheDocument
  })
  it('form contains password input', () => {
    render(<RegisterPage />)
    const passwordInput = screen.queryByLabelText('Password')
    expect(passwordInput).toBeInTheDocument
  })
})
