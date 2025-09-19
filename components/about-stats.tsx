export function AboutStats() {
  const stats = [
    { number: "10K+", label: "Properties Sold" },
    { number: "15K+", label: "Happy Clients" },
    { number: "50K+", label: "Cities Covered" },
    { number: "90%", label: "Client Satisfaction" },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-[#777777]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
