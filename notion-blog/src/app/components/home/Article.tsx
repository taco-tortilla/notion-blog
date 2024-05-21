import { ArticleInfo } from '@/app/types';

export const Article = ({
  id,
  title,
  description,
  createdAt,
  image,
}: ArticleInfo) => {
  const pageID = id;
  return (
    <div className="grid grid-rows-3 items-center text-center rounded-md hover:bg-gray-100 p-6">
      <div className="row-span-2 bg-gray-200 min-h-full max-h-full rounded-md">
        {image !== '' ? (
          <img src={image} className="object-none rounded-md" alt={title} />
        ) : (
          ''
        )}
      </div>
      <div className="row-span-1 pt-4">
        <p className="text-xl font-bold py-2">{title}</p>
        <p className="py-4">{description}</p>
        <p className="text-sm text-gray-400">{createdAt}</p>
      </div>
    </div>
  );
};
