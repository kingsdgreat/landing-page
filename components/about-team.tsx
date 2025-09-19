import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Facebook } from "lucide-react"

const team = [
  {
    name: "Kingsley Nwaikwu",
    role: "Chief Executive Officer",
    image: "/Kingsley.jpg",
  },
  {
    name: "Sarah Dawson",
    role: "Chief Operations Officer",
    image: "/Sarah.jpg",
  },
  {
    name: "Amir Mohammed",
    role: "Chief Technology Officer",
    image: "/Amir.jpg",
  },
]

export function AboutTeam() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
          <p className="text-[#777777]">
            The brilliant minds behind our success, working tirelessly to revolutionize land investment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-[#777777] text-sm mb-4">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <Linkedin className="h-4 w-4 text-[#777777] hover:text-primary cursor-pointer" />
                  <Twitter className="h-4 w-4 text-[#777777] hover:text-primary cursor-pointer" />
                  <Facebook className="h-4 w-4 text-[#777777] hover:text-primary cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
