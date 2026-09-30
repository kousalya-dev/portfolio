// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Kousalya Sathyamoorthy',
  title: 'Full-Stack Developer',
  roles: [
    'Full-Stack Developer',
    'Node.js Backend Engineer',
    'React.js Builder',
    'Module Lead',
    'Performance Optimizer',
  ],
  yoe: '4.4',
  location: 'Chennai, India',
  email: 'kousalya.contact@gmail.com',
  github: 'https://github.com/kousalya-dev',
  // Paste your LinkedIn profile URL here — the link appears automatically once it's set.
  linkedin: '',
  resume: '/Kousalya_Sathyamoorthy_Resume.pdf',
  status: 'Immediate joiner · open to opportunities',
  summary:
    'I build the parts of software people never see but always feel — fast APIs, reliable data pipelines and clean React interfaces. Promoted to Module Lead in under two years, I like owning a feature from database schema to pixel.',
}

export const stats = [
  { value: 4.4, decimals: 1, suffix: '+', label: 'Years of experience' },
  { value: 70, suffix: '%', label: 'Faster data processing' },
  { value: 60, suffix: '%', label: 'Better API accuracy' },
  { value: 3, suffix: ' wks', label: 'To a bug-free v2' },
]

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Incedo',
    place: 'Chennai',
    period: 'Oct 2025 – Feb 2026',
    points: [
      'Designed and developed backend services in Node.js, building RESTful APIs for packet-loss monitoring and telecom data analysis systems.',
      'Built validation scripts and conditional processing modules in modern JavaScript (ES6+), improving reliability and cutting operational effort.',
    ],
    tags: ['Node.js', 'JavaScript', 'React', 'REST APIs', 'Git'],
  },
  {
    role: 'Senior Software Developer · Module Lead',
    company: 'Unifo Private Ltd',
    place: 'Chennai',
    period: 'Aug 2022 – Oct 2025',
    points: [
      'Led end-to-end development of the Audit Report, Warehouse Master and E-Waybill modules — React.js on the front, Node.js on the back, MongoDB for data modeling and querying.',
      'Implemented AJV schema validation and moved heavy data processing onto Node.js worker threads: 60% better API accuracy and 70% less processing time.',
      'Kept quality high with Jest tests and GitHub Actions CI/CD pipelines.',
    ],
    highlights: [
      'Promoted to Module Lead within 2 years for leadership, ownership and consistent on-time delivery.',
      'Led version 2 of my module and made it bug-free within 3 weeks.',
      'Trusted with the Warehouse Master module the following year.',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Jest', 'GitHub Actions', 'Agile'],
  },
  {
    role: 'Java Full Stack Developer — Intern',
    company: 'SmartCliff Solutions',
    place: 'Coimbatore',
    period: 'Nov 2021 – Jul 2022',
    points: [
      'Built a full-stack alumni database management mini project with Java and Oracle DB, with both console and web interfaces.',
    ],
    tags: ['Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
]

export const skills = [
  {
    title: 'Languages',
    icon: '{ }',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'SQL'],
  },
  {
    title: 'Frontend & Backend',
    icon: '</>',
    items: ['React.js', 'Node.js', 'Express', 'Hapi.js', 'RESTful APIs', 'JWT Auth', 'HTML / CSS'],
  },
  {
    title: 'Data',
    icon: '◈',
    items: ['MongoDB', 'MySQL', 'Oracle DB'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    items: ['AWS S3', 'EFS', 'CloudWatch', 'SNS', 'CDK', 'SDK', 'GuardDuty', 'Docker', 'GitHub Actions', 'Git', 'Jest'],
  },
]

export const projects = [
  {
    title: 'Meta Leads CRM',
    blurb:
      'A Next.js app that pulls Facebook & Instagram Lead Ad submissions straight into a live leads table. A webhook verifies Meta’s signature, fetches lead details from the Graph API and stores them — with manual entry and 10-second auto-refresh.',
    tags: ['Next.js', 'TypeScript', 'Webhooks', 'Graph API'],
    link: 'https://github.com/kousalya-dev/meta-leads-crm',
    accent: 'violet',
  },
  {
    title: 'Fabric Shade & Design Identifier',
    blurb:
      'Frontend for a fabric pattern and shade identification system: image upload, result display and voice output so results can be heard, not just read.',
    tags: ['React', 'JavaScript', 'Image upload', 'Voice output'],
    link: 'https://github.com/kousalya-dev',
    accent: 'cyan',
  },
  {
    title: 'Expense Tracker',
    blurb:
      'Clean React expense tracker: add income and expenses, categorise them and watch balance, income and spending update in real time.',
    tags: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/kousalya-dev/expense-tracker',
    accent: 'lime',
  },
]

export const education = {
  school: 'Dr. N.G.P Institute of Technology',
  place: 'Coimbatore',
  degree: 'B.Tech — Information Technology',
  period: 'Jun 2018 – Apr 2022',
  grade: 'CGPA 7.5',
}
