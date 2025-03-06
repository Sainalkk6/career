import { SetStateAction, useEffect, useState } from "react";
import { testQuestions } from "../../backend/data/testQuestions";
import Button from "../Career-assesment/Button";

interface ContainerProps {
  selectedCateg: string;
  score: number;
  setScore: React.Dispatch<SetStateAction<number>>;
  setShowResult:React.Dispatch<SetStateAction<boolean>>
}

const Container = ({ selectedCateg,setShowResult, setScore }: ContainerProps) => {
  const [navigate, setNavigate] = useState(0);
  const [hasPrev, setHasPrev] = useState(false);
  const [timeLeft, setTimeLeft] = useState(6 * 60);
  const questions = testQuestions.filter((question) => question.category.toLowerCase() === selectedCateg);
  const totalQuestions = questions[0]?.questions.length || 0;
  const [selectedOptions, setSelectedOptions] = useState<number[]>(Array(totalQuestions).fill(-1));

  useEffect(() => {
    setHasPrev(navigate > 0);
  }, [navigate]);

  useEffect(() => {
    if (timeLeft < 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handlePrev = () => {
    setNavigate(navigate - 1);
  };

  const handleSelection = (index: number) => {
    setSelectedOptions((prev) => {
      const updated = [...prev];
      updated[navigate] = index;
      return updated;
    });

    if (questions[0].questions[navigate].options[index] === questions[0].questions[navigate].answer) {
      setScore((prev) => prev + 1);
    }
    if (navigate < totalQuestions - 1) {
      setNavigate(navigate + 1);
    }
  };

  const handleFinish = () => setShowResult(true);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

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
      {renderTimer()}
      {renderQuestion(questions[0].questions[navigate].question, questions[0].questions[navigate].options)}
      <div className="flex justify-between">
        <Button disabled={!hasPrev} handleClick={handlePrev} label="Previous" />
        {navigate === totalQuestions - 1 && <Button disabled={false} handleClick={handleFinish} label="Finish" />}
      </div>
    </div>
  );
};

export default Container;
