import React from 'react';
import { Card, CardContent } from './ui/card';
import { AlertCircle, Droplets, Home, Shield } from 'lucide-react';

const problems = [
  {
    title: 'Sump Pump Installation',
    severity: 'Essential',
    description: 'Protect your basement from flooding. Professional installation with battery backup.',
    price: 'From $2,800',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
    color: 'border-primary border-2 hover:border-primary/80',
    link: '/services/sump-pump-installation-toronto',
  },
  {
    title: 'Foundation Cracks',
    severity: 'Critical',
    description: 'Structural integrity at risk. Professional injection provides permanent sealing.',
    price: 'From $500',
    icon: AlertCircle,
    image: 'https://images.unsplash.com/photo-1635321593217-40050ad13c74?w=600&h=400&fit=crop',
    color: 'border-red-200 hover:border-red-300',
    link: '/services/foundation-cracks',
  },
  {
    title: 'Water Seepage',
    severity: 'Urgent',
    description: 'Moisture destroys property value. Interior drainage eliminates water permanently.',
    price: 'From $2,000',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop',
    color: 'border-blue-200 hover:border-blue-300',
    link: '/services/water-seepage',
  },
  {
    title: 'Exterior Drainage',
    severity: 'Preventive',
    description: 'Stop water before it enters. Professional grading redirects water permanently.',
    price: 'From $3,000',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=600&h=400&fit=crop',
    color: 'border-green-200 hover:border-green-300',
    link: '/services/exterior-drainage',
  },
];

export function ProblemCards() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-light text-center mb-8 sm:mb-12 lg:mb-16">
          Common Issues We <span className="font-semibold">Resolve</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <Card key={problem.title} className={`group overflow-hidden transition-all duration-300 hover:shadow-lg ${problem.color}`}>
                <a href={problem.link} className="block">
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <img 
                      src={problem.image}
                      alt={problem.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                      <span className={`inline-flex items-center px-2 py-1 sm:px-3 rounded-sm text-xs font-bold text-white ${
                        problem.severity === 'Essential' ? 'bg-primary' :
                        problem.severity === 'Critical' ? 'bg-red-600' :
                        problem.severity === 'Urgent' ? 'bg-orange-600' :
                        problem.severity === 'Emergency' ? 'bg-yellow-600' :
                        'bg-green-600'
                      }`}>
                        {problem.severity}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Icon className="w-8 h-8 text-white mb-2" />
                      <h3 className="text-xl font-bold text-white">{problem.title}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-sm text-gray-600 mb-4 min-h-[3rem]">
                      {problem.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{problem.price}</span>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </CardContent>
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}