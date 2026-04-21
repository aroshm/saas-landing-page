interface BlogCardLgProps {
  image: string;
  title: string;
  body: string;
  date: string;
  category: string
}

const BlogCardLg: React.FC<BlogCardLgProps> = ({
  image,
  title,
  body,
  date,
  category,
}) => {
  return (
    <div>
      <img src={image} className="rounded-xl w-full" />

      <p className="text-sm text-gray-500 mt-4">{date} • {category}</p>

      <h3 className="font-semibold mt-2">{title}</h3>

      <p className="text-gray-500 mt-2 text-sm">{body}</p>
    </div>
  );
};

export default BlogCardLg;
