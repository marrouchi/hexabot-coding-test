import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SocialLink from '../SocialLink'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

describe('SocialLink', () => {
  it('renders a link with correct href', () => {
    render(
      <SocialLink
        icon={FaGithub}
        url="https://github.com/johndoe"
        label="GitHub"
      />
    )
    const link = screen.getByRole('link', { name: 'GitHub' })
    expect(link).toHaveAttribute('href', 'https://github.com/johndoe')
  })

  it('opens link in new tab', () => {
    render(
      <SocialLink
        icon={FaGithub}
        url="https://github.com/johndoe"
        label="GitHub"
      />
    )
    const link = screen.getByRole('link', { name: 'GitHub' })
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('includes security attributes for external links', () => {
    render(
      <SocialLink
        icon={FaGithub}
        url="https://github.com/johndoe"
        label="GitHub"
      />
    )
    const link = screen.getByRole('link', { name: 'GitHub' })
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has accessibility aria-label', () => {
    render(
      <SocialLink
        icon={FaGithub}
        url="https://github.com/johndoe"
        label="GitHub"
      />
    )
    const link = screen.getByRole('link', { name: 'GitHub' })
    expect(link).toHaveAttribute('aria-label', 'GitHub')
  })

  it('renders with button styling classes', () => {
    const { container } = render(
      <SocialLink
        icon={FaGithub}
        url="https://github.com/johndoe"
        label="GitHub"
      />
    )
    const link = container.querySelector('a')
    expect(link).toHaveClass('inline-flex')
    expect(link).toHaveClass('hover:text-blue-600')
    expect(link).toHaveClass('rounded-full')
  })

  it('renders with different icons correctly', () => {
    const { rerender, container } = render(
      <SocialLink
        icon={FaGithub}
        url="https://github.com/johndoe"
        label="GitHub"
      />
    )
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()

    rerender(
      <SocialLink
        icon={FaLinkedin}
        url="https://linkedin.com/in/johndoe"
        label="LinkedIn"
      />
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('handles different URLs correctly', () => {
    const urls = [
      'https://github.com/johndoe',
      'https://linkedin.com/in/johndoe',
      'https://facebook.com/johndoe',
    ]

    urls.forEach((url) => {
      const { unmount } = render(
        <SocialLink
          icon={FaGithub}
          url={url}
          label="Test"
        />
      )
      const link = screen.getByRole('link', { name: 'Test' })
      expect(link).toHaveAttribute('href', url)
      unmount()
    })
  })

  it('icon is accessible via keyboard', async () => {
    const user = userEvent.setup()
    render(
      <SocialLink
        icon={FaGithub}
        url="https://github.com/johndoe"
        label="GitHub"
      />
    )
    const link = screen.getByRole('link', { name: 'GitHub' })
    await user.tab()
    expect(link).toHaveFocus()
  })

  it('renders icon as child element', () => {
    const { container } = render(
      <SocialLink
        icon={FaGithub}
        url="https://github.com/johndoe"
        label="GitHub"
      />
    )
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})
