
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'master';
  isLoggedIn: boolean;
}

export interface MutualFund {
  id: string;
  name: string;
  category: string;
  amc: string;
  nav: number;
  oneYearReturn: number;
  threeYearReturn: number;
  fiveYearReturn: number;
  riskLevel: 'Low' | 'Moderate' | 'High';
  rating: number;
  isRecommended?: boolean;
  isNFO?: boolean;
}

export interface Bond {
  id: string;
  name: string;
  issuer: string;
  couponRate: number;
  maturityDate: string;
  minInvestment: number;
  isAvailable: boolean;
}

export interface FixedDeposit {
  id: string;
  bankName: string;
  interestRate: number;
  tenure: string;
  minDeposit: number;
  isRecommended: boolean;
}

export interface InsurancePolicy {
  id: string;
  type: 'Vehicle' | 'Health' | 'Life' | 'General';
  provider: string;
  coverage: number;
  premium: number;
  term: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  children?: MenuItem[];
  requiresAuth?: boolean;
}
