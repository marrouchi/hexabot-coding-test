import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewsletterForm from '../NewsletterForm'

describe('NewsletterForm', () => {
  it('renders the form element', () => {
    const { container } = render(<NewsletterForm />)
    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
  })

  it('renders email input field', () => {
    render(<NewsletterForm />)
    const emailInput = screen.getByPlaceholderText('Enter your email')
    expect(emailInput).toBeInTheDocument()
  })

  it('email input has correct name attribute', () => {
    render(<NewsletterForm />)
    const emailInput = screen.getByPlaceholderText('Enter your email')
    expect(emailInput).toHaveAttribute('name', 'EMAIL')
  })

  it('email input has type="email"', () => {
    render(<NewsletterForm />)
    const emailInput = screen.getByPlaceholderText('Enter your email')
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('email input is required', () => {
    render(<NewsletterForm />)
    const emailInput = screen.getByPlaceholderText('Enter your email')
    expect(emailInput).toHaveAttribute('required')
  })

  it('email input has proper aria-label for accessibility', () => {
    render(<NewsletterForm />)
    const emailInput = screen.getByLabelText('Email address')
    expect(emailInput).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<NewsletterForm />)
    const submitButton = screen.getByRole('button', { name: 'Subscribe' })
    expect(submitButton).toBeInTheDocument()
  })

  it('submit button has type="submit"', () => {
    render(<NewsletterForm />)
    const submitButton = screen.getByRole('button', { name: 'Subscribe' })
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('form has POST method', () => {
    const { container } = render(<NewsletterForm />)
    const form = container.querySelector('form')
    expect(form).toHaveAttribute('method', 'POST')
  })

  it('form has target="_blank" to open confirmation in new tab', () => {
    const { container } = render(<NewsletterForm />)
    const form = container.querySelector('form')
    expect(form).toHaveAttribute('target', '_blank')
  })

  it('form has correct encType for form submission', () => {
    const { container } = render(<NewsletterForm />)
    const form = container.querySelector('form')
    expect(form).toHaveAttribute('encType', 'application/x-www-form-urlencoded')
  })

  it('form uses placeholder action URL by default', () => {
    const { container } = render(<NewsletterForm />)
    const form = container.querySelector('form')
    expect(form).toHaveAttribute(
      'action',
      'https://your-subdomain.us1.list-manage.com/subscribe/post?u=XXXX&id=XXXX'
    )
  })

  it('form accepts custom actionUrl prop', () => {
    const customUrl = 'https://custom-mailchimp-url.com/subscribe'
    const { container } = render(<NewsletterForm actionUrl={customUrl} />)
    const form = container.querySelector('form')
    expect(form).toHaveAttribute('action', customUrl)
  })

  it('renders honeypot hidden field', () => {
    const { container } = render(<NewsletterForm />)
    const honeypot = container.querySelector('input[name="b_XXXX_XXXX"]')
    expect(honeypot).toBeInTheDocument()
  })

  it('honeypot field has type="hidden"', () => {
    const { container } = render(<NewsletterForm />)
    const honeypot = container.querySelector('input[name="b_XXXX_XXXX"]')
    expect(honeypot).toHaveAttribute('type', 'hidden')
  })

  it('honeypot field has empty value', () => {
    const { container } = render(<NewsletterForm />)
    const honeypot = container.querySelector('input[name="b_XXXX_XXXX"]')
    expect(honeypot).toHaveAttribute('value', '')
  })

  it('renders privacy reassurance text', () => {
    render(<NewsletterForm />)
    expect(
      screen.getByText("We'll never share your email with anyone else.")
    ).toBeInTheDocument()
  })

  it('allows user to type in email input', async () => {
    const user = userEvent.setup()
    render(<NewsletterForm />)
    const emailInput = screen.getByPlaceholderText('Enter your email')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('email input is accessible via keyboard navigation', () => {
    render(<NewsletterForm />)
    const emailInput = screen.getByLabelText('Email address')
    expect(emailInput).not.toHaveAttribute('disabled')
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('submit button has hover styling class', () => {
    const { container } = render(<NewsletterForm />)
    const submitButton = screen.getByRole('button', { name: 'Subscribe' })
    expect(submitButton).toHaveClass('hover:bg-blue-700')
  })

  it('form renders with proper layout classes', () => {
    const { container } = render(<NewsletterForm />)
    const form = container.querySelector('form')
    expect(form).toHaveClass('max-w-md')
    expect(form).toHaveClass('mx-auto')
  })
})
