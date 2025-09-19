import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#051D45] text-white">
      <div className="max-w-7xl mx-auto py-12 px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <img src="/logo-light.png" alt="Sundial Lands" className="h-10" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in finding the perfect land property for your needs. Join thousands of customers who
              found their dream properties with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-300 hover:text-primary">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>269 24th St, Suite 920</p>
              <p>Oakland, CA. 94216</p>
              <p>offers@sundiallands.com</p>
              <p>+32 341025000</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">X (Twitter)</p>
              <p className="text-gray-300">Instagram</p>
              <p className="text-gray-300">Facebook</p>
              <p className="text-gray-300">LinkedIn</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© Copyright 2025 by Chibuzo Anthony</p>
        </div>
      </div>
    </footer>
  )
}
