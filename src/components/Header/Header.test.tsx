import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
  it('renders the header element', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('displays the logo with name "John Doe"', () => {
    render(<Header />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('displays the tagline "Web Developer"', () => {
    render(<Header />)
    expect(screen.getByText('Web Developer')).toBeInTheDocument()
  })

  it('renders navigation element', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('navigation links have correct href attributes', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '#home')
    expect(screen.getByText('About')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Portfolio')).toHaveAttribute('href', '#portfolio')
    expect(screen.getByText('Contact')).toHaveAttribute('href', '#contact')
  })

  it('renders mobile menu button', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Toggle menu')
    expect(menuButton).toBeInTheDocument()
  })

  it('mobile menu button is a button element', () => {
    render(<Header />)
    const menuButton = screen.getByLabelText('Toggle menu')
    expect(menuButton.tagName).toBe('BUTTON')
  })
})
