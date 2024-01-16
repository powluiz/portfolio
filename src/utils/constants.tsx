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
    url: 'https://github.com/powluiz',
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

/* ****************************************************** */

export interface IMultiLanguageText {
  en_us: string
  pt_br: string
}

export interface IExperienceItem {
  company: IMultiLanguageText
  role: IMultiLanguageText
  period: IMultiLanguageText
  description: IMultiLanguageText
  skills: string[]
}

export const experienceList: IExperienceItem[] = [
  {
    company: {
      en_us: 'Center for Excellence in Social Technologies',
      pt_br: 'Centro de Excelência em Tecnologias Sociais',
    },
    role: {
      en_us: 'Frontend Web Developer',
      pt_br: 'Desenvolvedor Web Front-End',
    },
    period: {
      en_us: 'NOV 2022 - PRESENT',
      pt_br: 'NOV 2022 - PRESENTE',
    },
    description: {
      en_us:
        'I served as a Front-End Web Developer at the Center of Excellence in Social Technologies. Throughout my tenure, I actively collaborated with the front-end team and engaged in cross-functional cooperation with other teams on various initiatives. Key responsibilities included: Developing and maintaining responsive interfaces using Figma prototypes, updating the Design System to DSGov standards, utilizing REST APIs to ensure seamless client-server integration, and implementing version control and code reviews through Bitbucket.',
      pt_br:
        'Atuei como Desenvolvedor Web Front-End no Núcleo de Excelência em Tecnologias Sociais. Durante meu período lá, integrei a equipe de front e colaborei com outros times em diversas atividades. Entre elas, destacam-se: Desenvolvimento e manutenção de interfaces responsivas com base em protótipos do Figma, atualização de Design System nos padrões do DSGov, consumo de APIs REST para garantir uma integração cliente-servidor efetiva, controle de versionamento e revisão de código com Bitbucket.',
    },
    skills: [
      'React',
      'Node.js',
      'Javascript',
      'Typescript',
      'Next.js',
      'Chakra-UI',
      'Storybook',
      'Figma',
      'Bitbucket',
      'REST APIs',
      'Jira Software',
    ],
  },
  {
    company: {
      en_us: 'OCCAM Engineering - Junior Company',
      pt_br: 'OCCAM Engenharia - Empresa Júnior',
    },
    role: {
      en_us: 'Marketing Director/Developer',
      pt_br: 'Diretor de Marketing/Desenvolvedor',
    },
    period: {
      en_us: 'MAR 2023 - PRESENT',
      pt_br: 'MAR 2023 - PRESENT',
    },
    description: {
      en_us:
        'I took on the role of leading, assigning tasks, and providing guidance to the marketing team. Additionally, I formulated strategies aligned with the goals of the junior company and collaborated with other departments to ensure an integrated approach. As a developer, I was responsible for crafting prototypes for web applications using Figma, developing Front-End applications, and ensuring seamless integration between the client and server.',
      pt_br:
        'Fui responsável por liderar, atribuir tarefas e fornecer orientações ao time de marketing. Ainda, elaborei estratégias alinhadas aos objetivos da empresa júnior e trabalhei em colaboração aos outros setores para garantir uma abordagem integrada. Como desenvolvedor, fui responsável por criar protótipos de aplicações web com Figma, desenvolver aplicações Front-End e garantir a integração entre cliente e servidor.',
    },
    skills: [
      'Figma',
      'React',
      'Node.js',
      'Javascript',
      'Typescript',
      'Next.js',
      'GitHub',
      'REST APIs',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'Adobe After Effects',
    ],
  },
  {
    company: {
      en_us: 'Bitz Softwares',
      pt_br: 'Bitz Softwares',
    },
    role: {
      en_us: 'Marketing Analist',
      pt_br: 'Analista de Marketing',
    },
    period: {
      en_us: 'FEV 2022 - MAR 2022',
      pt_br: 'FEV 2022 - MAR 2022',
    },
    description: {
      en_us:
        "I worked for a brief period as a marketing analyst at Bitz, where I was responsible for planning and producing materials used in the company's communication channels. This included creating organic marketing campaigns, developing Landing Pages, and overseeing the production of periodic live events.",
      pt_br:
        'Atuei por um breve período como analista de marketing na Bitz, onde fui responsável por planejar e produzir os materiais utilizados nos canais de comunicação para as verticais da empresa, além de elaborar campanhas orgânicas de marketing, desenvolver landing pages e supervisionar lives periódicas.',
    },
    skills: [
      'RD Station',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'Adobe After Effects',
    ],
  },
  {
    company: {
      en_us: 'Freelancer',
      pt_br: 'Freelancer',
    },
    role: {
      en_us: 'Graphic Designer and Video Editor',
      pt_br: 'Designer Gráfico e Editor de Video',
    },
    period: {
      en_us: '2018 - 2022',
      pt_br: '2018 - 2022',
    },
    description: {
      en_us:
        'I started my career as a freelancer in projects involving design, editing, and motion. During this period, I was responsible for producing graphic materials and audiovisual solutions for various products, events, and advertising campaigns.',
      pt_br:
        'Iniciei minha carreira como freelancer em projetos com design, edição e motion. Durante este período, fui responsável pela produção de materiais gráficos e soluções audiovisuais para diversos produtos, eventos e campanhas publicitárias.',
    },
    skills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Premiere Pro',
      'Adobe After Effects',
      'CorelDRAW',
    ],
  },
]
