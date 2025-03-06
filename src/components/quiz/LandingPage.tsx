import { SetStateAction, useState } from "react";
import Button from "../courses-and-learning/Button";
import { default as Proceeder } from "../Career-assesment/Button";

interface LandingPageProps {
  setProceed: React.Dispatch<SetStateAction<boolean>>;
  setSelectedCateg: React.Dispatch<SetStateAction<string>>;
  
}

const LandingPage = ({ setProceed, setSelectedCateg }: LandingPageProps) => {
  const [active, setActive] = useState("frontend development");
  const buttons = ["Frontend Development", "Backend Development", "Fullstack Development", "Data Science", "Automation Engineering"];
  const handleClick = () => {
    setSelectedCateg(active);
    setProceed(true);
  };

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img className="w-[20%] max-w-[600px] rounded-lg mb-10" src="/images/quiz.svg" alt="" />
      <h1 className="text-5xl font-semibold text-secondary mb-5">Select the Career path for the Quiz</h1>
      <p className="text-lg text-faded mb-5 max-w-[600px]">Choose the career path you'd like to be tested on. Each career path has a set of 10 questions designed to assess your knowledge and skills. After selecting a career path, you'll be able tot start the quiz and track your progress.</p>
      <div className="grid grid-cols-3 gap-10 mb-10 mx-auto justify-items-center place-items-center place-content-center">
        {buttons.map((button, index) => (
          <Button active={active} setActive={setActive} label={button} key={index} />
        ))}
      </div>
      <Proceeder disabled={false} handleClick={handleClick} label="Proceed" />
    </div>
  );
};

export default LandingPage;
