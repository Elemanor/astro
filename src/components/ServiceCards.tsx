import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Shield, Home, Wrench, AlertCircle } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  href: string;
}

const services: Service[] = [
  {
    title: 'Foundation Repair',
    description: 'Fix cracks, settling, and structural issues with permanent solutions',
    icon: <Shield className="h-8 w-8" />,
    features: ['Crack Injection', 'Wall Reinforcement', 'Settling Repair'],
    href: '/foundation-repair/'
  },
  {
    title: 'Basement Waterproofing',
    description: 'Keep your basement dry with interior and exterior waterproofing',
    icon: <Home className="h-8 w-8" />,
    features: ['Interior Systems', 'Exterior Membranes', 'French Drains'],
    href: '/basement-waterproofing/'
  },
  {
    title: 'Underpinning',
    description: 'Lower your basement or strengthen foundations for additions',
    icon: <Wrench className="h-8 w-8" />,
    features: ['Basement Lowering', 'Foundation Strengthening', 'Bench Footing'],
    href: '/underpinning/'
  },
  {
    title: 'Emergency Services',
    description: '24/7 emergency response for flooding and foundation failures',
    icon: <AlertCircle className="h-8 w-8" />,
    features: ['24/7 Response', 'Water Extraction', 'Emergency Repairs'],
    href: '/emergency/'
  }
];

export default function ServiceCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {services.map((service, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="text-primary mb-4">{service.icon}</div>
            <CardTitle className="text-xl">{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-muted-foreground">
                  <span className="text-primary mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="w-full">
              <a href={service.href}>Learn More →</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}