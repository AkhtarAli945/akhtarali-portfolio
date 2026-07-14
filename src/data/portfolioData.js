// ============================================================
// Central content file — edit YOUR info here. Components read
// from this file, so you rarely need to touch component code.
// ============================================================

export const personalInfo = {
  name: 'Akhtar Ali',
  title: 'MERN Stack & Agentic AI Engineer',
  location: 'Karachi, Pakistan.', // update to your city if you want it public
  email: 'akhtardahri945@gmail.com',
  phone: '+092-3083878494',
  resumeUrl: '/Akhtar_Ali_CV.pdf',
  social: {
    github: 'https://github.com/AkhtarAli945',
    linkedin: 'https://linkedin.com/in/akhtarali-mern',
    twitter: 'https://twitter.com/',
    email: 'akhtardahri945@gmail.com',
  },
}

export const heroContent = {
  badge: 'MERN Stack & Agentic AI Engineer',
  headlineLines: ['Building AI Agents &', 'Scalable Web', 'Experiences'],
  description:
    'I build production-ready AI agents, multi-agent systems, RAG applications, and scalable full-stack platforms using MERN stack and modern AI technologies.',
  floatingBadges: [
    { id: 'mern', title: 'MERN Stack', icon: 'Box', position: 'top-left' },
    { id: 'rag', title: 'RAG System', subtitle: 'Retrieval Augmented Generation', icon: 'Search', position: 'mid-left' },
    { id: 'ai-agents', title: 'AI Agents', subtitle: 'Autonomous Intelligent', icon: 'Bot', position: 'top-right' },
    { id: 'multi-agent', title: 'Multi-Agent', subtitle: 'Collaborative Intelligent Scalable', icon: 'Users', position: 'mid-right' },
    { id: 'vector-db', title: 'Vector DB', subtitle: 'Pinecone Weaviate ChromaDB', icon: 'Database', position: 'bottom-right' },
  ],
}

export const stats = [
  { id: 1, value: '15+', label: 'AI Solutions Delivered', icon: 'Rocket' },
  { id: 2, value: '20+', label: 'Full Stack Projects', icon: 'Code2' },
  { id: 3, value: '1+', label: 'Years of Experience', icon: 'Briefcase' },
  { id: 4, value: '100K+', label: 'AI Workflow Executions', icon: 'Users' },
]

export const aboutMe = {
  paragraphs: [
    "I'm a MERN Stack and Agentic AI Engineer passionate about building intelligent systems that can reason, plan and execute tasks autonomously.",
    'My expertise includes full-stack web development with React, Node.js, Express and MongoDB along with modern AI technologies like LangGraph, LangChain, OpenAI, RAG, Vector Databases and Multi-Agent Systems.',
  ],
}

export const skills = {
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'WebSockets'],
  'Agentic AI': ['LangGraph', 'LangChain', 'OpenAI', 'RAG', 'AI Agents', 'MCP', 'Prompt Eng.'],
  Database: ['MongoDB', 'PostgreSQL', 'Redis', 'Pinecone', 'Weaviate'],
}

export const projects = [
  {
    id: 'doctor-appointment',
    title: 'Doctor Appointment System',
    description:
      'Full-stack healthcare platform for booking appointments, managing doctors, schedules and patient records.',
    image: '/src/assets/images/Doctor-Appointment-System.png',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/AkhtarAli945',
    liveUrl: 'https://doctor-appointment-system-mu-lemon.vercel.app',
  },
  {
    id: 'supportai',
    title: 'SupportAI — Agentic Customer Support SaaS',
    description:
      'Multi-tenant agentic customer support platform with an embeddable widget, real-time human handoff, and RAG-powered answers from a business\'s own knowledge base.',
    image: '/src/assets/images/supportai.png',
    tags: ['LangGraph', 'Groq', 'RAG', 'Node.js', 'Socket.IO'],
    githubUrl: 'https://github.com/AkhtarAli945/supportai',
    liveUrl: 'https://supportai-virid.vercel.app',
  },
  {
    id: 'travel-ai',
    title: 'Multi-Agent AI Travel System',
    description:
      'Autonomous travel assistant using multiple AI agents for research, planning, recommendations and itinerary generation.',
    image: 'src/assets/images/Ai-Travel-Planner.png',
    tags: ['LangGraph', 'OpenAI', 'RAG', 'React'],
    githubUrl: 'https://github.com/AkhtarAli945',
    liveUrl: 'https://tripmind-ai-sigma.vercel.app',
  },
]

export const experience = [
  {
    id: 1,
    role: 'MERN Stack & Agentic AI Engineer',
    company: 'Freelance / Startup Projects',
    period: '2025 - Present',
    description:
      'Building AI agents, RAG systems, multi-agent architectures and scalable full-stack applications.',
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Software Development',
    period: '2024 - 2025',
    description:
      'Developed responsive web applications, REST APIs and integrated third-party services for clients.',
  },
]

export const testimonials = [
  {
    id: 1,
    quote:
      'Exceptional engineer with deep knowledge of both full-stack development and AI. Delivered a multi-agent system that exceeded our expectations.',
    name: 'Sarah Johnson',
    role: 'Product Manager, TechCorp',
    avatar: '/src/assets/images/avatar-sarah.jpg',
    rating: 5,
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]
