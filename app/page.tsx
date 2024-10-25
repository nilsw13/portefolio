'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { Github, Linkedin, Mail } from 'lucide-react'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SnakeGameDialog } from '@/components/SnakeGameDialog'

// Simplified Snake game component
const SnakeGame = () => {
  return (
    <div className="w-64 h-64 bg-[#f0ead6] border-2 border-[#1a1a1a]">
      <SnakeGameDialog/>
    </div>
  )
}

// Geometric shape component
export const GeometricShape = ({ className }: { className: string }) => (
  <div className={`absolute pointer-events-none ${className}`} />
)

export default function Component() {
  const [activeSection, setActiveSection] = useState('about')

  const projects = [
    { id: 1, title: "E-commerce Next.js", description: "Une plateforme de commerce électronique construite avec Next.js et Stripe" },
    { id: 2, title: "App de Gestion React", description: "Une application de gestion de tâches avec React et Redux" },
    { id: 3, title: "Portfolio Rétro", description: "Ce portfolio que vous regardez actuellement !" },
    { id: 4, title: "Blog Gatsby", description: "Un blog statique construit avec Gatsby et Contentful" }
    
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact']
      const scrollPosition = window.scrollY

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#e6e0cf] text-[#1a1a1a] font-sans relative overflow-hidden">
      {/* Geometric shapes */}
     

      <header className="border-b-2 border-[#1a1a1a] p-6 flex justify-between items-center bg-[#f0ead6] sticky top-0 z-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#4ecdc4] text-[#f0ead6] flex items-center justify-center font-bold text-xl rounded">
            NW
          </div>
          <span className="font-semibold text-lg">Nils Wenting</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {[
              { name: 'À propos', id: 'about' },
              { name: 'Projets', id: 'projects' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  className={`text-[#1a1a1a] hover:text-[#4ecdc4] ${activeSection === item.id ? 'font-bold' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="p-8 max-w-5xl mx-auto relative">
        <section id="about" className="mb-32 relative flex flex-col gap-8">
          <GeometricShape className="w-12 h-12 bg-[#f7dc6f] opacity-20 rotate-45 -top-6 right-1/4" />
          <div className="text-center mb-8 flex  flex-col gap-4">
            <h1 className="text-6xl font-bold mb-4 text-[#1a1a1a] mt-28">
              Nils Wenting
            </h1>
            <h2 className="text-4xl font-semibold text-[#1a1a1a]">
              Développeur Front-End <span className="text-[#4ecdc4]">Next.js</span> & <span className="text-[#4ecdc4]">React</span>
            </h2>
          </div>
          <Card className="bg-[#f0ead6] border-[#1a1a1a] border-2 shadow-[4px_4px_0px_black] rounded-none p-6 transition-all hover:shadow-[8px_8px_0px_black] hover:-translate-y-1">
            <p className=" text-center font-medium text-md">
              Passionné par la création d'applications web modernes et performantes. 
              Je combine une expérience utilisateur fluide avec un code propre et innovant.
            </p>
          </Card>
        </section>

<div>
        
        <ProjectsSection/>
        
        </div>   

        <section id="contact" className="mb-32 relative">
          <GeometricShape className="w-20 h-20 bg-[#d1548e] opacity-10 rounded-full -top-10 right-0" />
          <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
          <Card className="bg-[#f0ead6] border-[#1a1a1a] border-2 shadow-[4px_4px_0px_black] rounded-none p-6 transition-all hover:shadow-[8px_8px_0px_black] hover:-translate-y-1">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Nom</label>
                <input type="text" id="name" name="name" className="w-full p-2 border-2 border-[#1a1a1a] rounded-none" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 border-2 border-[#1a1a1a] rounded-none" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full p-2 border-2 border-[#1a1a1a] rounded-none" required></textarea>
              </div>
              <Button type="submit" className="bg-[#4ecdc4] text-[#f0ead6] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] hover:-translate-y-0.5 transition-all rounded-none">
                Envoyer le message
              </Button>
            </form>
          </Card>
        </section>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="fixed bottom-4 right-4 bg-[#4ecdc4] text-[#f0ead6] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] hover:-translate-y-0.5 transition-all rounded-none">
              Jouer au Snake
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#f0ead6] border-[#1a1a1a] border-2 shadow-[4px_4px_0px_#d1548e] rounded-none">
            <DialogHeader>
              <DialogTitle>Jeu du Snake</DialogTitle>
            </DialogHeader>
            <SnakeGame />
          </DialogContent>
        </Dialog>
      </main>

      <footer className="border-t-2 border-[#1a1a1a] p-6 bg-[#f0ead6] text-center relative">
        <GeometricShape className="w-16 h-16 bg-[#f7dc6f] opacity-20 rotate-45 -top-8 left-1/4" />
        <div className="flex justify-center space-x-8 mb-4">
          <Link href="#" className="text-[#1a1a1a] hover:text-[#d1548e] transition-colors">
            <Github size={28} />
          </Link>
          <Link href="#" className="text-[#1a1a1a] hover:text-[#4ecdc4] transition-colors">
            <Linkedin size={28} />
          </Link>
          <Link href="#" className="text-[#1a1a1a] hover:text-[#f7dc6f] transition-colors">
            <Mail size={28} />
          </Link>
        </div>
        <p className="text-sm">&copy; 2024 Nils Wenting. Tous droits réservés.</p>
      </footer>
    </div>
  )
}