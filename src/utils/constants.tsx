import { InstagramIcon, GithubIcon, LinkedinIcon } from '@/assets/SocialIcons'
import {
  SiBitbucket,
  SiChakraui,
  SiCplusplus,
  SiGithub,
  SiGitlab,
  SiInsomnia,
  SiJavascript,
  SiJirasoftware,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiPostman,
  SiRedux,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaPython,
  FaReact,
  FaSass,
  FaWordpress,
} from 'react-icons/fa'
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
    name: 'C/C++',
    icon: <SiCplusplus />,
    textColor: '#fff',
    badgeColor: '#390091',
  },
  {
    name: 'WordPress',
    icon: <FaWordpress />,
    textColor: '#fff',
    badgeColor: '#0F8CC6',
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
    name: 'React/ React Native',
    icon: <FaReact />,
    textColor: '#fff',
    badgeColor: '#087EA4',
  },
  {
    name: 'Redux',
    icon: <SiRedux />,
    textColor: '#fff',
    badgeColor: '#764ABC',
  },
  {
    name: 'Sass',
    icon: <FaSass />,
    textColor: '#fff',
    badgeColor: '#c69',
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
    name: 'Docker',
    icon: <FaDocker />,
    textColor: '#fff',
    badgeColor: '#0db7ed',
  },
  {
    name: 'Insomnia',
    icon: <SiInsomnia />,
    textColor: '#fff',
    badgeColor: '#5849BE',
  },
  {
    name: 'Postman',
    icon: <SiPostman />,
    textColor: '#fff',
    badgeColor: '#FF6C37',
  },
  {
    name: 'GitHub',
    icon: <SiGithub />,
    textColor: '#fff',
    badgeColor: '#1F2328',
  },
  {
    name: 'GitLab',
    icon: <SiGitlab />,
    textColor: '#fff',
    badgeColor: '#E24329',
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
      en_us: 'Center for Excellence in Social Technologies (NEES)',
      pt_br: 'Núcleo de Excelência em Tecnologias Sociais (NEES)',
    },
    role: {
      en_us: 'Frontend Developer',
      pt_br: 'Desenvolvedor Front-End',
    },
    period: {
      en_us: 'NOV 2022 - PRESENT',
      pt_br: 'NOV 2022 - PRESENTE',
    },
    description: {
      en_us:
        'Experience in projects derived from partnerships between NEES and the Brazilian Ministry of Education, designed to improve the national education, impacting thousands of students and education professionals. Key responsibilities included maintaining a Design System used by multiple teams, implementing new modules and functionalities, fixing bugs and optimizing security, performance, and accessibility.',
      pt_br:
        'Atuação em diferentes projetos decorrentes de parceria entre NEES e Ministério da Educação, concebidos com o propósito de melhorar o panorama da educação em nível nacional e que têm atingido milhares de estudantes e profissionais da educação. Atribuições principais: Manutenção de Design System utilizada por diferentes times, implementação de novos módulos e funcionalidades, correção de bugs e otimizações de segurança, performance e acessibilidade.',
    },
    skills: [
      'React',
      'Javascript',
      'Typescript',
      'Next.js',
      'Chakra UI',
      'Storybook',
      'Figma',
      'Bitbucket',
      'GitLab',
      'Postman',
      'Jira',
    ],
  },
  {
    company: {
      en_us: 'Aconcaia',
      pt_br: 'Aconcaia',
    },
    role: {
      en_us: 'Web Developer',
      pt_br: 'Desenvolvedor Web',
    },
    period: {
      en_us: 'APR 2024 - SEP 2024',
      pt_br: 'ABR 2024 - SET 2024',
    },
    description: {
      en_us:
        'Experience at Aconcaia, a B2B agency focused on process optimization to increase conversions and improve sales team efficiency. During this period, I was responsible for developing SEO-optimized websites and templates with a focus on performance',
      pt_br:
        'Atuação na Aconcaia, agência B2B com enfoque na otimização de processos para aumentar conversões e melhorar a eficiência de equipes de vendas. Durante este período, fui responsável pelo desenvolvimento de websites e templates com foco em SEO e performance',
    },
    skills: ['HTML', 'CSS', 'Javascript/JQuery', 'PHP', 'WordPress', 'HubL'],
  },
  {
    company: {
      en_us: 'OCCAM Engineering',
      pt_br: 'OCCAM Engenharia',
    },
    role: {
      en_us: 'Junior Developer',
      pt_br: 'Desenvolvedor Júnior',
    },
    period: {
      en_us: 'SEP 2022 - MAR 2024',
      pt_br: 'SET 2022 - MAR 2024',
    },
    description: {
      en_us:
        'Key Responsibilities: Collaborate with clients to define project objectives and requirements, design interface prototypes using Figma, and develop web applications with development team, ensuring solutions align with client expectations and needs.',
      pt_br:
        'Atribuições: Entrar em contato com clientes para definir escopos e requisitos, criar protótipos de interfaces com Figma e desenvolver aplicações web em colaboração com a equipe, garantindo alinhamento entre necessidades dos clientes e soluções propostas.',
    },
    skills: ['Figma', 'React', 'Javascript', 'Typescript', 'Next.js', 'GitHub'],
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
        'I started my career as a freelancer in projects involving design, editing, and motion. During this period, I was responsible for producing graphic materials and audiovisual solutions for products, events, and advertising campaigns.',
      pt_br:
        'Iniciei minha carreira como freelancer em projetos com design, edição e motion design. Durante este período, fui responsável pela produção de materiais gráficos e soluções audiovisuais para diversos produtos, eventos e campanhas publicitárias.',
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
export type IJobSkill = 'development' | 'design' | 'ux_design' | 'video_editing'

export interface IJobItem {
  name: IMultiLanguageText
  description: IMultiLanguageText
  imgSrc: string
  link: string
  skills?: IJobSkill[]
}

export const jobList: IJobItem[] = [
  {
    name: {
      en_us: 'PNLD Training',
      pt_br: 'PNLD Formação',
    },
    description: {
      en_us:
        'Component of the National Book and Didactic Material Program (PNLD), aimed at qualifying education professionals and management teams to promote quality learning.',
      pt_br:
        'Componente do Programa Nacional do Livro e do Material Didático (PNLD), destinado à qualificar os profissionais e equipes gestoras da educação para que promovam uma aprendizagem de qualidade.',
    },
    imgSrc: '',
    link: '',
    skills: ['development'],
  },
  {
    name: {
      en_us: 'Present Management',
      pt_br: 'Gestão Presente',
    },
    description: {
      en_us:
        'Education hub developed to centralize the management of data and information on Basic Education in Brazil, containing data from more than 7 million students from public schools.',
      pt_br:
        'Hub de educação desenvolvido para centralizar a gestão de dados e informações da Educação Básica no Brasil, contendo dados de mais de 7 milhões de alunos de escolas públicas.',
    },
    imgSrc: '',
    link: '',
    skills: ['development'],
  },
  {
    name: {
      en_us: 'Treasure Map',
      pt_br: 'Mapa do Tesouro',
    },
    description: {
      en_us:
        'Application designed for events, where participants are invited to explore booths using an interactive map. By scanning QR Codes hidden in the booths, users advance on their journey until they reach the final treasure location.',
      pt_br:
        'Aplicação projetada para eventos, em que os participantes são convidados a explorar os estandes usando um mapa interativo. Ao escanear QR Codes escondidos nos estandes, os usuários avançam em sua jornada até alcançar a localização do tesouro final.',
    },
    imgSrc: '',
    link: '',
    skills: ['development', 'ux_design'],
  },
  {
    name: {
      en_us: 'Portfolio',
      pt_br: 'Portifólio',
    },
    description: {
      en_us:
        'My personal portfolio developed with React, Vite, TailwindCSS, Framer Motion, and hosted on Vercel.',
      pt_br:
        'Meu portifólio pessoal desenvolvido com React, Vite, TailwindCSS, Framer Motion e hospedado na Vercel.',
    },
    imgSrc: '',
    link: '',
    skills: ['development', 'ux_design'],
  },
  {
    name: {
      en_us: 'Stand',
      pt_br: 'Stand',
    },
    description: {
      en_us:
        'Application prototype developed with the purpose of helping women in the fight against abuse and domestic violence.',
      pt_br:
        'Protótipo de aplicação desenvolvida com o intuito de auxiliar mulheres na luta contra o abuso e violência doméstica.',
    },
    imgSrc: '',
    link: '',
    skills: ['ux_design'],
  },
]

export const EMAIL_ADDRESS = 'luiz.1303@hotmail.com'
