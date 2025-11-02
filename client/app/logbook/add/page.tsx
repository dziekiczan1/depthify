import { FormHeadings } from '@/lib/formUtils';
import { Heading } from '@/components/ui/heading';
import { LogbookForm } from '@/components/logbook/LogbookForm';

const LogbookAdd = () => {
  return (
    <div className={`py-8 relative w-full max-w-4xl mx-auto`}>
      <Heading
        {...FormHeadings.logbook}
        size="base"
        descriptionSize="base"
        headingClassName="!text-2xl"
        className="mb-8"
        center
      />
      <div className={`bg-white rounded-2xl shadow-xl border border-blue-100 p-4 md:p-8`}>
        <LogbookForm />
      </div>
    </div>
  );
};
export default LogbookAdd;
