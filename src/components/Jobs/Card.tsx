
interface CardProps {
    company: string;
    position: string;
    location: string;
    description: string;
    companyIcon: string;
    applyLink: string;

}

const Card = ({applyLink,company,companyIcon,description,location,position}:CardProps) => {

    const renderText = (label:string)=> <p className="text-sm text-[#555]">{label}</p>

  return (
    <div className="bg-white p-5 border rounded-lg shadow-md cursor-default hover:shadow-2xl transition-all duration-300 flex flex-col gap-4">
        <img src={companyIcon} alt="" className="w-12 h-12 rounded-[50%] flex justify-center items-center" />
        <h3 className="text-lg font-medium">{position}</h3>
        <p className="text-sm text-[#555]"><strong>{company}</strong></p>
        {renderText(location)}
        {renderText(description)}
        <a href={applyLink} className="p-2 bg-primary text-white text-center hover:bg-button-primary rounded-md text-sm w-full">Apply</a>
    </div>
  )
}

export default Card
