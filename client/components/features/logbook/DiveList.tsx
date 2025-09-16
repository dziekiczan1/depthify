import { DiveCard } from './DiveCard';
import { DiveSpot } from '@/lib/homepage/dives';

export const DiveList = ({ dives }: { dives: DiveSpot[] }) => {
  return (
    <div className="divide-y divide-slate-100">
      {dives.map((dive) => (
        <DiveCard key={dive.id} dive={dive} />
      ))}
    </div>
  );
};
