import { MdEmail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

export const OTHER_SKILL = [
  'HTML',
  'CSS',
  'Tailwindcss',
  'MUI',
  'Firebase Authentication',
  'Line Chatbot',
  'Dialogflow',
  'NextAuth',
  'Jira',
  'Framer Motion',
]

export const LANGUAGE_SKILL = ['TypeScript', 'JavaScript', 'PHP', 'Python']

export const FRAMEWORK_AND_LIBS_SKILL = [
  'React',
  'Next.js',
  'Node.js',
  'Nest.js',
  'Express.js',
  'Pandas',
]

export const DATABASE_SKILL = [
  'MySQL',
  'MongoDB',
  'PostgreSQL',
  'Firestore Database',
  'Prisma',
]

export const VERSION_CONTROL_SKILL = ['Git', 'GitHub', 'GitLab']

export const SHOWCASE = [
  {
    image: '/assets/images/tasks-management-thumbnail.png',
    title: 'Tasks Management',
    href: '/projects?name=tasks-management',
  },
  {
    image: '/assets/images/netflix-thumbnail.png',
    title: 'Netflix Clone',
    href: '/projects?name=netflix-clone',
  },
  {
    image: '/assets/images/twitter-thumbnail.png',
    title: 'Twitter Clone',
    href: '/projects?name=twitter-clone',
  },
  {
    image: '/assets/images/line-chat-bot-thumbnail.png',
    title: 'PFT Chat bot',
    href: '/projects?name=pft-chat-bot',
  },
  {
    image: 'https://via.placeholder.com/400x400',
    title: 'Project 5',
    href: '/',
  },
]

export const CONTACTS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/TongThanaphon42',
    icon: FaFacebook,
    type: 'facebook',
  },
  {
    label: 'GitHub 1',
    href: 'https://github.com/TongThanaphon',
    icon: FaGithub,
    type: 'github',
  },
  {
    label: 'GitHub 2',
    href: 'https://github.com/TK3096',
    icon: FaGithub,
    type: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:tongthanaphon.tk@gmail.com',
    icon: MdEmail,
    type: 'email',
  },
]
