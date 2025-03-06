import { Route, Routes } from "react-router";
import Home from "./components/Home";
import CareerAssesment from "./components/Career-assesment";
import Blog from "./components/blog";
import Job from "./components/Jobs";
import CourseAndLearning from "./components/courses-and-learning";
import QuizPage from "./components/quiz";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/career-assesment" element={<CareerAssesment />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/job-oppurtunities" element={<Job />} />
      <Route path="/courses-and-learning" element={<CourseAndLearning />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
};

export default App;
