import { Menu } from './components/home/Menu';
import { Article } from './components/home/article';

export default function Home() {
  return (
    <main className="p-10 col-span-8 bg-white rounded-md drop-shadow-md">
      <div className="pb-5">
        <Menu />
      </div>
      <Article />
    </main>
  );
}
