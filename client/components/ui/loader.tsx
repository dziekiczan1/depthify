interface LoaderProps {
  sizeClass?: string;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ sizeClass = 'h-12 w-12', color = 'text-primary' }) => {
  return (
    <div className="flex justify-center items-center w-full" role="status" aria-label="Loading">
      <div
        className={`animate-spin rounded-full border-t-4 border-b-4 border-blue-500 ${color} ${sizeClass}`}></div>
    </div>
  );
};

export default Loader;
