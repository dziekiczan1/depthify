import { LayoutContainer } from '@/components/layout/LayoutContainer';
import { Heading } from '@/components/ui/heading';
import { demoDives, logbookHeading, logbookSubHeading } from '@/lib/homepage/logbook';
import { DiveList } from '@/components/features/logbook/DiveList';

export const Logbook = () => {
  return (
    <section id="logbook" className="section-default">
      <LayoutContainer>
        <Heading
          as="h2"
          title={logbookHeading.title}
          highlight={logbookHeading.highlight}
          description={logbookHeading.description}
          size="lg"
          descriptionSize="lg"
          gradient
          center
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
              <Heading
                as="h3"
                title={logbookSubHeading.title}
                description={logbookSubHeading.description}
                size="base"
                descriptionSize="base"
                className="gradient-cyan-soft p-8"
                headingClassName="text-white"
                descriptionClassName="text-blue-100"
              />
              <DiveList dives={demoDives} />
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Twoje statystyki</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Łączne nurkowania</span>
                  <span className="text-2xl font-bold text-blue-600">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Najgłębsze nurkowanie</span>
                  <span className="text-2xl font-bold text-cyan-600">42m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Łączny czas pod wodą</span>
                  <span className="text-2xl font-bold text-teal-600">89h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Odwiedzone kraje</span>
                  <span className="text-2xl font-bold text-indigo-600">12</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Ostatnie osiągnięcia</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-star w-5 h-5 text-white"
                      aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Deep Explorer</div>
                    <div className="text-sm text-slate-600">Nurkowanie poniżej 30m</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-camera w-5 h-5 text-white"
                      aria-hidden="true">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                      <circle cx="12" cy="13" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Photographer</div>
                    <div className="text-sm text-slate-600">100+ zdjęć podwodnych</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};
