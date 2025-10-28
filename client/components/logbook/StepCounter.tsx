'use client';

import { MapPin, Waves, Star } from 'lucide-react';
import { Heading } from '@/components/ui/heading';

interface StepCounterProps {
  step: number;
}

const steps = [
  { icon: MapPin, label: 'Basic information' },
  { icon: Waves, label: 'Dive details' },
  { icon: Star, label: 'Summary' },
];

export const StepCounter = ({ step }: StepCounterProps) => {
  return (
    <div className="mb-8">
      <div className="text-center mb-4">
        <Heading
          as="h2"
          title={steps[step - 1]?.label}
          description={`Step ${step} of ${steps.length}`}
          size="base"
          descriptionSize="sm"
          color="text-slate-900"
          descriptionClassName="leading-relaxed text-slate-600"
        />
      </div>
      <div className="relative flex items-center justify-between max-w-2xl mx-auto">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-300 z-0" />
        <div
          className="absolute top-1/2 left-0 h-0.5 bg-blue-500 z-0 transition-all duration-500"
          style={{
            width: `${((step - 1) / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map((s, i) => {
          const isActive = i + 1 === step;
          const isCompleted = i + 1 < step;

          return (
            <div key={i} className="flex items-center justify-center relative z-10">
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : isActive
                        ? 'bg-blue-100 border-blue-500 text-blue-600'
                        : 'bg-white border-slate-300 text-slate-400'
                  }`}>
                <s.icon className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
