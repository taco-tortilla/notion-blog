export const Article = () => {
  return (
    <div className="grid grid-rows-3 items-center text-center rounded-md hover:bg-gray-100 p-6">
      <div className="row-span-2 bg-gray-200 min-h-full rounded-md"></div>
      <div className="row-span-1 pt-4">
        <p className="text-xl font-bold py-2">title</p>
        <p className="py-4">descriptions</p>
        <p className="text-sm text-gray-400">May 19, 2024</p>
      </div>
    </div>
  );
};
