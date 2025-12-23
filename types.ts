import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  image: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingFeature {
  name: string;
  value: string;
  isIncluded: boolean;
}