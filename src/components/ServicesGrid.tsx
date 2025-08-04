import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
  features: string[];
}

interface ServicesGridProps {
  services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <a href={service.link} className="block">
            <div className="overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <span className="inline-flex items-center text-blue-600 font-semibold hover:gap-3 gap-2 transition-all">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </span>
            </CardFooter>
          </a>
        </Card>
      ))}
    </div>
  );
}