
const PartnersSection = () => {
    const partners = ["https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png","https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg","https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg","https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg","https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg","https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"]
    const renderImage = (link:string,key:number)=> <img key={key} src={link} className="max-w-[100px] max-h-14 object-contain transition-all duration-200" alt="" />

  return (
    <section className="text-center bg-white p-[60px]">
        <h2 className="text-4xl font-extrabold mb-5">Learn from 350+ top universities and companies</h2>
        <p className="text-lg mb-10 text-faded">We collaborate with the best in the industry to bring you world-class learning oppportunities</p>
        <div className="grid gap-5 mx-32" style={{gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))"}}>
         {partners.map((img,index)=> renderImage(img,index))}
        </div>
    </section>
  )
}

export default PartnersSection
