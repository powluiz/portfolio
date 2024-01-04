import { InstagramIcon, GithubIcon, LinkedinIcon } from '@/assets/SocialIcons'

export const socialLinks = [
  {
    name: 'Github',
    icon: <GithubIcon color="#657792" />,
    url: 'https://github.com/luiz1303',
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon color="#657792" />,
    url: 'https://www.instagram.com/powluiz_/',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedinIcon color="#657792" />,
    url: 'https://www.linkedin.com/in/luiz-brumati/',
  },
]

export const pageLinks = [
  {
    isInternal: true,
    label: 'Home',
    to: '#section-home',
  },
  {
    isInternal: true,
    label: 'Skills',
    to: '#section-skills',
  },
  {
    isInternal: true,
    label: 'Experience',
    to: '#section-experience',
  },
  {
    isInternal: true,
    label: 'Contact',
    to: '#section-contact',
  },
]
