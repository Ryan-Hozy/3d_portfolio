import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sonepar,
    pbb,
    sigma,
    website1,
    jobit,
    tripguide,
    threejs,
    trendz,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Marketing Executive",
      company_name: "Trendz Empire",
      icon: trendz,
      iconBg: "#E6DEDD",
      date: "July 2019 - Oct 2019",
      points: [
        'Keep track of product ratings.',
        'Ensure smooth delivery of products to businesses.',
        'Maintain accurate stock counts and apply FIFO method in the warehouse.',
        'Oversee the flow of activities in the warehouse.',
        'Provide both pre-sales and after-sales services.'
      ],
    },
    {
      title: "Senior Sales & Marketing Executive",
      company_name: "Public Bank Berhad",
      icon: pbb,
      iconBg: "#E6DEDD",
      date: "May 2022 - March 2023",
      points: [
        'Successfully delivered 100% of the target within the probation period and continuously to achieve monthly targets.',
        'Proficient in comprehending and evaluating the range of financial products offered by the bank.',
        'Access current and historical market trends to inform strategic decision - making.',
        'Prepare concise reports on new information, communicating key insights to upper management.',
        'Collaborate with team leaders to devise effective marketing strategies.'
      ],
    },
    {
      title: "Master Data Specialist",
      company_name: "Sonepar",
      icon: sonepar,
      iconBg: "#E6DEDD",
      date: "April 2023 - May 2023",
      points: [
        'Provided expert assistance in cleansing and enrichment of supplier’s business data, ensuring a high standard of accuracy and reliability.',
        'Innovated and implemented streamlined automation processes for daily tasks, significantly boosting overall work efficiency and productivity. Successfully improved SLA performance by 50%, reducing average task completion time from 15 minutes to 7 minutes.',
        'Proficiently engaged in business reporting using advanced analytical tools, including Microsoft PowerBI and DataIku , to deliver insightful and visually compelling reports that supported strategic decision making.',
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Sigma School",
      icon: sigma,
      iconBg: "#E6DEDD",
      date: "May 2024 - Aug 2024",
      points: [
        'Developed and maintained web applications using React.js and related technologies during intensive bootcamp projects.',
        'Collaborated with cross-functional teams of fellow students, instructors, and mentors to create high-quality applications.',
        'Implemented responsive designs and ensured cross-browser compatibility across various projects.',
        'Participated in code reviews, both giving and receiving constructive feedback to enhance code quality and learning outcomes.'
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Tattoo Booking Website",
      description:
      "Web-based platform that enables users to create, view, and manage bookings for various services. The platform provides a seamless and responsive user experience, allowing users to securely authenticate, upload images, and interact with booking details in real-time.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "REST API",
          color: "blue-text-gradient",
        },
      ],
      image: website1,
      source_code_link: "https://github.com/Ryan-Hozy/tattoo-booking-system-v2",
    },
    {
      name: "Uber Clone",
      description:
        "Mobile app clone of Uber that allows users to request rides, manage payments, and track routes in real-time. The app integrates secure authentication, real-time backend services, payment processing, and interactive maps for a seamless transportation experience.",
        tags: [
          {
            name: "React Native",
            color: "blue-text-gradient",
          },
          {
            name: "Clerk",
            color: "pink-text-gradient",
          },
          {
            name: "Neon",
            color: "green-text-gradient",
          },
          {
            name: "Stripe",
            color: "blue-text-gradient",
          },
          {
            name: "Google Map",
            color: "pink-text-gradient",
          },
        ],
      image: jobit,
      source_code_link: "https://github.com/Ryan-Hozy/uber-clone",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };