
interface CourseCardProp {
  image: string;
  title: string;
  description: string;
}

const Card = ({ description, image, title }: CourseCardProp) => {
  return (
    <div className="w-80 p-3 bg-white shadow-sm border text-start cursor-pointer rounded-3xl overflow-hidden items-start justify-start transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <img src={image} className="h-48 object-cover w-full rounded-2xl" alt="" />
      <div className="flex flex-col ">
        <h3 className="text-xl  font-medium text-secondary mt-5 mb-2">{title}</h3>
        <p className="text-faded mb-5 ">{description}</p>
      </div>
    </div>
  );
};

export default Card;
