/** @jest-environment jsdom */
import React from 'react'
import { render, screen } from './testUtils.js'
import RegisterPage from '../pages/register/index.jsx'
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
  it('renders register page without crashing', () => {
    render(<RegisterPage />)
  })
  it('contains create an account text', () => {
    render(<RegisterPage/>)
    const headText = screen.queryByText('Create an account')
    expect(headText).toBeInTheDocument
  })
})

describe('form test', () => {
  it('contains email input', () => {
    render(<RegisterPage />)
    const emailInput = screen.queryByLabelText('Email')
    expect(emailInput).toBeInTheDocument
  })
  it('contains password input', () => {
    render(<RegisterPage />)
    const passwordInput = screen.queryByLabelText('Password')
    expect(passwordInput).toBeInTheDocument
  })
})
