import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SocialLink from '../SocialLink'
import { FaGithub } from 'react-icons/fa'

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
})
