export function ContactMap() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Location</h3>
      <div className="w-full h-64 bg-muted rounded-lg relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.2711116846814!3d37.804363979754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80c8c8c8c8c8%3A0x8c8c8c8c8c8c8c8c!2s269%2024th%20St%2C%20Oakland%2C%20CA%2094612!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
          className="rounded-lg"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
        <div>
          <div className="font-medium text-[#777777]">School District</div>
          <div>Oakland Unified</div>
        </div>
        <div>
          <div className="font-medium text-[#777777]">County</div>
          <div>Alameda</div>
        </div>
        <div>
          <div className="font-medium text-[#777777]">Zoning</div>
          <div>Commercial</div>
        </div>
      </div>
    </div>
  )
}
