import SocialLinks from './SocialLinks'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          <SocialLinks />
          <div className="text-center text-gray-600 text-sm">
            <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
