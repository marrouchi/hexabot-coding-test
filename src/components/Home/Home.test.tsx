import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home Component', () => {
  it('renders the home container', () => {
    render(<Home />)
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
  })

  it('renders Header component', () => {
    render(<Home />)
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })

  it('renders Hero component', () => {
    const { container } = render(<Home />)
    const hero = container.querySelector('section')
    expect(hero).toBeInTheDocument()
  })

  it('renders all Header navigation links', () => {
    render(<Home />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Hero headline and subheading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('John Doe')
    expect(screen.getByText('Freelance Web Developer')).toBeInTheDocument()
  })

  it('renders Hero CTA buttons', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /View My Work/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Get In Touch/ })).toBeInTheDocument()
  })

  it('renders all navigation links with correct href attributes', () => {
    render(<Home />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '#home')
    expect(screen.getByText('About')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Portfolio')).toHaveAttribute('href', '#portfolio')
    expect(screen.getByText('Contact')).toHaveAttribute('href', '#contact')
  })

  it('composes Header and Hero in the correct order', () => {
    const { container } = render(<Home />)
    const header = screen.getByRole('banner')
    const heroSection = container.querySelector('section')

    // Header should come before Hero in DOM
    expect(header).toBeTruthy()
    expect(heroSection).toBeTruthy()

    // Verify structure: header before main
    const headerIndex = Array.from(container.querySelectorAll('header, main')).findIndex(
      el => el.tagName === 'HEADER'
    )
    const mainIndex = Array.from(container.querySelectorAll('header, main')).findIndex(
      el => el.tagName === 'MAIN'
    )
    expect(headerIndex).toBeLessThan(mainIndex)
  })
})
