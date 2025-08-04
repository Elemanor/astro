import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  featured?: boolean;
}

interface GalleryData {
  waterproofing: GalleryImage[];
  foundation: GalleryImage[];
  cracks: GalleryImage[];
  walls: GalleryImage[];
}

interface GalleryTabsProps {
  galleries: GalleryData;
}

export default function GalleryTabs({ galleries }: GalleryTabsProps) {
  return (
    <Tabs defaultValue="waterproofing" className="w-full">
      <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
        <TabsTrigger value="waterproofing">Waterproofing</TabsTrigger>
        <TabsTrigger value="foundation">Underpinning</TabsTrigger>
        <TabsTrigger value="cracks">Crack Repair</TabsTrigger>
        <TabsTrigger value="walls">Complete Solutions</TabsTrigger>
      </TabsList>
      
      {Object.entries(galleries).map(([category, images]) => (
        <TabsContent key={category} value={category}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden group ${
                  image.featured ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    loading="lazy" 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-semibold">{image.caption}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}