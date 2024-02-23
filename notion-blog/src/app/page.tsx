import { getDbInformation } from '@/service/dbManagement';
import Markdown from 'react-markdown';

export default async function Home() {
  const contetMdObject = await getDbInformation();
  const content = contetMdObject!.parent;
  console.log(content);
  return (
    <div>
      <h1>test</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
}
