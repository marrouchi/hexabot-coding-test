import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import SocialLink from './SocialLink'

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: FaFacebook,
      url: 'https://facebook.com/johndoe',
      label: 'Facebook',
    },
    {
      icon: FaTwitter,
      url: 'https://twitter.com/johndoe',
      label: 'Twitter',
    },
    {
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/johndoe',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      url: 'https://github.com/johndoe',
      label: 'GitHub',
    },
  ]

  return (
    <div className="flex gap-4 justify-center">
      {socialLinks.map((link) => (
        <SocialLink
          key={link.label}
          icon={link.icon}
          url={link.url}
          label={link.label}
        />
      ))}
    </div>
  )
}
