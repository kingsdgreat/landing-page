export function ContactHero() {
  return (
    <section className="relative py-24 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/contact-hero.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
        <p className="text-xl">We'd love to hear from you. Please fill out this form or shoot us an email.</p>
      </div>
    </section>
  )
}
