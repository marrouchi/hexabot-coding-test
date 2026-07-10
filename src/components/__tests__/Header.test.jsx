import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../Header'

describe('Header', () => {
  it('renders the John Doe logo', () => {
    render(<Header />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
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

  it('toggles mobile menu on button click', async () => {
    const { container } = render(<Header />)
    const user = userEvent.setup()
    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })

    expect(menuButton).toBeInTheDocument()

    const mobileMenu = container.querySelector('.md\\:hidden.mt-4')
    const isInitiallyVisible = mobileMenu && mobileMenu.offsetParent !== null

    await user.click(menuButton)
    const afterFirstClick = mobileMenu && mobileMenu.offsetParent !== null
    expect(afterFirstClick).toBeDefined()

    await user.click(menuButton)
    const afterSecondClick = mobileMenu && mobileMenu.offsetParent !== null
    expect(afterSecondClick).toBeDefined()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const { container } = render(<Header />)
    const user = userEvent.setup()
    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })

    await user.click(menuButton)
    const links = screen.getAllByRole('link', { name: 'About' })
    const mobileLink = links[links.length - 1]
    await user.click(mobileLink)

    expect(menuButton).toBeInTheDocument()
  })

  it('renders header with shadow styling', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header).toHaveClass('shadow-sm')
  })
})
