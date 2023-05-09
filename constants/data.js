const userData = {
  githubUsername: 'codinglau',
  name: 'Raymond Lau',
  designation: 'Software Developer',
  avatarUrl: '/images/profile.jpeg',
  email: 'codinglau@gmail.com',
  phone: '+886 000-000-000',
  address: 'Taiwan',
  pages: [
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Experience',
      href: '/experience',
    },
    // {
    //   name: 'Contact',
    //   href: '/contact',
    // },
  ],
  skills: [
    {
      name: 'JavaScript',
      href: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png',
    },
    {
      name: 'HTML5',
      href: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png',
    },
    {
      name: 'CSS3',
      href: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png',
    },
    {
      name: 'React',
      href: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
    },
    {
      name: 'Vue',
      href: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png',
    },
    {
      name: 'Python',
      href: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png',
    },
    {
      name: 'Docker',
      href: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png',
    },
    {
      name: 'Git',
      href: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png',
    },
  ],
  projects: [
    {
      title: 'Bus App (On-going)',
      link: 'https://codinglau.github.io/bus-app/',
      imgUrl: '/images/projects/bus-app.png',
    },
    {
      title: 'Online Catalogue (For demo only)',
      link: 'https://closethighwaydemo.lncmac.com.tw/',
      imgUrl: '/images/projects/online-catalogue.png',
    },
    // {
    //   title: 'Portfolio',
    //   link: 'https://manuarora.in',
    //   imgUrl: '/portfolio.png',
    // },
    // {
    //   title: 'CovidRescue',
    //   link: 'https://covidrescue.co.in',
    //   imgUrl: '/covidrescue.png',
    // },
    // {
    //   title: 'Algochurn',
    //   link: 'https://algochurn.com',
    //   imgUrl: '/algochurn.png',
    // },
    // {
    //   title: 'Playground',
    //   link: 'https://play.placeholdertech.in',
    //   imgUrl: '/playground.png',
    // },
    // {
    //   title: 'Feedmeback',
    //   link: 'https://feedmeback.vercel.app',
    //   imgUrl: '/feedmeback.png',
    // },
    // {
    //   title: 'Devmedium',
    //   link: 'https://devmedium.vercel.app',
    //   imgUrl: '/devmedium.png',
    // },
  ],
  about: {
    title:
      "I'm a software developer who is passionate about programming and building applications that people would find useful",
    description: [
      `Hello there! This is Raymond, currently working as a Front-end Developer at LNC Technology Co., Ltd. It really took me quite a while to get here since I first fell in love with programming during my freshman year in university. This is definitely a dream come true for me.`,
      `Thanks to the participation in the Full-stack Engineer Course held by National Chung Hsing University, I had equipped myself with a solid foundation in web development (e.g. HTML5, CSS3, RWD, JavaScript, Laravel, etc.). They had helped me to land my current job. I'm really grateful for that.`,
      `After joining LNC, I have been able to add more skills to my tool belt by working on various projects, e.g. MES, WMS, eFinance system, etc., and mobile applications, e.g. factory dashboard app and machine controller app, etc. using Vue.js (2 and 3) and Flutter (Dart).`,
      `However, this is just the beginning of my developer journey. To continue to add more skills, I'm self-learning Docker, React.js and Next.js.`,
      `In addition to web development, I'm currently studying machine learning, deep learning, data mining, data visualization, etc. in the Master program of Artificial Intelligence and Data Science at National Chung Hsing University. Hopefully one day I can make use of these skills to continue to build applications that people would find useful.`,
    ],
    currentProject: 'Transportation APP',
    currentProjectUrl: 'https://github.com/codinglau/transportation-app',
  },
  experience: [
    {
      title: 'Front-end Developer (Currently working)',
      company: 'LNC Technology Co., Ltd.',
      year: '2021 - Present',
      companyLink: '#',
      desc: 'Responsible for developing and maintaining systems, e.g. MES, WMS, eFinance, etc., and mobile applications, e.g. factory dashboard app and machine controller app, etc. using Vue (2 and 3) and Flutter (Dart).',
    },
    {
      title: 'Master of Artificial Intelligence and Data Science (Currently studying)',
      company: 'National Chung Hsing University',
      year: '2021 - Present',
      companyLink: '#',
      desc: 'Studying machine learning, deep learning, data mining, data visualization, etc.',
    },
    {
      title: 'Full-stack Engineer Course (a 3-month full-time course)',
      company: 'National Chung Hsing University',
      year: '2021',
      companyLink: '#',
      desc: 'Had decided to pursue my dream of becoming a software developer. Learned a lot about web development (e.g. HTML5, CSS3, RWD concepts, Bootstrap, Laravel) and had a lot of fun with my classmates.',
    },
    {
      title: 'Social Compliance Officer',
      company: 'Birgma Asia Trading Ltd. (Taiwan)',
      year: '2020 - 2021',
      companyLink: '#',
      desc: 'Had helped lots of foreign workers to get back their passports which were held by their employers illegally.',
    },
    {
      title: 'Responsible Specialist',
      company: 'Tesco International Sourcing Ltd.',
      year: '2017 - 2019',
      companyLink: '#',
      desc: 'Had written a simple Excel formula to help the team to easily calculate the maximum number of consecutive working days for each worker from their attendance records.',
    },
    {
      title: 'Assistant Social Compliance Officer',
      company: 'Hongkong Sales (Knitwear) Ltd.',
      year: '2016 - 2017',
      companyLink: '#',
      desc: 'Had written a simple program to help the company to automatically generate weekly production reports using VBA.',
    },
    {
      title: 'Research Assistant',
      company: 'Hong Kong University of Science and Technology',
      year: '2015 - 2016',
      companyLink: 'https://ust.hk',
      desc: 'Helped an air freight company to analyze their data and study the impact of the reduction of their temporary storage space in the apron.',
    },
    {
      title: 'Worked and Travelled in Australia',
      company: 'Australia',
      year: '2014 - 2015',
      companyLink: '#',
      desc: 'Broadened my horizons and learned a lot about life and people. Got the chance to practice my English.',
    },
    {
      title: 'Research Assistant',
      company: 'Hong Kong University of Science and Technology',
      year: '2011 - 2013',
      companyLink: 'https://ust.hk',
      desc: 'Helped a shuttle bus company to computerize their operations, e.g. scheduling, ticketing, etc.',
    },
    {
      title: 'Bachelor of Industrial Engineering and Logistics Management',
      company: 'Hong Kong University of Science and Technology',
      year: '2008 - 2011',
      companyLink: 'https://ust.hk',
      desc: "Had taken courses on C++ and MySQL and found them really fascinating. Had been dreaming of becoming a software developer since then.",
    },
  ],
  resumeUrl:
    'https://drive.google.com/file/d/1xmE3BOmgM7TAOOgVp36xQIQvYDntDYoo/view?usp=sharing',
  socialLinks: [
    {
      name: 'GitHub',
      href: 'https://github.com/codinglau',
      icon: 'bi bi-github',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/raylkw',
      icon: 'bi bi-linkedin',
    },
  ],
};

export default userData;