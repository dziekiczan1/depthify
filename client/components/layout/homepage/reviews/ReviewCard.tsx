import { LucideQuote } from 'lucide-react';
import { StarRating } from '@/components/features/logbook/StarRating';
import { Avatar, AvatarProps } from '@/components/ui/avatar';
import { Tag } from '@/components/features/logbook/Tag';

export type ReviewCardProps = {
  rating: number;
  tag: string;
  text: string;
  avatar: AvatarProps;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ rating, tag, text, avatar }) => (
  <div className="group bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between h-full">
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-bl-3xl"></div>
    <div className="absolute top-4 right-4 text-blue-200 group-hover:text-blue-300 transition-colors">
      <LucideQuote className="w-6 h-6" aria-hidden="true" />
    </div>

    <div>
      <div className="flex items-center mb-4">
        <StarRating rating={rating} inactiveColor="text-slate-300" />
      </div>

      <Tag label={tag} color="darkBlue" className="w-fit mb-4" small />

      <p className="text-slate-600 mb-6 leading-relaxed text-sm">"{text}"</p>
    </div>

    <Avatar {...avatar} />
  </div>
);
