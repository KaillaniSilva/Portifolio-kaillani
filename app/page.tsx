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

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
            Serviços <ArrowRight className="w-8 h-8" />
          </h2>
          <p className="text-[#8c8c8c] text-lg">Serviços e tecnologias</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-[#24275e] border-[#3e3e3e] p-6">
            <CardContent className="p-0 space-y-3">
              <h3 className="text-xl font-bold text-white">UX/UI</h3>
              <p className="text-[#8c8c8c] text-sm leading-relaxed">
                Planejamento e criação de interfaces de aplicação com uma experiência intuitiva acessível e visualmente
                atraente à identidade da marca.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#24275e] border-[#3e3e3e] p-6">
            <CardContent className="p-0 space-y-3">
              <h3 className="text-xl font-bold text-white">Landing Page</h3>
              <p className="text-[#8c8c8c] text-sm leading-relaxed">
                Criação de páginas estratégicas voltadas para conversão, como vendas, capturas de leads ou campanhas
                específicas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#24275e] border-[#3e3e3e] p-6">
            <CardContent className="p-0 space-y-3">
              <h3 className="text-xl font-bold text-white">Layouts para Sites</h3>
              <p className="text-[#8c8c8c] text-sm leading-relaxed">
                Desenvolvimento do visual completo das páginas, com foco em estética, usabilidade e identidade da marca.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#24275e] border-[#3e3e3e] p-6">
            <CardContent className="p-0 space-y-3">
              <h3 className="text-xl font-bold text-white">Design Responsivo</h3>
              <p className="text-[#8c8c8c] text-sm leading-relaxed">
                Adaptação do site para funcionar perfeitamente em diferentes dispositivos (desktop, tablet, mobile).
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#24275e] border-[#3e3e3e] p-6">
            <CardContent className="p-0 space-y-3">
              <h3 className="text-xl font-bold text-white">Web Branding Visual</h3>
              <p className="text-[#8c8c8c] text-sm leading-relaxed">
                Definição da identidade visual digital: cores, tipografia, ícones e elementos gráficos alinhados à
                marca.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#24275e] border-[#3e3e3e] p-6">
            <CardContent className="p-0 space-y-3">
              <h3 className="text-xl font-bold text-white">App Design</h3>
              <p className="text-[#8c8c8c] text-sm leading-relaxed">
                Design de interfaces para aplicativos móveis (iOS e Android), com foco na usabilidade, estilo moderno e
                experiência fluida.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tools and Technologies Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
            Ferramentas e Tecnologias <ArrowRight className="w-8 h-8" />
          </h2>
        </div>

        <div className="space-y-12">
          {/* First row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="Figma" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">90%</div>
              </div>
              <p className="text-white font-medium">Figma</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="Photoshop" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">70%</div>
              </div>
              <p className="text-white font-medium">Photoshop</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="Illustrator" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">70%</div>
              </div>
              <p className="text-white font-medium">Illustrator</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="Canva" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">90%</div>
              </div>
              <p className="text-white font-medium">Canva</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="Elementor" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">90%</div>
              </div>
              <p className="text-white font-medium">Elementor</p>
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 justify-items-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="HTML" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">90%</div>
              </div>
              <p className="text-white font-medium">HTML</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="CSS" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">70%</div>
              </div>
              <p className="text-white font-medium">CSS</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="JavaScript" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">70%</div>
              </div>
              <p className="text-white font-medium">JavaScript</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="Tailwind" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">80%</div>
              </div>
              <p className="text-white font-medium">Tailwind</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="GitHub" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">90%</div>
              </div>
              <p className="text-white font-medium">GitHub</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-3 relative">
                <Image src="/placeholder.svg?height=32&width=32" alt="WordPress" width={32} height={32} />
                <div className="absolute -bottom-2 bg-[#7341ff] text-white text-xs px-2 py-1 rounded-full">85%</div>
              </div>
              <p className="text-white font-medium">WordPress</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
            Sobre mim <ArrowRight className="w-8 h-8" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-[#7341ff] to-[#c0b4ff] p-2">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Kaillani About"
                  width={300}
                  height={300}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Skill badges around the image */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#7341ff] hover:bg-[#a06beb] text-white">Designer System</Badge>
              </div>
              <div className="absolute top-1/4 -right-8">
                <Badge className="bg-[#7341ff] hover:bg-[#a06beb] text-white">WebDesigner</Badge>
              </div>
              <div className="absolute bottom-1/4 -right-8">
                <Badge className="bg-[#7341ff] hover:bg-[#a06beb] text-white">UX Designer</Badge>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#7341ff] hover:bg-[#a06beb] text-white">Branding Visual</Badge>
              </div>
              <div className="absolute bottom-1/4 -left-8">
                <Badge className="bg-[#7341ff] hover:bg-[#a06beb] text-white">App Designer</Badge>
              </div>
              <div className="absolute top-1/4 -left-8">
                <Badge className="bg-[#7341ff] hover:bg-[#a06beb] text-white">Prototipagem</Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Quem é a Kaillani?</h3>
            <div className="space-y-4 text-[#8c8c8c] leading-relaxed">
              <p>
                Eu sou a Kaillani, tenho 21 anos e moro em São Paulo. Atualmente estudo Web Design na FIAP, onde
                desenvolvo um universo que tem tudo a ver comigo: criatividade, tecnologia e crescimento profissional.
              </p>
              <p>
                Sempre fui muito curiosa. Descobri que adoro entender como as coisas funcionam e isso sempre foi
                interessante para mim. Essa curiosidade me levou a me apaixonar pelo design e pela tecnologia, onde
                posso unir criatividade com funcionalidade.
              </p>
              <p>
                Além disso, sou apaixonada por esportes (sei fazer parte da minha rotina e também me ajudam muito sobre
                disciplina, foco e trabalho em equipe - habilidades que levo pro meu trabalho como designer).
              </p>
              <p>
                Acredito que o design vai muito além da estética. Para mim, é sobre criar soluções visuais que fazem
                sentido e causam impacto. Estou sempre em movimento, seja aprendendo algo novo ou criando algo incrível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
            Contato <ArrowRight className="w-8 h-8" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Fale comigo para fazer seus novos projetos!</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-[#7341ff]">📞</div>
                <span className="text-[#8c8c8c]">(11) 94770-7850</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-[#7341ff]">✉️</div>
                <span className="text-[#8c8c8c]">contato.nebulacode@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-[#7341ff]" />
                <span className="text-[#8c8c8c]">Ka Bartholomeu</span>
              </div>
            </div>

            <Button className="bg-white text-[#070707] hover:bg-[#d9d9d9] rounded-full px-8 w-full">
              Enviar mensagem
            </Button>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-[#7341ff] to-[#c0b4ff] p-2">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Kaillani Contact"
                width={300}
                height={300}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3000b4] py-4 text-center">
        <p className="text-sm text-white">Todos os direitos reservados 2025 - Kaillani</p>
      </footer>
    </div>
  )
}
