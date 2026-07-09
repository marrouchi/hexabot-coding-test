import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero Component', () => {
  it('renders the hero section', () => {
    const { container } = render(<Hero />)
    const hero = container.querySelector('section')
    expect(hero).toBeInTheDocument()
  })

  it('displays the headline "John Doe"', () => {
    render(<Hero />)
    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline).toHaveTextContent('John Doe')
  })

  it('displays the subheading "Freelance Web Developer"', () => {
    render(<Hero />)
    expect(screen.getByText('Freelance Web Developer')).toBeInTheDocument()
  })

  it('displays descriptive text about services', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Crafting beautiful, responsive, and high-performance web applications/)
    ).toBeInTheDocument()
  })

  it('displays specialization text', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Specializing in React, TypeScript, and modern web technologies/)
    ).toBeInTheDocument()
  })

  it('renders primary CTA button "View My Work"', () => {
    render(<Hero />)
    const primaryBtn = screen.getByRole('button', { name: /View My Work/ })
    expect(primaryBtn).toBeInTheDocument()
  })

  it('renders secondary CTA button "Get In Touch"', () => {
    render(<Hero />)
    const secondaryBtn = screen.getByRole('button', { name: /Get In Touch/ })
    expect(secondaryBtn).toBeInTheDocument()
  })

  it('renders scroll indicator text', () => {
    render(<Hero />)
    expect(screen.getByText('Scroll to explore')).toBeInTheDocument()
  })

  it('renders two buttons total', () => {
    render(<Hero />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })

  it('primary button is a button element', () => {
    render(<Hero />)
    const primaryBtn = screen.getByRole('button', { name: /View My Work/ })
    expect(primaryBtn.tagName).toBe('BUTTON')
  })

  it('secondary button is a button element', () => {
    render(<Hero />)
    const secondaryBtn = screen.getByRole('button', { name: /Get In Touch/ })
    expect(secondaryBtn.tagName).toBe('BUTTON')
  })
})
