export const content = {
  name: { first: 'Gopikrishnan', last: 'Balagopal' },
  tagline: 'Full-stack developer · Kerala, India',
  intro: 'I turn messy product problems into features that just work. Currently building at Cooee.',
  bio: "23, based in Kerala. I'm a full-stack engineer at Cooee, working across calling, payments and customer support — mostly Go on the backend and React on the front. I like owning a feature from the first API question to the deploy, and shipping things that actually work.",
  email: 'gopikrishnanb2003@gmail.com',
  github: 'https://github.com/Gopi-krishnan-77',
  linkedin: 'https://linkedin.com/in/gopikrishnanbalagopal',

  experience: [
    {
      company: 'Cooee',
      role: 'Graduate Software Engineer · Full Stack',
      period: 'Sept 2025 – Present',
      current: true,
      bullets: [
        'Own the Cooee Business web app — onboarding, team management, usage dashboards and payments — from first prototype to live deploy',
        'Owned our move to a new customer support platform end to end — backend, web app, ticket migration and cutover — with a one-switch rollback if anything goes wrong',
        'Built in-app support chat with real-time updates, plus agent tooling that puts a customer\'s account and call history in front of support, so issues get resolved faster',
        'Built calling features — international calling over WebRTC, call forwarding, subscriptions and auto top-ups',
        'Owned major frontend modules in React, Next.js, Tailwind and Firebase',
        'Led the marketing site move from WordPress to Next.js with a headless CMS, country-specific pages, SEO improvements and GA4 tracking',
      ],
    },
    {
      company: 'Benfi Consultants Pte Ltd',
      role: 'Software Developer Intern',
      period: 'Jul 2024 – Nov 2024',
      current: false,
      bullets: [
        'Built and optimised backend APIs using Django for internal business intelligence workflows',
        'Evaluated LLMs (Qwen series) for automating analytics and reporting workflows',
        'Contributed to early prototypes of an AI-driven home assistant',
      ],
    },
    {
      company: 'Intel Unnati',
      role: 'Industrial Trainee',
      period: '2023',
      current: false,
      bullets: [
        'Selected for Intel\'s industry-academia training programme',
        'Worked on a guided industrial project applying ML and systems concepts to real-world problem statements',
      ],
    },
    {
      company: 'EXCEL Saintgits',
      role: 'Treasurer',
      period: '2024 – 2025',
      current: false,
      bullets: [
        'Managed financial operations and budgeting for the student technical association',
        'Coordinated cross-department technical events and ensured smooth on-ground execution',
      ],
    },
  ],

  projects: [
    {
      id: 'callcheck',
      title: 'CallCheck',
      subtitle: 'Is your network ready for VoIP?',
      description: 'A free in-browser tool that tests latency, jitter, packet loss and MOS score. Built from real WebRTC experience at Cooee.',
      metrics: [
        { label: 'Latency', value: 24, suffix: 'ms', decimals: 0 },
        { label: 'Jitter', value: 3.2, suffix: 'ms', decimals: 1 },
        { label: 'Packet Loss', value: 0.4, suffix: '%', decimals: 1 },
        { label: 'MOS Score', value: 4.5, suffix: '', decimals: 1 },
      ],
      cta: { label: 'Visit site →', href: 'https://callcheck.gopikrishnanb.co.in' },
    },
    {
      id: 'decarb',
      title: 'DeCarb',
      subtitle: 'Carbon credit marketplace',
      description: 'Decentralised platform for transparent carbon credit trading. Web3Auth wallet onboarding, Razorpay fiat payments, Toucan-based retirement certificates.',
      awards: ['🏆 Finalist — SIGHT 2.0', '🏆 Runner-up — BlockHash LIVE'],
      stack: ['Next.js', 'Solidity', 'Web3Auth', 'Razorpay'],
      github: 'https://github.com/DeCarb-Marketplace',
    },
    {
      id: 'tedx',
      title: 'TEDx Saintgits',
      description: 'Official TEDx event site — responsive UI and ticketing workflows.',
      stack: ['Next.js', 'Firebase'],
      github: 'https://github.com/basilrari/tedxsaintgits',
    },
    {
      id: 'alerteye',
      title: 'AlertEye',
      description: 'Real-time driver drowsiness detection using facial landmark detection and OpenCV.',
      stack: ['Python', 'OpenCV'],
      github: 'https://github.com/Gopi-krishnan-77/Alert-Eye',
    },
    {
      id: 'edufinease',
      title: 'EduFinEase',
      subtitle: 'Educational finance, simplified',
      description: 'Financial management system for educational institutions — student fee tracking, payment workflows, and reporting dashboards for admins and parents.',
      stack: ['React', 'Node.js', 'Firebase'],
      github: 'https://github.com/EduFinEase',
    },
    {
      id: 'kdrama',
      title: 'KDrama Insights',
      subtitle: 'Data-driven analytics dashboard',
      description: 'Analytics dashboard for Korean drama trends and viewer preferences. Python preprocessing pipelines feeding IBM Cognos visualisations to surface popularity patterns and audience demographics.',
      stack: ['Python', 'IBM Cognos', 'Data Analytics'],
      github: 'https://github.com/Gopi-krishnan-77/ibm-cognos',
    },
    {
      id: 'deex3',
      title: 'DeEx3 DAO',
      subtitle: 'Decentralised research collaboration',
      description: 'A DAO platform where researchers publish, peer-review, and collaborate transparently. Solidity smart contracts, IPFS storage, and Web3 wallet integration power a community-driven scientific commons.',
      stack: ['Solidity', 'React', 'Web3', 'IPFS'],
      github: 'https://github.com/orgs/DeEx3-DAO/repositories',
    },
  ],

  stack: [
    { group: 'Languages', items: ['Go', 'TypeScript', 'JavaScript', 'Python', 'Solidity'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'Redux', 'TanStack Query', 'Tailwind CSS'] },
    { group: 'Backend & data', items: ['Django', 'Express.js', 'PostgreSQL', 'WebSockets', 'WebRTC', 'BigQuery'] },
    { group: 'Platforms', items: ['Firebase', 'Auth0', 'Stripe', 'AWS Amplify', 'Cloudflare Workers', 'Sanity CMS', 'GA4'] },
  ],

  awards: [
    {
      icon: '🏆',
      title: 'Runner-up — Web3 for India 2030 Ideathon',
      sub: 'BlockHash LIVE, Kerala Blockchain Academy · 2023',
    },
    {
      icon: '🏆',
      title: 'Finalist — SIGHT 2.0',
      sub: 'UST Global Hackathon · 2024',
    },
    {
      icon: '📄',
      title: 'Research Publication — "Security in Metaverse"',
      sub: 'Springer CCIS, ICAISM 2025',
    },
    {
      icon: '🌐',
      title: 'Project Showcase — ETHIndia 2023',
      sub: 'India\'s biggest Ethereum hackathon',
    },
    {
      icon: '🎖️',
      title: 'Special Recognition Award',
      sub: 'Saintgits CSE Department — outstanding contributions',
    },
    {
      icon: '🏏',
      title: 'Captain — Saintgits College Cricket Team',
      sub: 'Led team to inter-college tournaments',
    },
  ],
}
