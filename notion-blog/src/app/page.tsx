import { Menu } from './components/home/Menu';
import { Article } from './components/home/Article';

export default function Home() {
  return (
    <main className="p-10 col-span-8 bg-white rounded-md drop-shadow-md">
      <div className="pb-5">
        <Menu />
      </div>
      <div className="pb-5">
        <Article />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </main>
  );
}
