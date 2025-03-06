import { useNavigate } from "react-router";
import Button from "../Career-assesment/Button";
import { SetStateAction } from "react";

interface ResultProps {
  score:number;
  setProceed:React.Dispatch<SetStateAction<boolean>>
  setShowResult:React.Dispatch<SetStateAction<boolean>>

  
}

const Result = ({score,setProceed,setShowResult}:ResultProps) => {
  
  const navigate = useNavigate()
  return (
    <div className="w-[60%] m-auto h-[80vh] bg-white p-6 mt-[50px] border rounded-lg shadow-md items-center justify-center">
      <div className="flex flex-col w-full gap-6 items-center justify-center">
        <img src="/images/result.png" alt="" className="h-72" />
        <h2 className="text-3xl">Your Quiz Results Are In!</h2>
        <div className="flex gap-2 flex-col items-center justify-center">
          <h4 className="text-2xl">You scored {score} out of 10. Great effort!</h4>
        </div>
        <div className="flex mt-10 gap-10">
          <Button disabled={false} handleClick={() => navigate("/")} label="Back Home" />
          <Button disabled={false} handleClick={() =>{
            setProceed(false)
            setShowResult(false)
          } } label="Try again!" />
        </div>
      </div>
    </div>
  );
}

export default Result
