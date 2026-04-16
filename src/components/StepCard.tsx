interface StepCardProps {
    itemNumber: string,
  title: string;
  description: string;
  className: string;
}

const StepCard: React.FC<StepCardProps> = ({
  itemNumber,
  title,
  description,
  className,
}) => {
  return (
    <div className={`absolute ${className}`}>
      <div className="absolute right-0 top-19 -z-1 leading-0 font-extrabold text-[204px] text-gray-200 tracking-normal text-right ">
        {itemNumber}
      </div>
      <div className="flex justify-center items-center w-16 h-16 mb-6 rounded-lg bg-white">
        <div className="w-6 h-6 rounded-xl bg-gray-400"></div>
      </div>
      <h4 className="font-extrabold leading-7">{title}</h4>
      <p className="text-gray-500 text-sm leading-7">{description}</p>
    </div>
  );
};

export default StepCard;
