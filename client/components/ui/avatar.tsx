export type AvatarProps = {
  firstname: string;
  surname: string;
  role: string;
  location: string;
};

export const Avatar: React.FC<AvatarProps> = ({ firstname, surname, role, location }) => {
  const initials = `${firstname[0] || ''}${surname[0] || ''}`.toUpperCase();

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
        {initials}
      </div>
      <div>
        <div className="font-semibold text-slate-900">
          {firstname} {surname}
        </div>
        <div className="text-sm text-slate-500">{role}</div>
        <div className="text-xs text-slate-400">{location}</div>
      </div>
    </div>
  );
};
