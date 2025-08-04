import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Instagram, ArrowRight } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Dr. Jose Alberto",
      description: "Site para psicólogo, com foco em presença digital, agendamentos e credibilidade profissional.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "Landing Page",
      description:
        "Landing page para apresentação de curso, com foco em conversão e apresentação clara dos benefícios.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "E-commerce Agência",
      description: "Loja virtual para agência de viagens, com foco em reservas rápidas e visual imersivo dos destinos.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "E-commerce Viagens",
      description: "Site para agência de viagens, com foco em destinos, pacotes e atendimento personalizado.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "Portfólio Dev",
      description:
        "Site portfólio para desenvolvedor, com foco em apresentação de projetos, stack e identidade profissional.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "E-commerce Moda",
      description: "Loja virtual elegante e responsiva, com foco em estilo, navegação intuitiva e conversão.",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
  ]

  const services = ["App Design", "Website Design", "Prototipagem", "Design Responsivo", "Design"]

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      {/* Header */}
      <header className="bg-[#3000b4] rounded-full mx-6 mt-6 px-8 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold">Kaillani</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="hover:text-[#c0b4ff] transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-[#c0b4ff] transition-colors">
              Projetos
            </Link>
            <Link href="#" className="hover:text-[#c0b4ff] transition-colors">
              Serviços
            </Link>
            <Link href="#" className="hover:text-[#c0b4ff] transition-colors">
              Sobre
            </Link>
          </div>
          <Button className="bg-white text-[#3000b4] hover:bg-[#d9d9d9] rounded-full px-6">Contato</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-[#8c8c8c] text-lg">Olá, Seja Bem-vindo(a)</p>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Sou a <span className="text-[#7341ff]">Kaillani</span>,<br />
                WebDesigner &<br />
                Designer UX/UI
              </h1>
            </div>
            <div className="flex gap-4">
              <Button className="bg-[#7341ff] hover:bg-[#a06beb] rounded-full px-8">Projetos</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#070707] rounded-full px-8 bg-transparent"
              >
                Sobre
              </Button>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-[#8c8c8c] hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#8c8c8c] hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#8c8c8c] hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2c0-2.761-2.238-5-5-5s-5 2.239-5 5v2h-3v15h20v-15zm-8 0h-4v-2c0-1.103.897-2 2-2s2 .897 2 2v2z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-[#7341ff] to-[#c0b4ff] p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#a06beb] to-[#d1b3ff] p-2">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Kaillani Profile"
                    width={300}
                    height={300}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-[#7341ff] to-[#a06beb] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {services.map((service, index) => (
              <div key={index} className="text-lg font-medium">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
            Meus Projetos <ArrowRight className="w-8 h-8" />
          </h2>
          <p className="text-[#8c8c8c] text-lg">WebDesigner & Design UX/UI</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-[#24275e] border-[#3e3e3e] overflow-hidden">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-[#8c8c8c] text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      className={`text-xs px-3 py-1 rounded-full ${
                        tag === "HTML"
                          ? "bg-orange-500 hover:bg-orange-600"
                          : tag === "CSS"
                            ? "bg-blue-500 hover:bg-blue-600"
                            : tag === "Bootstrap"
                              ? "bg-[#7341ff] hover:bg-[#a06beb]"
                              : "bg-yellow-500 hover:bg-yellow-600"
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-white text-[#070707] hover:bg-[#d9d9d9] rounded-full px-8">Ver mais</Button>
        </div>
      </section>
    </div>
  )
}
