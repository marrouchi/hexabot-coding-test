import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the Header component', () => {
    render(<App />)
    expect(screen.getAllByText('John Doe')).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  it('renders the Hero component', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { name: 'John Doe' })
    expect(headings.length).toBeGreaterThan(0)
  })

  it('renders both Header and Hero with proper layout', () => {
    const { container } = render(<App />)
    const mainDiv = container.querySelector('.min-h-screen')
    expect(mainDiv).toBeInTheDocument()

    const header = container.querySelector('header')
    const section = container.querySelector('section')
    expect(header).toBeInTheDocument()
    expect(section).toBeInTheDocument()
  })

  it('displays navigation menu and hero section content', () => {
    render(<App />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get In Touch' })).toBeInTheDocument()
  })

  it('maintains proper document structure with header before hero', () => {
    const { container } = render(<App />)
    const elements = container.querySelectorAll('header, section')
    expect(elements[0].tagName).toBe('HEADER')
    expect(elements[1].tagName).toBe('SECTION')
  })
})
