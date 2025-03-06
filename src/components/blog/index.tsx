import { blogs } from "../../backend/data/blogs";
import Footer from "../Footer";
import Header from "../Header";
import Card from "./Card";

const Blog = () => {
  return (
    <div className="font-sans flex w-full flex-col justify-between">
      <Header />
      <div className="grid grid-cols-3 gap-5 py-10 px-5 max-w-[1200px] w-full mx-auto">
        {blogs.map((blog, index) => (
          <Card description={blog.excerpt} image={blog.image} link={blog.link} title={blog.title} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
