import type { PersonalInfo, Stat, Service, Skill, Project, ExperienceItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'რეზი ბერიძე',
  title: 'Full Stack & React დეველოპერი',
  subtitle: 'ვქმნი თანამედროვე, სწრაფ და მომხმარებელზე მორგებულ ვებ აპლიკაციებს თანამედროვე ტექნოლოგიური სტეკით.',
  bioParagraphs: [
    'გამარჯობა! მე ვარ ვებ დეველოპერი, რომელსაც განსაკუთრებით უყვარს React ეკოსისტემით სუფთა, მოდულური და სწრაფი ვებ აპლიკაციების შექმნა.',
    'ჩემი მიზანია რთული ტექნიკური ამოცანების მარტივ, ელეგანტურ და მასშტაბირებად გადაწყვეტებად გარდაქმნა. დიდ ყურადღებას ვუთმობ კოდის სისუფთავეს, კომპონენტების მრავალჯერად გამოყენებას (Reusability) და UX დეტალებს.',
    'მუდმივად ვეცნობი უახლეს ტექნოლოგიურ ტენდენციებს და მზად ვარ საინტერესო გამოწვევებისთვის.'
  ],
  location: 'თბილისი, საქართველო',
  email: 'rezi.dev@example.com',
  phone: '+995 555 12 34 56',
  availability: 'ღია ვარ ახალი პროექტებისთვის',
  socials: [
    { name: 'GitHub', url: 'https://github.com', iconName: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', iconName: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', iconName: 'twitter' },
  ],
};

export const stats: Stat[] = [
  {
    id: '1',
    value: '3+',
    label: 'წლიანი გამოცდილება',
    iconName: 'calendar',
  },
  {
    id: '2',
    value: '25+',
    label: 'წარმატებული პროექტი',
    iconName: 'briefcase',
  },
  {
    id: '3',
    value: '99.9%',
    label: 'კმაყოფილი პარტნიორი',
    iconName: 'star',
  },
  {
    id: '4',
    value: '100%',
    label: 'სუფთა და მოდულური კოდი',
    iconName: 'code',
  },
];

export const services: Service[] = [
  {
    id: 'frontend',
    iconName: 'layout',
    title: 'Frontend დეველოპმენტი',
    description: 'თანამედროვე, ინტერაქციული და სწრაფი ინტერფეისების აგება React, Next.js და TypeScript-ის გამოყენებით.',
    features: [
      'კომპონენტზე დაფუძნებული არქიტექტურა',
      'სტეიტის ეფექტური მართვა (State Management)',
      'Single Page Applications (SPA)',
      'Cross-Browser თავსებადობა',
    ],
  },
  {
    id: 'responsive',
    iconName: 'smartphone',
    title: 'ადაპტიური დიზაინი (Responsive)',
    description: 'ნებისმიერ ეკრანზე (მობილური, ტაბლეტი, დესკტოპი) უნაკლოდ მორგებული და კომფორტული დიზაინი.',
    features: [
      'Mobile-First მიდგომა',
      'Pixel-Perfect განხორციელება',
      'სენსორულ ეკრანებზე მორგებული ინტერაქციები',
      'თანამედროვე Flexbox და CSS Grid',
    ],
  },
  {
    id: 'backend',
    iconName: 'server',
    title: 'Backend & REST API ინტეგრაცია',
    description: 'მონაცემთა ბაზებთან დაკავშირება, უსაფრთხო ავთენტიფიკაცია და მაღალსიჩქარიანი API სერვისები.',
    features: [
      'Node.js & Express არქიტექტურა',
      'RESTful & GraphQL API ინტეგრაცია',
      'JWT და OAuth ავთენტიფიკაცია',
      'მონაცემთა ვალიდაცია და უსაფრთხოება',
    ],
  },
  {
    id: 'optimization',
    iconName: 'zap',
    title: 'წარმადობის ოპტიმიზაცია',
    description: 'საიტის ჩატვირთვის სისწრაფის გაზრდა, SEO მაჩვენებლების გაუმჯობესება და კოდის ოპტიმიზაცია.',
    features: [
      'Lighthouse 95+ ქულა',
      'Lazy Loading და Code Splitting',
      'Assets და სურათების ოპტიმიზაცია',
      'სუფთა და SEO მეგობრული სტრუქტურა',
    ],
  },
];

