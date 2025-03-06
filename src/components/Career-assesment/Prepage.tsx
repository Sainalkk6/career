import { SetStateAction } from "react";

interface PrepageProps {
  setProceed: React.Dispatch<SetStateAction<boolean>>;
}

const Prepage = ({ setProceed }: PrepageProps) => {
  const handleClick = () => setProceed(true);
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img className="w-[20%] max-w-[600px] rounded-lg mb-10" src="/images/pre.jpg" alt="" />
      <h1 className="text-5xl font-semibold text-secondary mb-5">Discover your Ideal Career</h1>
      <p className="text-lg text-faded mb-5 max-w-[600px]">Take first step toward a fulfilling career. Our personalized career assessment is designed to help you explore your strengths, interests, and aspirations.</p>
      <button className="py-3 border px-7 bg-button-primary rounded text-lg font-medium transition-colors duration-300 text-white hover:text-black hover:bg-white" onClick={handleClick}>
        Start Assessment
      </button>
    </div>
  );
};

export default Prepage;
