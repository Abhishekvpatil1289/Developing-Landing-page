const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="container mx-auto flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Our Landing Page</h1>
          <p className="mt-4">This is a short description of what we do.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
