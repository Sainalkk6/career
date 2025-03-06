import Header from "../Header";
import Content from "./Content";

const CourseAndLearning = () => {
  return (
    <div className="font-sans flex w-full flex-col justify-between items-center text-center">
      <Header />
      <h1 className="text-5xl mt-14 font-semibold mb-5">Recommended Courses</h1>
      <p className="text-lg text-faded mb-10 max-w-[600px]">Explore our recommended courses to upskill and advance in your choosen career path</p>
        <Content />
      
      
    </div>
  );
};

export default CourseAndLearning;
