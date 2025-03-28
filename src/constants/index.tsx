/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import { MenuItem } from '@/types';

/**
 * Assets
 */
import {
  ArrowBigDownDash,
  BetweenHorizonalEnd,
  Blocks,
  BrainCircuit,
  Building2,
  ChartArea,
  ChartPie,
  Code,
  Component,
  CreditCard,
  Files,
  GitFork,
  Github,
  Instagram,
  LaptopMinimal,
  Linkedin,
  Package,
  SquareMousePointer,
  Terminal,
  Twitter,
  UserRoundPen,
  Youtube,
} from 'lucide-react';

import {
  avatar1,
  avatar2,
  avatar3,
  blog1,
  blog2,
  blog3,
  feature1,
  feature2,
} from '@/assets';

// Header
export const navMenu: MenuItem[] = [
  {
    href: '/services',
    label: 'Services',
    submenu: [
      {
        href: '#',
        icon: <ChartArea />,
        label: 'Data Insights',
        desc: 'Advanced tools to analyze and visualize your data effectively',
      },
      {
        href: '#',
        icon: <Building2 />,
        label: 'Enterprise Solutions',
        desc: 'Custom-built solutions tailored for enterprise-level applications',
      },
      {
        href: '#',
        icon: <Component />,
        label: 'UI Components',
        desc: 'Ready-to-use UI components for seamless integration into your apps',
      },
      {
        href: '#',
        icon: <Code />,
        label: 'Next.js Performance',
        desc: 'Optimize your Next.js apps with cutting-edge analytics tools',
      },
      {
        href: '#',
        icon: <BetweenHorizonalEnd />,
        label: 'Custom UI Elements',
        desc: 'Highly flexible and customizable UI elements for developers',
      },
      {
        href: '#',
        icon: <BrainCircuit />,
        label: 'AI Authentication',
        desc: 'Secure and intelligent authentication solutions for AI-driven platforms',
      },
    ],
  },
  {
    href: '/features',
    label: 'Features',
  },
  {
    href: '/resources',
    label: 'Resources',
    submenu: [
      {
        href: '#',
        icon: <Terminal />,
        label: 'Quick Start Guide',
        desc: 'Step-by-step instructions to get started quickly',
      },
      {
        href: '#',
        icon: <Package />,
        label: 'Key Concepts',
        desc: 'Understanding the core concepts behind our platform',
      },
      {
        href: '#',
        icon: <SquareMousePointer />,
        label: 'Personalization',
        desc: 'Easily customize your UI to match your brand identity',
      },
      {
        href: '#',
        icon: <Blocks />,
        label: 'Official Add-ons',
        desc: 'Enhance functionality with verified plugins and extensions',
      },
    ],
  },
  {
    href: '/plans',
    label: 'Plans',
  },
];

// Hero
export const heroData = {
  sectionSubtitle: 'Powerful Insights, Simplified',
  sectionTitle: 'Unlock the Future of Data',
  decoTitle: 'analytics',
  sectionText:
    'Transform raw data into actionable insights. Our cutting-edge platform helps you make smarter decisions and optimize performance effortlessly.',
};

// Feature
export const featureData = {
  sectionSubtitle: 'Our Features',
  sectionTitle: 'Unlock Limitless Possibilities',
  sectionText:
    'Explore a suite of powerful tools designed to streamline your workflow, enhance performance, and drive meaningful results.',
  features: [
    {
      icon: <ChartPie size={32} />,
      iconBoxColor: 'bg-blue-600',
      title: 'Advanced Insights',
      desc: 'Gain in-depth insights with powerful analytics tools, helping you make data-driven decisions with confidence.',
      imgSrc: feature1,
    },
    {
      icon: <Files size={32} />,
      iconBoxColor: 'bg-cyan-500',
      title: 'Automated Reporting',
      desc: 'Generate detailed reports effortlessly, saving time while ensuring accurate data analysis for better decision-making.',
      imgSrc: feature2,
    },
    {
      icon: <UserRoundPen size={32} />,
      iconBoxColor: 'bg-yellow-500',
      title: 'User Engagement Metrics',
      desc: 'Track and optimize user engagement to improve retention, boost conversions, and enhance overall experience.',
    },
    {
      icon: <GitFork size={32} />,
      iconBoxColor: 'bg-red-500',
      title: 'A/B Testing Tools',
      desc: 'Run precise A/B tests to compare different strategies and identify the best-performing solutions for your business.',
    },
    {
      icon: <Blocks size={32} />,
      iconBoxColor: 'bg-purple-500',
      title: 'Seamless Integrations',
      desc: 'Connect effortlessly with third-party tools and platforms, maximizing productivity and unlocking new capabilities.',
    },
  ],
};

