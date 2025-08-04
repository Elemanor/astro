import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2, Clock, Shield } from "lucide-react";

export function EmergencyAlert() {
  return (
    <Alert variant="destructive" className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Emergency Service Available 24/7</AlertTitle>
      <AlertDescription>
        Water damage? Foundation emergency? Call us immediately at{" "}
        <a href="tel:4375450067" className="font-bold underline">
          (437) 545-0067
        </a>
      </AlertDescription>
    </Alert>
  );
}

export function ServiceBadges() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Badge variant="secondary" className="gap-1">
        <CheckCircle2 className="h-3 w-3" />
        Licensed & Insured
      </Badge>
      <Badge variant="secondary" className="gap-1">
        <Shield className="h-3 w-3" />
        10+ Year Warranty
      </Badge>
      <Badge variant="secondary" className="gap-1">
        <Clock className="h-3 w-3" />
        Same Day Service
      </Badge>
      <Badge variant="outline">WSIB Certified</Badge>
      <Badge variant="outline">ISO 9001</Badge>
    </div>
  );
}

export function UrgencyBadge({ level }: { level: 'high' | 'medium' | 'low' }) {
  const variants = {
    high: { variant: 'destructive' as const, icon: AlertCircle, text: 'Urgent' },
    medium: { variant: 'default' as const, icon: Clock, text: 'Priority' },
    low: { variant: 'secondary' as const, icon: CheckCircle2, text: 'Routine' }
  };

  const { variant, icon: Icon, text } = variants[level];

  return (
    <Badge variant={variant} className="gap-1">
      <Icon className="h-3 w-3" />
      {text}
    </Badge>
  );
}