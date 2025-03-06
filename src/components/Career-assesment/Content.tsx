import { SetStateAction, useEffect, useState } from "react";
import { questions } from "../../backend/data/questions"; // Data import as provided
import Button from "./Button";

interface ContentProps {
  setCareer: React.Dispatch<SetStateAction<string>>;
  setShowResult: React.Dispatch<SetStateAction<boolean>>;
}

const Content = ({ setCareer, setShowResult }: ContentProps) => {
  const [navigate, setNavigate] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const [frontendScore, setFrontendScore] = useState(0);
  const [backendScore, setBackendScore] = useState(0);
  const [fullStackScore, setFullStackScore] = useState(0);
  const [dataScienceScore, setDataScienceScore] = useState(0);
  const [automationScore, setAutomationScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(6 * 60);
  const [selectedOptions, setSelectedOptions] = useState<number[]>(Array(questions.length).fill(-1));

  useEffect(() => {
    if (navigate === 0) setHasPrev(false);
    else setHasPrev(true);
  }, [navigate]);

  useEffect(() => {
    if (timeLeft < 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handlePrev = () => {
    if (navigate > 0) setNavigate(navigate - 1);
  };

  const handleSelection = (index: number) => {
    setSelectedOptions((prev) => {
      const updated = [...prev];
      updated[navigate] = index;
      return updated;
    });

    if (index === 0) setFrontendScore((prev) => prev + 1);
    else if (index === 1) setBackendScore((prev) => prev + 1);
    else if (index === 2) setFullStackScore((prev) => prev + 1);
    else if (index === 3) setDataScienceScore((prev) => prev + 1);
    else if (index === 4) setAutomationScore((prev) => prev + 1);

    if (navigate < questions.length - 1) {
      setNavigate(navigate + 1);
    }
  };

  const handleFinish = () => {
    const scores = [
      { career: "Frontend Developer", score: frontendScore },
      { career: "Backend Developer", score: backendScore },
      { career: "Data Science", score: dataScienceScore },
      { career: "Fullstack Developer", score: fullStackScore },
      { career: "Automation Engineer", score: automationScore },
    ];
    const topCareer = scores.reduce((prev, current) => (current.score > prev.score ? current : prev));
    setCareer(topCareer.career);
    setShowResult(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const renderProgressBar = () => <div style={{ width: `${(navigate / questions.length) * 100}%` }} className="h-2 bg-primary mb-2 transition-all duration-300 rounded-[99px]" />;
  const renderTimer = () => <div className="text-right font-medium mb-2">{formatTime(timeLeft)} minutes left</div>;
  const renderQuestion = (question: string, options: string[]) => (
    <div className="mb-10">
      <p className="mb-5 text-2xl font-medium">{question}</p>
      <div className="w-full m-auto">
        <ul className="list-none p-0">
          {options.map((option, index) => (
            <li key={index} className="mb-2 border border-[#d8d8d8] p-2 rounded-lg">
              <input checked={selectedOptions[navigate] === index} onChange={() => handleSelection(index)} id={`options${index}`} className="mr-2" type="radio" name="options" value={option} />
              <label htmlFor={`options${index}`}>{option}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="w-[50%] m-auto bg-white p-6 mt-12 border border-[#eee] rounded-2xl">
      {renderProgressBar()}
      {renderTimer()}
      {renderQuestion(questions[navigate].question, questions[navigate].options)}
      <div className="flex justify-between">
        <Button disabled={!hasPrev} handleClick={handlePrev} label="Previous" />
        {navigate === questions.length - 1 && <Button disabled={false} handleClick={handleFinish} label="Finish" />}
      </div>
    </div>
  );
};

export default Content;