// Process
export const processData = {
  sectionSubtitle: 'Getting Started',
  sectionTitle: 'Simple Steps to Begin',
  sectionText:
    'Follow these quick and easy steps to set up your account and start making data-driven decisions effortlessly.',
  list: [
    {
      icon: <LaptopMinimal size={32} />,
      title: 'Sign Up',
      text: 'Create your account in minutes and gain access to powerful tools designed to elevate your experience.',
    },
    {
      icon: <ArrowBigDownDash size={32} />,
      title: 'Install the App',
      text: 'Download and install our app to seamlessly track, analyze, and optimize your data in real time.',
    },
    {
      icon: <CreditCard size={32} />,
      title: 'Monitor & Optimize',
      text: 'Start tracking key metrics, uncover insights, and optimize your strategy for maximum efficiency.',
    },
  ],
};

// Overview
export const overviewData = {
  sectionSubtitle: 'Overview',
  sectionTitle: 'Your Ultimate Analytics Solution',
  sectionText:
    'Gain deep insights effortlessly. Make smarter, data-driven decisions with our comprehensive analytics platform.',
  listTitle: 'Trusted by over 1 million users worldwide',
  list: [
    {
      title: '1M+',
      text: 'Total Downloads',
    },
    {
      title: '4.86',
      text: 'Average User Rating',
    },
    {
      title: '60K+',
      text: 'Active Monthly Users',
    },
  ],
};

// Review
export const reviewData = {
  sectionSubtitle: 'Reviews',
  sectionTitle: 'What Our Customers Are Says',
  reviewCard: [
    {
      title: 'We’re building a better application now, thanks to AnalytiX.',
      text: 'Our application is undergoing significant improvements with the help of NioLand, resulting in enhanced functionality, improved user experience',
      reviewAuthor: 'Wade Warren',
      date: '3month ago',
    },
    {
      title: 'Great Service from a expert support system of AnalytiX',
      text: 'Experience exceptional service and support from AnalytiX expert team, dedicated to providing knowledgeable assistance and ensuring a seamless',
      reviewAuthor: 'Dianne Russell',
      date: '3month ago',
    },
    {
      title: 'Pricing is amazing for the small businesses around the world',
      text: 'Our pricing is tailored to suit the needs of small businesses worldwide, offering affordable and competitive rates that provide excellent value for',
      reviewAuthor: 'Marvin McKinney',
      date: '3month ago',
    },
  ],
};

// Blog
export const blogData = {
  sectionSubtitle: 'Our Blog',
  sectionTitle: 'Resource Center',
  sectionText:
    'Unlock the potential of our resource center, accessing valuable information and insights for your business growth.',
  blogs: [
    {
      imgSrc: blog1,
      badge: 'Growth',
      title: 'Why customer retention is the ultimate growth strategy?',
      author: {
        avatarSrc: avatar1,
        authorName: 'John Carte',
        publishDate: 'Oct 10, 2024',
        readingTime: '8 min read',
      },
    },
    {
      imgSrc: blog2,
      badge: 'Marketing',
      title: 'Optimizing your advertising campaigns for higher ROAS',
      author: {
        avatarSrc: avatar2,
        authorName: 'Annette Black',
        publishDate: 'Jul 15, 2024',
        readingTime: '5 min read',
      },
    },
    {
      imgSrc: blog3,
      badge: 'Growth',
      title: 'How to build the ultimate tech stack for growth',
      author: {
        avatarSrc: avatar3,
        authorName: 'Ralph Edwards',
        publishDate: 'Mar 24, 2024',
        readingTime: '2 min read',
      },
    },
  ],
};

// Cta
export const ctaData = {
  text: 'Start tracking your user analytics to boost your business',
};

// Footer
export const footerData = {
  links: [
    {
      title: 'Product',
      items: [
        {
          href: '#',
          label: 'Components',
        },
        {
          href: '#',
          label: 'Pricing',
        },
        {
          href: '#',
          label: 'Dashboard',
        },
        {
          href: '#',
          label: 'Feature requests',
        },
      ],
    },
    {
      title: 'Developers',
      items: [
        {
          href: '#',
          label: 'Documentation',
        },
        {
          href: '#',
          label: 'Discord server',
        },
        {
          href: '#',
          label: 'Support',
        },
        {
          href: '#',
          label: 'Glossary',
        },
        {
          href: '#',
          label: 'Changelog',
        },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          href: '#',
          label: 'About',
        },
        {
          href: '#',
          label: 'Careers',
        },
        {
          href: '#',
          label: 'Blog',
        },
        {
          href: '#',
          label: 'Contact',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          href: '#',
          label: 'Terms and Conditions',
        },
        {
          href: '#',
          label: 'Privacy Policy',
        },
        {
          href: '#',
          label: 'Data Processing Agreement',
        },
        {
          href: '#',
          label: 'Cookie manager',
        },
      ],
    },
  ],
  copyright: '© 2025 nhmdevelopsolution',
  socialLinks: [
    {
      href: 'https://x.com',
      icon: <Twitter size={18} />,
    },
    {
      href: 'https://github.com',
      icon: <Github size={18} />,
    },
    {
      href: 'https://www.linkedin.com/in',
      icon: <Linkedin size={18} />,
    },
    {
      href: 'https://www.instagram.com',
      icon: <Instagram size={18} />,
    },
    {
      href: 'https://www.youtube.com',
      icon: <Youtube size={18} />,
    },
  ],
};
