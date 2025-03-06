import { ChangeEvent, useState } from "react";
import { jobData } from "../../backend/data/jobs";
import Card from "./Card";

const Content = () => {
  const [filter, setFilter] = useState("");
  const [temp, setTemp] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTemp(e.target.value);
  const handleClick = () => setFilter(temp);

  const jobs = filter.length > 0 ? jobData.filter((job) => job.company.toLowerCase().includes(filter.toLowerCase()) || job.position.toLowerCase().includes(filter.toLowerCase())) : jobData;

  return (
    <>
      <div className="flex justify-between w-full mx-auto max-w-[800px] my-5">
        <input type="text" placeholder="Search for jobs..." onChange={handleChange} className="w-[80%] p-2 border border-[#ccc] rounded-md outline-none" />
        <button onClick={handleClick} className="flex items-center justify-center bg-primary hover:bg-button-primary py-2 px-5 text-white rounded outline-none">
          Search
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto my-5">
        {jobs.map((job, index) => (
          <Card applyLink={job.applyLink} company={job.company} companyIcon={job.companyIcon} description={job.description} location={job.location} position={job.position} key={index} />
        ))}
      </div>
    </>
  );
};

export default Content;
