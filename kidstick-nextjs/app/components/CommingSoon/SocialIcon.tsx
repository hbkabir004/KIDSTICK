import { Facebook, Instagram, Twitter } from 'lucide-react'

interface SocialIconProps {
  href: string
  icon: 'twitter' | 'facebook' | 'instagram'
}

export function SocialIcon({ href, icon }: SocialIconProps) {
  const Icon = {
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram
  }[icon]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:text-[#FE5C45] transition-colors"
    >
      <Icon size={24} />
    </a>
  )
}

