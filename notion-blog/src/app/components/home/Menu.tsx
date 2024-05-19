export const Menu = () => {
  return (
    <ul className="flex text-center border-b-2 border-gray-200 ">
      <li className="me-2">
        <a className="inline-block px-3 py-1 rounded-t-md hover:bg-gray-200">
          Home
        </a>
      </li>
      <li className="me-2">
        <a className="inline-block px-3 py-1 rounded-t-md hover:bg-gray-200">
          Monthly
        </a>
      </li>
      <li className="me-2">
        <a className="inline-block px-3 py-1 rounded-t-md hover:bg-gray-200">
          Categories
        </a>
      </li>
    </ul>
  );
};
