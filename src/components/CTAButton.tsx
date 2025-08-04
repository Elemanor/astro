import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface CTAButtonProps {
  text?: string;
  phoneNumber?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export default function CTAButton({ 
  text = "Get Your Free Consultation",
  phoneNumber = "4375450067",
  variant = "default",
  size = "lg",
  className = ""
}: CTAButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={`tel:${phoneNumber}`}>
        <Phone className="w-5 h-5 mr-2" />
        {text}
      </a>
    </Button>
  );
}