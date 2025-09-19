export function AboutHero() {
  return (
    <section className="relative py-24 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/about-hero.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Your Trusted Partner In Land Investment</h1>
        <p className="text-xl leading-relaxed text-balance">
          We're on a mission to make land investment easy, accessible, transparent and hassle-free for everyone.
        </p>
      </div>
    </section>
  )
}
