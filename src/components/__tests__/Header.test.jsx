import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../Header'

describe('Header', () => {
  let user

  beforeEach(() => {
    user = userEvent.setup()
  })

  it('renders the John Doe logo', () => {
    render(<Header />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('renders logo as text branding', () => {
    render(<Header />)
    const logo = screen.getByText('John Doe')
    expect(logo).toBeInTheDocument()
  })

  it('renders all navigation links on desktop', () => {
    render(<Header />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('navigation links have correct href attributes', () => {
    render(<Header />)
    const aboutLink = screen.getByRole('link', { name: 'About' })
    const projectsLink = screen.getByRole('link', { name: 'Projects' })
    const contactLink = screen.getByRole('link', { name: 'Contact' })

    expect(aboutLink).toHaveAttribute('href', '#about')
    expect(projectsLink).toHaveAttribute('href', '#projects')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })

  it('renders mobile menu button', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
    expect(menuButton).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const { container } = render(<Header />)
    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })

    let mobileLinks = container.querySelectorAll('.md\\:hidden.mt-4 a')
    expect(mobileLinks.length).toBe(0)

    await user.click(menuButton)
    await waitFor(() => {
      mobileLinks = container.querySelectorAll('.md\\:hidden.mt-4 a')
      expect(mobileLinks.length).toBeGreaterThan(0)
    })

    await user.click(menuButton)
    await waitFor(() => {
      mobileLinks = container.querySelectorAll('.md\\:hidden.mt-4 a')
      expect(mobileLinks.length).toBe(0)
    })
  })

  it('closes mobile menu when a link is clicked', async () => {
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })

    await user.click(menuButton)
    await waitFor(() => {
      expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThanOrEqual(2)
    })

    const links = screen.getAllByRole('link', { name: 'About' })
    const mobileLink = links[links.length - 1]
    await user.click(mobileLink)

    await waitFor(() => {
      expect(screen.getAllByRole('link', { name: 'About' }).length).toBe(1)
    })
  })

  it('renders header with shadow styling', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header).toHaveClass('shadow-sm')
  })

  it('header has proper background styling', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header).toHaveClass('bg-white')
  })

  it('header has proper structure and navigation', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    const nav = container.querySelector('nav')
    const logoDiv = container.querySelector('.text-2xl.font-bold')

    expect(header).toBeInTheDocument()
    expect(nav).toBeInTheDocument()
    expect(logoDiv).toHaveTextContent('John Doe')
  })

  it('desktop menu is hidden on mobile', () => {
    const { container } = render(<Header />)
    const desktopMenu = container.querySelector('.hidden.md\\:flex')
    expect(desktopMenu).toHaveClass('hidden')
    expect(desktopMenu).toHaveClass('md:flex')
  })

  it('mobile menu toggles visibility on click', async () => {
    const { container } = render(<Header />)
    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })

    await user.click(menuButton)
    await waitFor(() => {
      const mobileMenu = container.querySelector('.md\\:hidden.mt-4')
      expect(mobileMenu).toBeInTheDocument()
    })
  })

  it('all navigation links are accessible', () => {
    render(<Header />)
    const aboutLink = screen.getByRole('link', { name: 'About' })
    const projectsLink = screen.getByRole('link', { name: 'Projects' })
    const contactLink = screen.getByRole('link', { name: 'Contact' })

    expect(aboutLink).toHaveAttribute('href', '#about')
    expect(projectsLink).toHaveAttribute('href', '#projects')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })
})
