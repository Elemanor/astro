import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

interface Review {
  name: string;
  location: string;
  review: string;
  rating: number;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-scroll">
          {[...reviews, ...reviews].map((review, index) => (
            <Card key={index} className="flex-none w-full md:w-1/2 lg:w-1/3">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100" />
                  <p className="text-gray-700 italic relative z-10 pl-6">
                    "{review.review}"
                  </p>
                </blockquote>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
}

export function ReviewStats() {
  return (
    <div className="flex justify-center gap-6 mt-12">
      <Card>
        <CardContent className="flex items-center gap-2 p-4">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="font-semibold">4.9/5 Average Rating</span>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="flex items-center gap-2 p-4">
          <Badge variant="secondary" className="gap-1">
            <Star className="w-4 h-4" />
            100+ Verified Reviews
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
}