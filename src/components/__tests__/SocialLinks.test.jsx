import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SocialLinks from '../SocialLinks'

describe('SocialLinks', () => {
  it('renders all four social links', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
  })

  it('renders exactly four social links', () => {
    render(<SocialLinks />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)
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

  it('all links have proper accessibility aria-labels', () => {
    render(<SocialLinks />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute('aria-label', 'Facebook')
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('aria-label', 'Twitter')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('aria-label', 'LinkedIn')
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('aria-label', 'GitHub')
  })

  it('links are keyboard navigable', async () => {
    const user = userEvent.setup()
    render(<SocialLinks />)

    const facebookLink = screen.getByRole('link', { name: 'Facebook' })
    await user.tab()
    expect(facebookLink).toHaveFocus()

    await user.tab()
    const twitterLink = screen.getByRole('link', { name: 'Twitter' })
    expect(twitterLink).toHaveFocus()
  })

  it('renders all social link icons', () => {
    const { container } = render(<SocialLinks />)
    const icons = container.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(4)
  })

  it('links have consistent styling classes', () => {
    render(<SocialLinks />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveClass('inline-flex')
      expect(link).toHaveClass('hover:text-blue-600')
      expect(link).toHaveClass('rounded-full')
    })
  })
})
