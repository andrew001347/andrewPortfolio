export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects',
      href: '#projects',
    },
    {
      id: 4,
      name: 'Case Study',
      href: '#case',
    },
    {
      id: 5,
      name: 'Contact',
      href: '#contact',
    },

    {
      id: 6,
      name: 'Resume',
      href: '/assets/resume.jpg', 
      target: '_blank',    
      rel: 'noopener noreferrer', 
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'News Radar',
      desc: 'This Android application allows users to stay informed and up-to-date content curated to users. Users are able to customize their news feed to reflect their preferences and interests by getting news based on user\'s keywords. Users are also able to get news from specific subreddits and/or twitter users.',
      subdesc:
        'Built with Kotlin',
      href: 'https://play.google.com/store/apps/details?id=com.bignerdranch.android.newsapp',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project1icon.webp',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Kotlin',
          path: '/assets/kotlinicon.svg',
        },
        {
          id: 2,
          name: 'andriod',
          path: '/assets/android.svg',
        },
      ],
    },
    {
      title: 'SyncSchedule',
      desc: 'SyncSchedule is a scheduling platform designed to streamline the coordination of events and appointments with ease and efficiency. Users are able to personalize their calendars to organize tasks and commitments. Users can not only manage their schedules but also collaborate effectively with others. An integrated chat system enables direct communication within the platform, facilitating real-time discussions and coordination among team members or group participants.',
      subdesc:
        'Built with HTML, CSS, JavaScript',
      href: 'https://github.com/CS4800-Code-G/Calendar',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/syncschedule.jpg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'HTML icon',
          path: '/assets/html.png',
        },
        {
          id: 2,
          name: 'CSS icon',
          path: 'assets/css.png',
        },
        {
          id: 3,
          name: 'JavaScript icon',
          path: '/assets/javascript.png',
        },
      
      ],
    },
    {
      title: 'Cybersecurity VR Project',
      desc: 'A virtual reality simulation of scenarios where players are faced with common social engineering tactics. The purpose of this VR game is to train players to spot and pick appropriate actions to take when confronted with deceptive techniques aimed at manipulating them into divulging sensitive information or performing unauthorized actions. Through immersive experiences, players will learn to recognize red flags, assess risks, and make informed decisions to safeguard themselves against the dangers of social engineering. With interactive decision-making, players will navigate various scenarios, honing their cybersecurity skills in a engaging environment.',
      subdesc:
        'Built with C#, Unity',
      href: 'https://www.youtube.com/watch?v=d75T7h4YUA0',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/cyber-security.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'C#',
          path: '/assets/c.svg',
        },
        {
          id: 2,
          name: 'Unity',
          path: '/assets/unity.svg',
        },
      ],
    },
    {
      title: 'We Play Tanks! Tanks!',
      desc: 'A recreation of the popular Wii game, Wii Play - Tanks! Instead of utilizing the Wii console itself, players will now be able to play with their PCs. Incorporating similar environments and enemies, players will be able to relive their childhood game.   ​',
      subdesc:
        'Built with C#, Unity',
      href: 'https://emergencyplayer.itch.io/we-play-tanks-tanks',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/tanks.jpg',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'C#',
          path: '/assets/c.svg',
        },
        {
          id: 2,
          name: 'Unity',
          path: '/assets/unity.svg',
        },
      ],
    },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };



  export const caseStudy = [
    {
      id: 1,
      title: "News Radar",
      description: "Customizable news app on Google Play Store",
      role: "UX Designer",
      duration: "3 months",
      tools: ["KotLin", "LucidChart"],
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "This project focused on creating an interactive prototype for a mobile application.",
      role: "Researcher",
      duration: "2 months",
      tools: ["Sketch", "InVision", "Notion"],
      image: "https://via.placeholder.com/400x300",
    },
    // {
    //   id: 3,
    //   title: "Project Title 3",
    //   description: "An ecommerce platform redesign aimed to improve user flow and increase conversions.",
    //   role: "UI Designer",
    //   duration: "4 months",
    //   tools: ["Figma", "Zeplin", "Google Analytics"],
    //   image: "https://via.placeholder.com/400x300",
    // },
  
    
  ];



  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];



