
const Footer = () => {
  
  const links = ["Career Assessment", "Mentorship", "Courses & Learning", "Job Oppurtunities", "Resources" , "Industry Insights", "About Us","Blog","Contact"]
  const keyTechs = ["Python","SQL","Microsoft Excel","Power BI","Tableau","R Programming","Git","Docker","AWS","TensorFlow"]
  const keySkills = ["Data Analytics","Artificial Intelligence","Cyber Security","Digital Marketing","Machine Learning", "Statistical Analysis","Database Management","Web Development","Financial Modeling","Business Analysis"]
  const industrySolutions = ["Healthcare Analytics","Sales","Digital Transformation","Supply Chain","Marketing Analytics","HR Analytics","Social Media Marketing","Risk Management","Sustainability","E-commerce"]
  const careerPaths = ["Data Scientist","Data Analyst","Machine Learning Engineer","Full Stack Developer","Project Manager","Product Manager","Data Engineer","Digital Marketing Specialist","Cybersecurity Analyst"]
  
  const renderHeader = (label:string)=> <h4 className="text-lg font-semibold mb-2">{label}</h4>
  const renderListItem = (label:string,key:number)=> <li className="list-none text-sm mb-2" key={key}>{label}</li>

  return (
    <footer className="text-center py-5 bg-[#f1f1f1] text-sm text-faded">
        <div className="flex flex-wrap justify-between gap-10 mx-auto px-6">
            <a href="/" className="text-2xl text-primary font-semibold">Aspire.Guide</a>
            <div>
              {renderHeader("Quick Links")}
              <div className="flex flex-col">
              {links.map((link,index)=>(
                <span className="text-secondary capitalize mb-2 text-sm hover:text-primary" key={index}>{link}</span>
              ))}
              </div>
            </div>

            <div>
              {renderHeader("Key Technologies")}
              <ul>
                {keyTechs.map((item,index)=> renderListItem(item,index))}
              </ul>
            </div>

            <div>
              {renderHeader("Essential Skills")}
              {keySkills.map((item,index)=>renderListItem(item,index))}
            </div>

            <div>
              {renderHeader("Industry Solutions")}
              {industrySolutions.map((item,index)=> renderListItem(item,index))}
            </div>

            <div>
              {renderHeader("Career Paths")}
              {careerPaths.map((item,index)=>renderListItem(item,index))}
            </div>
        </div>
        <div className="text-center mt-7 text-sm text-faded">
          <p>&copy; 2025 Aspire.Guide. All rights reserved.</p>
        </div>
      
    </footer>
  )
}

export default Footer
