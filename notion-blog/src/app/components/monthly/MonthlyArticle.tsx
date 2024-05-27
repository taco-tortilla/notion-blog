import { ArticleInfo } from '@/app/types';
import Link from 'next/link';

export const MonthlyArticle = ({
  id,
  title,
  description,
  createdAt,
  image,
  tag,
}: ArticleInfo) => {
  return (
    <Link href={`/article/${id}`}>
      <div className="items-center text-center rounded-md hover:bg-gray-100 p-4 md:p-6">
        <div className="bg-gray-200 h-auto rounded-md">
          {image !== '' ? (
            <img
              src={image}
              className="object-cover rounded-md h-60 lg:h-54 w-full"
              alt={title}
            />
          ) : null}
        </div>
        <div className="pt-4">
          <p className="text-xl font-bold py-2">{title}</p>
          <p className="py-2">{description}</p>
          <div className="py-2">
            <span className="border bg-gray-50 rounded-full px-2 py-1 inline-block">
              <span className="text-gray-400"># </span>
              {tag}
            </span>
          </div>
          <p className="text-sm text-gray-400">{createdAt}</p>
        </div>
      </div>
    </Link>
  );
};
