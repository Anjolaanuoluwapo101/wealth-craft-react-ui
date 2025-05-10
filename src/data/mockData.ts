
import { MutualFund, Bond, FixedDeposit, InsurancePolicy, BlogPost, Testimonial, MenuItem } from '../types';

export const mutualFunds: MutualFund[] = [
  {
    id: '1',
    name: 'HDFC Top 100 Fund',
    category: 'Large Cap',
    amc: 'HDFC Mutual Fund',
    nav: 823.45,
    oneYearReturn: 15.3,
    threeYearReturn: 12.8,
    fiveYearReturn: 10.5,
    riskLevel: 'Moderate',
    rating: 4,
    isRecommended: true
  },
  {
    id: '2',
    name: 'SBI Blue Chip Fund',
    category: 'Large Cap',
    amc: 'SBI Mutual Fund',
    nav: 56.23,
    oneYearReturn: 14.2,
    threeYearReturn: 11.9,
    fiveYearReturn: 9.8,
    riskLevel: 'Moderate',
    rating: 4
  },
  {
    id: '3',
    name: 'Axis Mid Cap Fund',
    category: 'Mid Cap',
    amc: 'Axis Mutual Fund',
    nav: 78.12,
    oneYearReturn: 18.5,
    threeYearReturn: 15.2,
    fiveYearReturn: 12.7,
    riskLevel: 'High',
    rating: 5,
    isRecommended: true
  },
  {
    id: '4',
    name: 'Kotak Emerging Equity Fund',
    category: 'Small & Mid Cap',
    amc: 'Kotak Mutual Fund',
    nav: 64.87,
    oneYearReturn: 22.1,
    threeYearReturn: 17.3,
    fiveYearReturn: 14.2,
    riskLevel: 'High',
    rating: 4
  },
  {
    id: '5',
    name: 'ICICI Prudential Liquid Fund',
    category: 'Liquid',
    amc: 'ICICI Prudential Mutual Fund',
    nav: 312.56,
    oneYearReturn: 6.2,
    threeYearReturn: 5.8,
    fiveYearReturn: 6.1,
    riskLevel: 'Low',
    rating: 3
  },
  {
    id: '6',
    name: 'Tata Digital India Fund',
    category: 'Sectoral',
    amc: 'Tata Mutual Fund',
    nav: 45.32,
    oneYearReturn: 28.6,
    threeYearReturn: 25.3,
    fiveYearReturn: 22.1,
    riskLevel: 'High',
    rating: 5,
    isRecommended: true
  }
];

export const nfoFunds: MutualFund[] = [
  {
    id: '7',
    name: 'Aditya Birla Sun Life Electric Vehicles Fund',
    category: 'Sectoral',
    amc: 'Aditya Birla Sun Life Mutual Fund',
    nav: 10.00,
    oneYearReturn: 0,
    threeYearReturn: 0,
    fiveYearReturn: 0,
    riskLevel: 'High',
    rating: 0,
    isNFO: true
  },
  {
    id: '8',
    name: 'DSP Nifty Next 50 Index Fund',
    category: 'Index',
    amc: 'DSP Mutual Fund',
    nav: 10.00,
    oneYearReturn: 0,
    threeYearReturn: 0,
    fiveYearReturn: 0,
    riskLevel: 'Moderate',
    rating: 0,
    isNFO: true
  }
];

export const recommendedFunds: MutualFund[] = mutualFunds.filter(fund => fund.isRecommended);

export const bonds: Bond[] = [
  {
    id: '1',
    name: 'NHAI Tax-Free Bond',
    issuer: 'National Highway Authority of India',
    couponRate: 5.75,
    maturityDate: '2031-01-15',
    minInvestment: 10000,
    isAvailable: true
  },
  {
    id: '2',
    name: 'REC Tax-Free Bond',
    issuer: 'Rural Electrification Corporation',
    couponRate: 6.10,
    maturityDate: '2029-08-22',
    minInvestment: 5000,
    isAvailable: true
  },
  {
    id: '3',
    name: 'PFC Infrastructure Bonds',
    issuer: 'Power Finance Corporation',
    couponRate: 7.15,
    maturityDate: '2030-05-10',
    minInvestment: 10000,
    isAvailable: false
  }
];

