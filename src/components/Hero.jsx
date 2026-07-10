export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          John Doe
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
          Full-stack web developer and freelancer crafting beautiful, responsive digital experiences
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl">
          Get In Touch
        </button>
      </div>
    </section>
  )
}
