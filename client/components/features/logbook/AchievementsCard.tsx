import { achievementsData, AchievementsData } from '@/lib/homepage/logbook';
import { Star, Camera } from 'lucide-react';

const icons = {
  star: Star,
  camera: Camera,
};

export const AchievementsCard = () => {
  return (
    <section
      aria-labelledby="achievements-heading"
      className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 p-6">
      <h3 id="achievements-heading" className="text-lg font-semibold text-slate-900 mb-4">
        Recent Achievements
      </h3>
      <ul className="space-y-3">
        {achievementsData.map((achievement: AchievementsData) => {
          const Icon = icons[achievement.icon as keyof typeof icons];
          return (
            <li key={achievement.id} className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 ${achievement.bgColor} rounded-full flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" aria-hidden />
              </div>
              <div>
                <div className="font-medium text-slate-900">{achievement.title}</div>
                <p className="text-sm text-slate-600">{achievement.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