export const rbiBonds: Bond[] = [
  {
    id: '4',
    name: 'Floating Rate Savings Bonds 2020 (Taxable)',
    issuer: 'Reserve Bank of India',
    couponRate: 7.15,
    maturityDate: '2027-07-01',
    minInvestment: 1000,
    isAvailable: true
  },
  {
    id: '5',
    name: 'RBI Sovereign Gold Bonds',
    issuer: 'Reserve Bank of India',
    couponRate: 2.50,
    maturityDate: '2028-04-15',
    minInvestment: 5000,
    isAvailable: false
  }
];

export const fixedDeposits: FixedDeposit[] = [
  {
    id: '1',
    bankName: 'SBI',
    interestRate: 6.75,
    tenure: '5 years',
    minDeposit: 10000,
    isRecommended: true
  },
  {
    id: '2',
    bankName: 'HDFC Bank',
    interestRate: 7.00,
    tenure: '3 years',
    minDeposit: 5000,
    isRecommended: false
  },
  {
    id: '3',
    bankName: 'ICICI Bank',
    interestRate: 6.90,
    tenure: '1 year',
    minDeposit: 10000,
    isRecommended: true
  }
];

export const insurancePolicies: InsurancePolicy[] = [
  {
    id: '1',
    type: 'Health',
    provider: 'Star Health Insurance',
    coverage: 500000,
    premium: 12000,
    term: '1 year'
  },
  {
    id: '2',
    type: 'Life',
    provider: 'LIC',
    coverage: 2000000,
    premium: 15000,
    term: '25 years'
  },
  {
    id: '3',
    type: 'Vehicle',
    provider: 'ICICI Lombard',
    coverage: 300000,
    premium: 5000,
    term: '1 year'
  },
  {
    id: '4',
    type: 'General',
    provider: 'Bajaj Allianz',
    coverage: 1000000,
    premium: 8000,
    term: '1 year'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Mutual Fund Investment Strategies',
    excerpt: 'Learn about the different investment strategies for mutual funds and how to choose the right one for your goals.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Vikram Singh Thakur',
    date: '2023-05-15',
    imageUrl: 'https://source.unsplash.com/random/300x200?invest',
    category: 'Mutual Funds'
  },
  {
    id: '2',
    title: 'Tax Planning with Equity Linked Savings Schemes',
    excerpt: 'Discover how ELSS can help you save taxes while building wealth over the long term.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Rahul Kumar',
    date: '2023-06-02',
    imageUrl: 'https://source.unsplash.com/random/300x200?tax',
    category: 'Tax Planning'
  },
  {
    id: '3',
    title: 'How to Build a Diversified Investment Portfolio',
    excerpt: 'Step-by-step guide to creating a well-diversified portfolio across asset classes.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Anurag Sharma',
    date: '2023-06-22',
    imageUrl: 'https://source.unsplash.com/random/300x200?portfolio',
    category: 'Portfolio Management'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Mehta',
    position: 'Business Owner',
    content: 'I have been investing through Wealth Craft for over 3 years now. The personalized advice and portfolio management has significantly improved my returns.',
    rating: 5,
    imageUrl: 'https://source.unsplash.com/random/100x100?man'
  },
  {
    id: '2',
    name: 'Priya Shah',
    position: 'IT Professional',
    content: 'The team at Wealth Craft helped me plan my investments for long-term goals. Their expertise and professional approach is commendable.',
    rating: 4,
    imageUrl: 'https://source.unsplash.com/random/100x100?woman'
  },
  {
    id: '3',
    name: 'Suresh Nair',
    position: 'Doctor',
    content: 'Excellent service and support. The online dashboard makes it easy to track my investments. I would highly recommend their services.',
    rating: 5,
    imageUrl: 'https://source.unsplash.com/random/100x100?doctor'
  }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Home',
    path: '/',
    icon: 'home'
  },
  {
    id: '2',
    label: 'About Us',
    path: '/about',
    icon: 'about-us'
  },
  {
    id: '3',
    label: 'Mutual Fund',
    path: '/mutual-fund',
    icon: 'chart-bar',
    children: [
      {
        id: '3.1',
        label: 'Recommended Funds',
        path: '/recommended-funds',
        icon: 'chart-bar'
      },
      {
        id: '3.2',
        label: 'All Funds',
        path: '/all-funds',
        icon: 'chart-bar'
      },
      {
        id: '3.3',
        label: 'NFO',
        path: '/nfo',
        icon: 'chart-bar'
      }
    ]
  },
  {
    id: '4',
    label: 'Fixed Income',
    path: '/fixed-income',
    icon: 'bank',
    requiresAuth: true,
    children: [
      {
        id: '4.1',
        label: 'Bonds/NCDs',
        path: '/bonds',
        icon: 'bank'
      },
      {
        id: '4.2',
        label: 'RBI Bonds',
        path: '/rbi-bonds',
        icon: 'bank'
      },
      {
        id: '4.3',
        label: 'Fixed Deposits',
        path: '/fixed-deposits',
        icon: 'bank'
      }
    ]
  },
  {
    id: '5',
    label: 'Insurance',
    path: '/insurance',
    icon: 'shield',
    requiresAuth: true,
    children: [
      {
        id: '5.1',
        label: 'Vehicle',
        path: '/insurance/vehicle',
        icon: 'vehicle'
      },
      {
        id: '5.2',
        label: 'Health',
        path: '/insurance/health',
        icon: 'health'
      },
      {
        id: '5.3',
        label: 'Life',
        path: '/insurance/life',
        icon: 'life'
      },
      {
        id: '5.4',
        label: 'General',
        path: '/insurance/general',
        icon: 'general'
      },
      {
        id: '5.5',
        label: 'Add Existing Policy',
        path: '/insurance/add-policy',
        icon: 'add-existing-policy'
      }
    ]
  },
  {
    id: '6',
    label: 'Other Investments',
    path: '/other-investments',
    icon: 'dollar-sign',
    requiresAuth: true,
    children: [
      {
        id: '6.1',
        label: 'Unlisted Shares',
        path: '/unlisted-shares',
        icon: 'unlisted-shares'
      },
      {
        id: '6.2',
        label: 'NPS',
        path: '/nps',
        icon: 'nps'
      },
      {
        id: '6.3',
        label: 'PMS',
        path: '/pms',
        icon: 'pms'
      },
      {
        id: '6.4',
        label: 'AIF',
        path: '/aif',
        icon: 'aif'
      }
    ]
  },
  {
    id: '7',
    label: 'Tools / Calculator',
    path: '/tools',
    icon: 'calculator'
  },
  {
    id: '8',
    label: 'Blog / Knowledge',
    path: '/blog',
    icon: 'book'
  },
  {
    id: '9',
    label: 'Forum',
    path: '/forum',
    icon: 'forum'
  },
  {
    id: '10',
    label: 'Videos',
    path: '/videos',
    icon: 'youtube'
  },
  {
    id: '11',
    label: 'Why Us',
    path: '/why-us',
    icon: 'why-us'
  },
  {
    id: '12',
    label: 'Benefits',
    path: '/benefits',
    icon: 'benefits'
  },
  {
    id: '13',
    label: 'Testimonials',
    path: '/testimonials',
    icon: 'testimonials'
  },
  {
    id: '14',
    label: 'Contact Us',
    path: '/contact',
    icon: 'contact'
  }
];
