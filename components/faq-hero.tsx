export function FAQHero() {
  return (
    <section className="relative py-24 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/faq-hero.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-xl">Find answers to common questions about our land properties and purchasing process.</p>
      </div>
    </section>
  )
}
