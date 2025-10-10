'use client';

import { MapPin, Waves, Star } from 'lucide-react';

interface StepCounterProps {
  step: number;
}

const steps = [
  { icon: MapPin, label: 'Podstawowe informacje' },
  { icon: Waves, label: 'Szczegóły nurkowania' },
  { icon: Star, label: 'Podsumowanie' },
];

export const StepCounter = ({ step }: StepCounterProps) => {
  return (
    <div className="mb-8">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-slate-900">{steps[step - 1]?.label}</h2>
        <p className="text-slate-500">
          Krok {step} z {steps.length}
        </p>
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
