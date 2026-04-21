interface ServiceCardProps {
    title: string,
    subTitle: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({title, subTitle}) => {
  return (
    <div className='px-8 py-6 md:px-12 md:py-10 text-center bg-custom-grey rounded-3xl'>
      <h3 className='text-[38px] font-extrabold mb-5'>{title}</h3>
      <p className='mb-9 text-hero-text'>
        {subTitle}
      </p>
      <button className=" bg-indigo-600 text-white px-13 py-5 rounded-xl cursor-pointer">Read More</button>
    </div>
  );
}

export default ServiceCard