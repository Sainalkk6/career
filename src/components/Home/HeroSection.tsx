
const HeroSection = () => {
  return (
    <section className="flex items-center justify-center gap-16 p-[100px] bg-white text-secondary w-full">
        <div className="max-w-[50%]">
            <h1 className="text-7xl font-semibold mb-5">
                <span className="text-green">Design</span><br/>
                for everyone
            </h1>
            <p className="text-2xl mb-7">Find your next job with Aspire Guide</p>
            <button className="flex items-center justify-center py-3 px-7 bg-primary text-white rounded-[4px] font-medium transition-colors duration-300 hover:bg-button-primary">Get Started</button>
        </div>
        <img src="/images/hero img (1).png" className="w-[30%] h-auto" alt="" />
    </section>
  )
}

export default HeroSection
