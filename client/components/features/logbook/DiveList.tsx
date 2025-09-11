import { DiveCard } from './DiveCard';
import { DiveLogEntry } from '@/lib/homepage/logbook';

export const DiveList = ({ dives }: { dives: DiveLogEntry[] }) => {
  return (
    <div className="divide-y divide-slate-100">
      {dives.map((dive) => (
        <DiveCard key={dive.id} dive={dive} />
      ))}
    </div>
  );
};
