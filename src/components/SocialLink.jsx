export default function SocialLink({ icon: Icon, url, label }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors"
    >
      <Icon size={24} />
    </a>
  )
}
