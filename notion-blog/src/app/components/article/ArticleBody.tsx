import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  markdown: string;
};

export function ArticleBody({ markdown }: Props) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} className="markdown">
      {markdown}
    </Markdown>
  );
}
