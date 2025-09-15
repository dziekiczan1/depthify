export interface TooltipProps {
  title: string;
  country?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ title, country }) => {
  return (
    <div
      role="tooltip"
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg shadow-xl border border-slate-600 whitespace-nowrap z-20">
      <div className="font-semibold">{title}</div>
      {country && <div className="text-sm text-slate-300">{country}</div>}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800" />
    </div>
  );
};
