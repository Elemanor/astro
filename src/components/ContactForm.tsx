import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto p-6">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Contact us for a free inspection and quote. We're available 24/7 for emergencies.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">24/7 Emergency Line</p>
              <a href="tel:+14375450067" className="text-primary hover:underline">
                (437) 545-0067
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Email Us</p>
              <a href="mailto:info@dryspacewaterproofing.ca" className="text-primary hover:underline">
                info@dryspacewaterproofing.ca
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="font-semibold">Service Area</p>
              <p className="text-muted-foreground">Greater Toronto Area</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle>Request a Free Quote</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you within 24 hours.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium mb-2">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select a service</option>
                <option value="waterproofing">Basement Waterproofing</option>
                <option value="foundation">Foundation Repair</option>
                <option value="underpinning">Underpinning</option>
                <option value="emergency">Emergency Service</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
          </CardContent>
          
          <CardFooter>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}