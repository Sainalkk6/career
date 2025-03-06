import { useState } from "react";
import Header from "../Header";
import Content from "./Content";
import Result from "./Result";
import Prepage from "./Prepage";

const CareerAssesment = () => {
  const [showResult, setShowResult] = useState(false);
  const [career, setCareer] = useState("");
  const [proceed, setProceed] = useState(false);
  return (
    <div className="font-sans flex w-full flex-col justify-between">
      <Header />
      {proceed ? showResult ? <Result career={career} /> : <Content setCareer={setCareer} setShowResult={setShowResult} /> : <Prepage setProceed={setProceed} />}
    </div>
  );
};

export default CareerAssesment;
