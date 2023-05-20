/** @jest-environment jsdom */
import React from 'react'
import { render } from '@testing-library/react'
import Home from '../pages/index'

test('renders without crashing', () => {
  render(<Home />)
})
