export function BuyFromUsHero() {
  return (
    <section className="relative py-24 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/buyfromus.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Buy From Us</h1>
        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
          Blue Diamond Land Company strives to make transactions as easy as possible. In fact, our customers are
          typically surprised at how effortless the process is. If you are interested in purchasing land from us, there
          are two different ways a property can be conveyed or sold to you. They are as follows:
        </p>
      </div>
    </section>
  )
}
