import { InstagramIcon, GithubIcon, LinkedinIcon } from '@/assets/SocialIcons'
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiBitbucket,
  SiBulma,
  SiC,
  SiChakraui,
  SiCplusplus,
  SiGithub,
  SiInsomnia,
  SiJavascript,
  SiJirasoftware,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiVite,
} from 'react-icons/si'
import { FaCss3Alt, FaHtml5, FaPython, FaReact } from 'react-icons/fa'
import { BiLogoFigma, BiLogoPostgresql } from 'react-icons/bi'

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
    label: 'About',
    to: '#section-about',
  },
  {
    isInternal: true,
    label: 'Projects',
    to: '#section-projects',
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

/* ******************************************************
Icons can be found at:
https://react-icons.github.io/react-icons/

To use it, find the icon you want, put the component
in the icon field, and copy equivalent import.

Example:

```
import { FaBeer } from 'react-icons/fa'

{
  name: 'Beer',
  icon: <FaBeer />
  textColor: '#fff',
  badgeColor: '#000',
}
```

****************************************************** */

export const toolList = [
  {
    name: 'C',
    icon: <SiC />,
    textColor: '#fff',
    badgeColor: '#00599D',
  },
  {
    name: 'C++',
    icon: <SiCplusplus />,
    textColor: '#fff',
    badgeColor: '#390091',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    textColor: '#fff',
    badgeColor: '#E34F26',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
    textColor: '#fff',
    badgeColor: '#1572B6',
  },
  {
    name: 'Javascript',
    icon: <SiJavascript />,
    textColor: '#000',
    badgeColor: '#F7DF1E',
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
    textColor: '#fff',
    badgeColor: '#007ACC',
  },
  {
    name: 'React',
    icon: <FaReact />,
    textColor: '#fff',
    badgeColor: '#087EA4',
  },
  {
    name: 'Styled-Components',
    icon: <SiStyledcomponents />,
    textColor: '#fff',
    badgeColor: '#BF4F74',
  },
  {
    name: 'Chakra-UI',
    icon: <SiChakraui />,
    textColor: '#fff',
    badgeColor: '#4ED1C5',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    textColor: '#fff',
    badgeColor: '#38BDF8',
  },
  {
    name: 'Bulma',
    icon: <SiBulma />,
    textColor: '#fff',
    badgeColor: '#00D0B1',
  },
  {
    name: 'Storybook',
    icon: <SiStorybook />,
    textColor: '#fff',
    badgeColor: '#FF4785',
  },
  {
    name: 'Node.Js',
    icon: <SiNodedotjs />,
    textColor: '#fff',
    badgeColor: '#6DA55F',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    textColor: '#fff',
    badgeColor: '#000000',
  },
  {
    name: 'Vite',
    icon: <SiVite />,
    textColor: '#fff',
    badgeColor: 'linear-gradient(135deg, #3CCEFC 0%, #C43FFB 100%)',
  },
  {
    name: 'Python',
    icon: <FaPython />,
    textColor: '#fff',
    badgeColor: '#3776AB',
  },
  {
    name: 'OpenCV',
    icon: <SiOpencv />,
    textColor: '#fff',
    badgeColor: '#8B1DF2',
  },
  {
    name: 'PostgreSQL',
    icon: <BiLogoPostgresql />,
    textColor: '#fff',
    badgeColor: '#316192',
  },
  {
    name: 'Unity',
    icon: <SiUnity />,
    textColor: '#fff',
    badgeColor: '#100000',
  },
  {
    name: 'Insomnia',
    icon: <SiInsomnia />,
    textColor: '#fff',
    badgeColor: '#5849BE',
  },
  {
    name: 'GitHub',
    icon: <SiGithub />,
    textColor: '#fff',
    badgeColor: '#1F2328',
  },
  {
    name: 'BitBucket',
    icon: <SiBitbucket />,
    textColor: '#fff',
    badgeColor: '#0052CC',
  },
  {
    name: 'Jira Software',
    icon: <SiJirasoftware />,
    textColor: '#fff',
    badgeColor: '#2684FF',
  },
  {
    name: 'Figma',
    icon: <BiLogoFigma />,
    textColor: '#fff',
    badgeColor: '#FF3361',
  },
  {
    name: 'Adobe Photoshop',
    icon: <SiAdobephotoshop />,
    textColor: '#fff',
    badgeColor: '#006ACC',
  },
  {
    name: 'Adobe Illustrator',
    icon: <SiAdobeillustrator />,
    textColor: '#fff',
    badgeColor: '#FF8A00',
  },
  {
    name: 'Adobe Premiere Pro',
    icon: <SiAdobepremierepro />,
    textColor: '#fff',
    badgeColor: '#5545FF',
  },
  {
    name: 'Adobe After Effects',
    icon: <SiAdobeaftereffects />,
    textColor: '#fff',
    badgeColor: '#9969FF',
  },
]
