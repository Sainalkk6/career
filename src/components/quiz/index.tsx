import { useState } from "react";
import Header from "../Header";
import LandingPage from "./LandingPage";
import Container from "./Container";
import Result from "./Result";


const QuizPage = () => {
  const [showResult,setShowResult] = useState(false)
  const [score,setScore] = useState(0)
  const [selectedCateg, setSelectedCateg] = useState("");
  const [proceed, setProceed] = useState(false);

  return (
    <div className="font-sans flex w-full flex-col justify-between">
      <Header />
      {proceed ? showResult ? <Result setShowResult={setShowResult} setProceed={setProceed} score={score}/> : <Container setShowResult={setShowResult} score= {score} setScore={setScore} selectedCateg={selectedCateg} /> : <LandingPage setSelectedCateg={setSelectedCateg} setProceed={setProceed} />}
    </div>
  );
};

export default QuizPage;
