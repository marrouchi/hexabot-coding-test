import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeInTheDocument()
  })

  it('renders the Header component', () => {
    render(<App />)
    expect(screen.getAllByText('John Doe')).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  it('renders header navigation links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the Hero component', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { name: 'John Doe' })
    expect(headings.length).toBeGreaterThan(0)
  })

  it('renders both Header and Hero with proper layout', () => {
    const { container } = render(<App />)
    const mainDiv = container.querySelector('.min-h-screen')
    expect(mainDiv).toBeInTheDocument()

    const header = container.querySelector('header')
    const section = container.querySelector('section')
    expect(header).toBeInTheDocument()
    expect(section).toBeInTheDocument()
  })

  it('main container has flex layout for sticky footer', () => {
    const { container } = render(<App />)
    const mainDiv = container.querySelector('.min-h-screen')
    expect(mainDiv).toHaveClass('flex')
    expect(mainDiv).toHaveClass('flex-col')
  })

  it('displays navigation menu and hero section content', () => {
    render(<App />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get In Touch' })).toBeInTheDocument()
  })

  it('maintains proper document structure with header before hero', () => {
    const { container } = render(<App />)
    const elements = container.querySelectorAll('header, section')
    expect(elements[0].tagName).toBe('HEADER')
    expect(elements[1].tagName).toBe('SECTION')
  })

  it('renders the Footer component with social links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('footer displays correct copyright year', () => {
    render(<App />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('renders components in correct order: Header, Hero, then Footer', () => {
    const { container } = render(<App />)
    const header = container.querySelector('header')
    const section = container.querySelector('section')
    const footer = container.querySelector('footer')

    expect(header).toBeInTheDocument()
    expect(section).toBeInTheDocument()
    expect(footer).toBeInTheDocument()

    const headerIndex = Array.from(container.querySelectorAll('header, section, footer')).indexOf(header)
    const sectionIndex = Array.from(container.querySelectorAll('header, section, footer')).indexOf(section)
    const footerIndex = Array.from(container.querySelectorAll('header, section, footer')).indexOf(footer)

    expect(headerIndex).toBeLessThan(sectionIndex)
    expect(sectionIndex).toBeLessThan(footerIndex)
  })

  it('renders hero section with gradient background', () => {
    const { container } = render(<App />)
    const heroSection = container.querySelector('section')
    expect(heroSection).toHaveClass('bg-gradient-to-br')
  })

  it('header is properly styled and positioned', () => {
    const { container } = render(<App />)
    const header = container.querySelector('header')
    expect(header).toHaveClass('bg-white')
    expect(header).toHaveClass('shadow-sm')
  })

  it('renders all social media links', () => {
    render(<App />)
    const socialLinks = ['Facebook', 'Twitter', 'LinkedIn', 'GitHub']
    socialLinks.forEach((platform) => {
      expect(screen.getByRole('link', { name: platform })).toBeInTheDocument()
    })
  })

  it('social links open in new tab', () => {
    render(<App />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      if (link.getAttribute('href')?.startsWith('http')) {
        expect(link).toHaveAttribute('target', '_blank')
      }
    })
  })

  it('displays CTA button in hero section', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Get In Touch' })).toBeInTheDocument()
  })

  it('button has proper styling for visibility', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: 'Get In Touch' })
    expect(button).toHaveClass('bg-blue-600')
    expect(button).toHaveClass('text-white')
  })

  it('renders professional tagline in hero', () => {
    render(<App />)
    expect(screen.getByText(/Full-stack web developer/i)).toBeInTheDocument()
  })
})
