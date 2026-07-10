import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SocialLinks from '../SocialLinks'

describe('SocialLinks', () => {
  it('renders all four social links', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
  })

  it('renders links with correct URLs', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com/johndoe'
    )
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute(
      'href',
      'https://twitter.com/johndoe'
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/johndoe'
    )
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/johndoe'
    )
  })

  it('all links open in new tab', () => {
    render(<SocialLinks />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('renders links container with flex layout', () => {
    const { container } = render(<SocialLinks />)
    const linksContainer = container.querySelector('div')
    expect(linksContainer).toHaveClass('flex')
    expect(linksContainer).toHaveClass('gap-4')
    expect(linksContainer).toHaveClass('justify-center')
  })
})
