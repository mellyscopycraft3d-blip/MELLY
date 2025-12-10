import { FileText, Mail, Megaphone, Monitor, ArrowRight, Star, TrendingUp, DollarSign, Users } from 'lucide-react';

export const BRAND = {
  name: "Melly’s Copycraft",
  owner: "Ahmad Hussaini Abdullahi",
  nickname: "Melly",
  email: "mellyscopycraft3d@gmail.com",
  domain: "mellyscopycraft.com",
  year: 2025
};

export const NAVIGATION = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Blog', id: 'blog' },
  { name: 'Contact', id: 'contact' },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Sales Pages',
    description: 'Long-form sales letters that hook readers and convert cold traffic into buyers.',
    icon: FileText,
    price: 'Starting at $1,500'
  },
  {
    id: 2,
    title: 'Email Sequences',
    description: 'Nurture sequences and launch emails that get opened, read, and clicked.',
    icon: Mail,
    price: 'Starting at $800'
  },
  {
    id: 3,
    title: 'Ad Copy',
    description: 'High-converting copy for Facebook, Instagram, and LinkedIn ads that stop the scroll.',
    icon: Megaphone,
    price: 'Starting at $500'
  },
  {
    id: 4,
    title: 'Website Copy',
    description: 'Complete website messaging overhaul to clarify your brand and boost conversions.',
    icon: Monitor,
    price: 'Starting at $2,000'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: "Melly completely transformed our launch. We saw a 3x increase in conversions compared to our previous campaign.",
    author: "Sarah Jenkins",
    role: "SaaS Founder"
  },
  {
    id: 2,
    text: "The best copywriter I've worked with. Ahmad gets the voice right immediately.",
    author: "David Oweye",
    role: "E-commerce Director"
  },
  {
    id: 3,
    text: "Professional, fast, and most importantly, profitable. Highly recommended.",
    author: "Elena Rodriguez",
    role: "Marketing Agency Owner"
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: 'Sales Page',
    title: 'FinTech App Launch',
    result: '$1.2M Launch',
    image: 'https://picsum.photos/seed/fintech/600/400',
    description: 'A comprehensive long-form sales page for a new financial technology application targeted at millennials.'
  },
  {
    id: 2,
    category: 'Ads',
    title: 'E-com Fashion Brand',
    result: '650% ROAS',
    image: 'https://picsum.photos/seed/fashion/600/400',
    description: 'Facebook and Instagram ad sets focusing on emotional hooks and social proof.'
  },
  {
    id: 3,
    category: 'Email',
    title: 'Course Creator Sequence',
    result: '45% Open Rate',
    image: 'https://picsum.photos/seed/course/600/400',
    description: '7-day welcome sequence for a high-ticket coaching program.'
  },
  {
    id: 4,
    category: 'Website',
    title: 'Agency Rebrand',
    result: '2x Leads',
    image: 'https://picsum.photos/seed/agency/600/400',
    description: 'Full website copy overhaul including Home, About, and Services pages.'
  },
  {
    id: 5,
    category: 'Sales Page',
    title: 'Health Supplement',
    result: '12% Conv. Rate',
    image: 'https://picsum.photos/seed/health/600/400',
    description: 'Direct response sales letter for a new vitamin D supplement.'
  },
  {
    id: 6,
    category: 'Email',
    title: 'Black Friday Campaign',
    result: '$50k Weekend',
    image: 'https://picsum.photos/seed/blackfriday/600/400',
    description: 'Aggressive yet value-driven email campaign for Q4 sales.'
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Why Your Sales Page Isn't Converting (And How to Fix It)",
    date: "Oct 12, 2024",
    image: "https://picsum.photos/seed/blog1/600/400"
  },
  {
    id: 2,
    title: "The Psychology Behind High-Converting Email Subject Lines",
    date: "Oct 28, 2024",
    image: "https://picsum.photos/seed/blog2/600/400"
  },
  {
    id: 3,
    title: "5 Copywriting Myths That Are Killing Your Business",
    date: "Nov 03, 2024",
    image: "https://picsum.photos/seed/blog3/600/400"
  },
  {
    id: 4,
    title: "Storytelling vs. Hard Selling: What Works in 2025?",
    date: "Nov 15, 2024",
    image: "https://picsum.photos/seed/blog4/600/400"
  },
  {
    id: 5,
    title: "How to Write Ad Hooks That Stop the Scroll",
    date: "Dec 01, 2024",
    image: "https://picsum.photos/seed/blog5/600/400"
  },
  {
    id: 6,
    title: "The Ultimate Guide to Value Propositions",
    date: "Dec 10, 2024",
    image: "https://picsum.photos/seed/blog6/600/400"
  }
];
