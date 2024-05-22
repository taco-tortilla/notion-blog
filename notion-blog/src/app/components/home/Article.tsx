import { ArticleInfo } from '@/app/types';
import Link from 'next/link';

export const Article = ({
  id,
  title,
  description,
  createdAt,
  image,
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
          ) : (
            ''
          )}
        </div>
        <div className="pt-4">
          <p className="text-xl font-bold py-2">{title}</p>
          <p className="py-4">{description}</p>
          <p className="text-sm text-gray-400">{createdAt}</p>
        </div>
      </div>
    </Link>
  );
};
