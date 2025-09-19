export function ScheduleVisitHero() {
  return (
    <section className="relative py-24 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/schedulevisit.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Schedule A Visit</h1>
        <p className="text-xl">Contact our sales team.</p>
      </div>
    </section>
  )
}
