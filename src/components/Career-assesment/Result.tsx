import { useNavigate } from "react-router";
import Button from "./Button";

const Result = ({ career }: { career: string }) => {
  const navigate = useNavigate()
  console.log(career);
  return (
    <div className="w-[60%] m-auto h-[80vh] bg-white p-6 mt-[50px] border rounded-lg shadow-md items-center justify-center">
      <div className="flex flex-col w-full gap-6 items-center justify-center">
        <img src="/images/result.png" alt="" className="h-72" />
        <h2 className="text-3xl">Congratulations on completing your Assessment!</h2>
        <div className="flex gap-2 flex-col items-center justify-center">
          <h4 className="text-2xl">Your career path based on your response is :</h4>
          <span className="text-3xl font-medium">{career}</span>
        </div>
        <div className="flex mt-10 gap-10">
          <Button disabled={false} handleClick={() => navigate("/courses-and-learnings")} label="Upskill" />
          <Button disabled={false} handleClick={() => navigate("/job-oppurtunities")} label="Find Jobs" />
        </div>
      </div>
    </div>
  );
};

export default Result;
