export function AboutStory() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-[#777777] max-w-2xl mx-auto">
            Founded in 2023, Sundial has called for growth from a small startup to one of the leading land investment
            platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-[#777777] leading-relaxed mb-6">
              Our mission is making land is one of the most significant decisions in anyone's life, which is why we're
              committed to making the process as smooth as possible.
            </p>
            <p className="text-[#777777] leading-relaxed mb-6">
              Our team of experts brings decades of combined experience in real estate, ensuring that every transaction
              is handled with our utmost professionalism and care.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Verified Properties</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Expert Support</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <img
              src="/mission.jpg"
              alt="Our team"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="relative order-2 lg:order-1">
            <img
              src="/vision.jpg"
              alt="Our vision"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-[#777777] leading-relaxed mb-6">
              Our mission is making land is one of the most significant decisions in anyone's life, which is why we're
              committed to making the process as smooth as possible.
            </p>
            <p className="text-[#777777] leading-relaxed mb-6">
              Our team of experts brings decades of combined experience in real estate, ensuring that every transaction
              is handled with our utmost professionalism and care.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Verified Properties</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Expert Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
