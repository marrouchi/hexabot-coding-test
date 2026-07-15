import { useState } from 'react'

export default function NewsletterForm({
  actionUrl = 'https://your-subdomain.us1.list-manage.com/subscribe/post?u=XXXX&id=XXXX'
}) {
  const [email, setEmail] = useState('')

  return (
    <form
      method="POST"
      action={actionUrl}
      target="_blank"
      encType="application/x-www-form-urlencoded"
      className="w-full max-w-md mx-auto"
    >
      <div className="flex flex-col gap-3">
        <input
          type="hidden"
          name="b_XXXX_XXXX"
          value=""
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center">
          We'll never share your email with anyone else.
        </p>
      </div>
    </form>
  )
}
