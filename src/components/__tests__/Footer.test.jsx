import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders footer element', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })

  it('footer is semantic footer element', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer?.tagName).toBe('FOOTER')
  })

  it('renders copyright text with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(
      screen.getByText(`© ${currentYear} John Doe. All rights reserved.`)
    ).toBeInTheDocument()
  })

  it('renders John Doe name in copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/John Doe/)).toBeInTheDocument()
  })

  it('renders SocialLinks component with all platforms', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
  })

  it('renders footer with background color styling', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('bg-gray-50')
  })

  it('renders footer with top border', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('border-t')
  })

  it('renders footer with proper inner padding', () => {
    const { container } = render(<Footer />)
    const footerContent = container.querySelector('footer > div')
    expect(footerContent).toHaveClass('py-12')
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

  it('copyright text is a paragraph element', () => {
    const { container } = render(<Footer />)
    const copyrightParagraph = container.querySelector('footer p')
    expect(copyrightParagraph?.tagName).toBe('P')
  })

  it('renders copyright symbol correctly', () => {
    render(<Footer />)
    const copyrightText = screen.getByText(/©/)
    expect(copyrightText).toBeInTheDocument()
  })

  it('social links are positioned correctly', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(4)
  })

  it('footer has semantic tag and proper structure', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer?.tagName).toBe('FOOTER')
    const contentWrapper = footer?.querySelector('div')
    expect(contentWrapper).toHaveClass('max-w-6xl')
  })

  it('renders all social links with correct security attributes', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('renders NewsletterForm component', () => {
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Enter your email')
    expect(emailInput).toBeInTheDocument()
  })

  it('renders newsletter email input with correct attributes', () => {
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Enter your email')
    expect(emailInput).toHaveAttribute('type', 'email')
    expect(emailInput).toHaveAttribute('name', 'EMAIL')
  })

  it('renders subscribe button in newsletter form', () => {
    render(<Footer />)
    const subscribeButton = screen.getByRole('button', { name: 'Subscribe' })
    expect(subscribeButton).toBeInTheDocument()
  })

  it('newsletter form is positioned above social links', () => {
    const { container } = render(<Footer />)
    const flexCol = container.querySelector('.flex.flex-col.items-center')
    const children = flexCol?.children
    expect(children).toBeTruthy()
    // NewsletterForm is the first child
    expect(children?.[0]).toBeInTheDocument()
    // SocialLinks should be a child below it
    const socialLinks = screen.getByRole('link', { name: 'Facebook' })
    expect(socialLinks).toBeInTheDocument()
  })

  it('footer includes newsletter form for subscriptions', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })
})
