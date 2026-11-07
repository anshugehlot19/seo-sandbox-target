export const metadata = {
  title: "Acjon - Digital Agency & Creative Portfolio",
  description: "Acjon - Digital Agency & Creative Portfolio HTML Template",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010103] text-white">
      <header className="py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <a href="#" className="text-white text-2xl font-bold">Acjon</a>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="pt-40 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Acjon</h1>
          <p className="text-lg mb-12">
            Digital Agency & Creative Portfolio HTML Template
          </p>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3>Digital Marketing</h3>
              <p>SEO, SMM, Content Marketing</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3>Creative Design</h3>
              <p>Branding, Graphic Design</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3>Web Development</h3>
              <p>Custom Websites, WordPress</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <img src="/imgs/project-1.jpg" alt="" className="w-full" />
              <h3>Trading website</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <p className="text-lg">
            Crafting Digital Experiences That The Inspire & Transform Turning Ideas
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <a href="#" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-500 transition-colors">
            Contact Us
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>2026 Acjon. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
