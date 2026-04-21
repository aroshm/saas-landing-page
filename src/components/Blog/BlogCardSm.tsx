interface BlogCardSmProps {
  image: string;
  title: string;
  date: string;
  category: string;
}

const BlogCardSm: React.FC<BlogCardSmProps> = ({
  image,
  title,
  date,
  category,
}) => {
  return (
    <div className="flex gap-4 items-center py-4 border-b border-gray-300">
      <img src={image} className="w-16 h-16 rounded-lg object-cover" />

      <div>
        <p className="text-xs text-gray-500">
          {date} • {category}
        </p>

        <p className="text-sm font-medium">{title}</p>
      </div>
    </div>
  );
};

export default BlogCardSm;
