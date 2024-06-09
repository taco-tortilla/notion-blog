export function Loading() {
  return (
    <div className="flex flex-col justify-center text-center py-10 items-center">
      <div className="loader"></div>
      <h1 className="p-2 text-lg md:text-xl md:text-lg font-medium">
        Loading...
      </h1>
    </div>
  );
}
