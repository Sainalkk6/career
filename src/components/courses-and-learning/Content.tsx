import { useEffect, useState } from "react";
import Button from "./Button";
import { courses } from "../../backend/data/courses";
import Card from "./Card";

const Content = () => {
  const [active, setActive] = useState("all");
  const buttons = ["All", "Frontend Development", "Backend Development", "Full Stack Development", "Data Science", "Automation Engineering"];
  const [filtered, setFiltered] = useState(courses);
  const filterCourses = () => {
    if (active === "all") {
      setFiltered(courses);
    } else {
      const filteredCourses = courses.filter((course) => course["Career Path"].toLowerCase() === active);
      setFiltered(filteredCourses);
    }
  };

  useEffect(() => {
    filterCourses();
  }, [active]);

  console.log({ filtered });

  return (
    <>
      <div className="flex gap-5">
        {buttons.map((button, index) => (
          <Button active={active} label={button} setActive={setActive} key={index} />
        ))}
      </div>

      <div className="grid grid-cols-3 justify-center gap-7  my-10">
        {filtered.map((course,index)=> <Card description={course.Description} image={course["Image URL"]} title={course["Course Title"]} key={index}/>)}
      </div>
    </>
  );
};

export default Content;
