import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="space-y-4 pt-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
          <a href="tel:4375450067">
            <Phone className="w-5 h-5 mr-2" />
            Call (437) 545-0067 Now
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary" className="bg-gray-800 hover:bg-gray-900 text-white">
          <a href="#inspection-form">
            <FileText className="w-5 h-5 mr-2" />
            Get Free Inspection
          </a>
        </Button>
      </div>
    </div>
  );
}