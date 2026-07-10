import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders footer element', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })

  it('renders copyright text with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(
      screen.getByText(`© ${currentYear} John Doe. All rights reserved.`)
    ).toBeInTheDocument()
  })

  it('renders SocialLinks component', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
  })

  it('renders footer with proper styling', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('bg-gray-50')
    expect(footer).toHaveClass('border-t')
  })

  it('renders footer content with flex layout', () => {
    const { container } = render(<Footer />)
    const contentDiv = container.querySelector('.flex.flex-col')
    expect(contentDiv).toHaveClass('items-center')
    expect(contentDiv).toHaveClass('gap-8')
  })

  it('renders copyright text with proper styling', () => {
    const { container } = render(<Footer />)
    const copyrightText = container.querySelector('.text-gray-600')
    expect(copyrightText).toHaveClass('text-sm')
    expect(copyrightText).toHaveClass('text-center')
  })
})