export const skills: Skill[] = [
  {
    name: 'React.js',
    category: 'Frontend',
    level: 95,
    iconName: 'code',
    description: 'Hooks, Context, Virtual DOM, Custom Hooks',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 90,
    iconName: 'code',
    description: 'Strict Typing, Interfaces, Generics',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    level: 95,
    iconName: 'zap',
    description: 'Async/Await, Closures, DOM, Modules',
  },
  {
    name: 'HTML5 & CSS3 / SCSS',
    category: 'Frontend',
    level: 95,
    iconName: 'layout',
    description: 'Flexbox, Grid, Animations, Responsive',
  },
  {
    name: 'Node.js & Express',
    category: 'Backend',
    level: 80,
    iconName: 'server',
    description: 'REST APIs, Middleware, Routing',
  },
  {
    name: 'PostgreSQL & MongoDB',
    category: 'Backend',
    level: 75,
    iconName: 'database',
    description: 'CRUD, Queries, Data Modeling',
  },
  {
    name: 'Git & GitHub',
    category: 'Tools & DevOps',
    level: 90,
    iconName: 'github',
    description: 'Version Control, Branching, Pull Requests',
  },
  {
    name: 'Vite & Webpack',
    category: 'Tools & DevOps',
    level: 85,
    iconName: 'terminal',
    description: 'Build Tools, Hot Module Replacement',
  },
  {
    name: 'Figma to Code',
    category: 'Design & Other',
    level: 90,
    iconName: 'palette',
    description: 'Design Systems, Component Libraries',
  },
  {
    name: 'REST & GraphQL APIs',
    category: 'Backend',
    level: 85,
    iconName: 'globe',
    description: 'Axios, Fetch, API Architecture',
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'E-Commerce ონლაინ მაღაზია',
    description: 'თანამედროვე ელექტრონული კომერციის პლატფორმა კალათით, ფილტრაციით, გადახდის სისტემითა და მომხმარებლის კაბინეტით.',
    longDescription: 'სრული ფუნქციონალის მქონე ონლაინ მაღაზიის პლატფორმა. სისტემა მოიცავს პროდუქტების კატალოგს მრავალდონიანი ფილტრაციით, კალათას, Stripe გადახდის სისტემას, მომხმარებლის ავთენტიფიკაციასა და შეკვეთების ისტორიას.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    features: [
      'Stripe უსაფრთხო გადახდის ინტეგრაცია',
      'სწრაფი ძიება და ფილტრაცია კატეგორიების/ფასის მიხედვით',
      'Redux Toolkit-ზე დაფუძნებული კალათის ლოგიკა',
      'ადმინ პანელი პროდუქტების სამართავად',
    ],
    demoUrl: 'https://example.com/ecommerce-demo',
    githubUrl: 'https://github.com/example/ecommerce-app',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Project Management Dashboard',
    description: 'პროექტებისა და დავალებების სამართავი დაშბორდი Kanban დაფით, დროის აღრიცხვითა და გრაფიკებით.',
    longDescription: 'ინტერაქტიული და მძლავრი სამართავი პანელი გუნდური მუშაობისთვის. საშუალებას აძლევს მომხმარებლებს შექმნან დავალებები, გადააადგილონ Drag & Drop ფუნქციონალით, აკონტროლონ ვადები და მიიღონ ანალიტიკა.',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'Charts.js', 'CSS Modules'],
    features: [
      'Drag-and-Drop Kanban დაფა',
      'დეტალური გრაფიკები და პროგრესის ანალიტიკა',
      'დავალებების პრიორიტეტები და ვადები (Deadlines)',
      'სრული ადაპტაცია პლანშეტებსა და მობილურებზე',
    ],
    demoUrl: 'https://example.com/dashboard-demo',
    githubUrl: 'https://github.com/example/pm-dashboard',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Crypto & Finance Tracker',
    description: 'კრიპტოვალუტის ფასების რეალურ დროში მონიტორინგის აპლიკაცია ინტერაქციული გრაფიკებითა და კონვერტერით.',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'CoinGecko API', 'Recharts', 'Tailwind'],
    demoUrl: 'https://example.com/crypto-demo',
    githubUrl: 'https://github.com/example/crypto-tracker',
  },
  {
    id: 'proj-4',
    title: 'AI Prompt Builder & Chat',
    description: 'ხელოვნური ინტელექტის ინტერფეისი გენერაციული მოდელების მართვისთვის, ისტორიის შენახვითა და ექსპორტით.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'OpenAI API', 'Express', 'MongoDB'],
    demoUrl: 'https://example.com/ai-chat-demo',
    githubUrl: 'https://github.com/example/ai-chat',
    featured: true,
  },
  {
    id: 'proj-5',
    title: 'ამინდის პროგნოზის აპლიკაცია',
    description: 'გეოლოკაციაზე დაფუძნებული ამინდის აპლიკაცია 7-დღიანი პროგნოზით, დინამიური ფონებითა და რუკებით.',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'OpenWeatherMap API', 'Geolocation', 'CSS Grid'],
    demoUrl: 'https://example.com/weather-demo',
    githubUrl: 'https://github.com/example/weather-app',
  },
  {
    id: 'proj-6',
    title: 'ფოტოგრაფის პორტფოლიო და ბლოგი',
    description: 'მინიმალისტური, მაღალმხატვრული პორტფოლიოს საიტი გალერეით, ბლოგითა და ონლაინ ჯავშნის ფორმით.',
    category: 'Mobile / UI',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'Responsive', 'CSS Animations', 'Markdown'],
    demoUrl: 'https://example.com/photo-portfolio',
    githubUrl: 'https://github.com/example/photo-portfolio',
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2023 - დღემდე',
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Georgia',
    description: 'React და TypeScript-ის გამოყენებით მასშტაბირებადი ვებ აპლიკაციების შემუშავება, UI კომპონენტების ბიბლიოთეკის შექმნა და კოდის ოპტიმიზაცია.',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'REST API', 'Figma'],
  },
  {
    id: 'exp-2',
    period: '2021 - 2023',
    role: 'Frontend / React Developer',
    company: 'Digital Innovation Hub',
    description: 'მომხმარებელთა ინტერფეისების აგება, API ინტეგრაცია, რესპონსიული ვერსიების გამართვა და გუნდური პროექტების მართვა.',
    technologies: ['React', 'JavaScript', 'HTML5/SCSS', 'Git', 'Webpack'],
  },
  {
    id: 'exp-3',
    period: '2020 - 2021',
    role: 'Junior Web Developer',
    company: 'Freelance & Contract',
    description: 'საიტების დამზადება მცირე და საშუალო ბიზნესებისთვის, ლენდინგ გვერდები და მარტივი ვებ სერვისები.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'WordPress'],
  },
];

