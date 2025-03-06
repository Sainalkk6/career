import { useLocation } from "react-router";

const Header = () => {
  const route = useLocation();

  const navItems: { label: string; link: string }[] = [
    { label: "Career Assessment", link: "/career-assesment" },
    { label: "Courses & Learning", link: "/courses-and-learning" },
    { label: "Quiz", link: "/quiz" },
    { label: "Job Oppurtunities", link: "/job-oppurtunities" },
    { label: "Blog", link: "/blog" },
    { label: "About Us", link: "/about-us" },
  ];

  return (
    <div className="flex w-full justify-between items-center py-5 px-10 bg-white shadow-md sticky top-0 z-10">
      <a href="/" className="text-2xl font-medium text-primary">
        Aspire.Guide
      </a>
      <div className="flex gap-7">
        {navItems.map((item, index) => (
          <a key={index} href={item.link} className={`font-medium text-base text-secondaryansition-colors duration-300 hover:text-primary ${route.pathname === item.link && "text-primary"}`}>
            {item.label}
          </a>
        ))}
      </div>
      <button className="flex items-center justify-center py-2 px-5 bg-primary text-white rounded-sm text-base font-medium transition-colors duration-300  hover:bg-button-primary">Get Started</button>
    </div>
  );
};

export default Header;
