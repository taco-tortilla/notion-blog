type Props = {
  title: string;
  url: string;
  description: string;
  createdAt: string;
};
export function ArticleHeader({ title, url, description, createdAt }: Props) {
  return (
    <div className="text-center pb-16">
      <div className=" bg-gray-200">
        <img
          src={url}
          className="object-cover rounded-md h-60 lg:h-80 w-full"
          alt={title}
        />
      </div>
      <div className="pt-10 pb-5">
        <p className="text-2xl font-bold">{title}</p>
      </div>
      <div className="pb-3">
        <p>{description}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">{createdAt}</p>
      </div>
    </div>
  );
}
