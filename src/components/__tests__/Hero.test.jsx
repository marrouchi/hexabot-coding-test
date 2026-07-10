import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero', () => {
  it('renders John Doe heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { name: 'John Doe' })
    expect(heading).toBeInTheDocument()
  })

  it('renders the professional tagline', () => {
    render(<Hero />)
    const tagline = screen.getByText(/Full-stack web developer and freelancer crafting beautiful, responsive digital experiences/i)
    expect(tagline).toBeInTheDocument()
  })

  it('renders CTA button with correct text', () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: 'Get In Touch' })
    expect(button).toBeInTheDocument()
  })

  it('CTA button has correct styling classes', () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: 'Get In Touch' })
    expect(button).toHaveClass('bg-blue-600')
    expect(button).toHaveClass('hover:bg-blue-700')
    expect(button).toHaveClass('text-white')
  })

  it('renders section with gradient background', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-gradient-to-br')
    expect(section).toHaveClass('from-blue-50')
    expect(section).toHaveClass('to-indigo-100')
  })

  it('heading has responsive sizing classes', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { name: 'John Doe' })
    expect(heading).toHaveClass('text-5xl')
    expect(heading).toHaveClass('sm:text-6xl')
  })

  it('tagline has responsive text sizing', () => {
    render(<Hero />)
    const tagline = screen.getByText(/Full-stack web developer and freelancer crafting beautiful, responsive digital experiences/i)
    expect(tagline).toHaveClass('text-xl')
    expect(tagline).toHaveClass('sm:text-2xl')
  })

  it('section has proper padding', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('py-20')
    expect(section).toHaveClass('sm:py-32')
  })

  it('section has flex-1 class to push footer to bottom', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('flex-1')
  })
})
