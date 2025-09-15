import { legendItems, mapLegendAriaLabel } from '@/lib/homepage/map';

export const MapLegend = () => {
  return (
    <ul
      className="mt-6 flex flex-wrap justify-center gap-6"
      role="list"
      aria-label={mapLegendAriaLabel}>
      {legendItems.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <span
            className={`icon-size-md rounded-full border border-white ${item.color}`}
            aria-hidden="true"
          />
          <span className="text-slate-300 text-sm">{item.label}</span>
        </li>
      ))}
    </ul>
  );
};
