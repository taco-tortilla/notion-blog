export function Categories() {
  return (
    <div className="col-span-4 rounded-md">
      <div className="bg-white p-10 rounded-md drop-shadow-md sticky top-10">
        <p className="text-lg font-bold pb-5">Categories</p>
        <ul>
          <li className="py-2">
            <a className="cursor-pointer">
              <span className="pr-2">🎥</span>movie
            </a>
          </li>
          <li className="py-2">
            <a className="cursor-pointer">
              <span className="pr-2">🧑🏻‍💻</span>tec
            </a>
          </li>
          <li className="py-2">
            <a className="cursor-pointer">
              <span className="pr-2">📖</span>book
            </a>
          </li>
          <li className="py-2">
            <a className="cursor-pointer">
              <span className="pr-2">💭</span>monologue
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
