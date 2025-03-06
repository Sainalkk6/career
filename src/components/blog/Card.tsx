interface Blogcard {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Card = ({ description, image, title }: Blogcard) => {
  return (
    <div className="bg-white rounded-lg shadow-sm transition-all cursor-pointer duration-300 hover:shadow-lg border group">
      <div className="overflow-hidden h-52 flex object-center">
      <img src={image} className="h-52 w-full object-cover object-center group-hover:scale-105 duration-300 transition-all" alt="" />
      </div>
      <div className="p-5">
        <h3 className="text-xl mb-2 text-secondary">{title}</h3>
        <p className="text-faded mb-4 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
