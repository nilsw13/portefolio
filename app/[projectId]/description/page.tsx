import Image from 'next/image'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import TechBadge from '@/components/Badge'
import { ProjectsSection } from '@/components/ProjectsSection'



export default function ProjectDetails() {
  return (
    <div className="min-h-screen bg-[#f0ead6] text-black p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" className="mb-6 text-black hover:bg-[#5eead4] hover:text-black transition-colors">
          <ChevronLeft className="mr-2 h-4 w-4" />
          <a href="/">
          Retour aux projets
          </a>
        </Button>
        
        <h1 className="text-4xl font-bold mb-4">Studio AI</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <TechBadge name='NextJs'/>
            <TechBadge name='Prisma'/>
            <TechBadge name='Stripe'/>
            <TechBadge name='Replicate API'/>
          
        </div>
        
        <div className="mb-8  bg-[#f0ead6] border-[#1a1a1a] border-2 shadow-[4px_4px_0px_#d1548e] rounded-none p-6 transition-all hover:shadow-[8px_8px_0px_#d1548e] hover:-translate-y-1 h-auto">
          <h2 className="text-2xl font-semibold mb-4">Aperçu du projet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Image
              src="/placeholder.svg"
              alt="Studio AI Screenshot 1"
              width={400}
              height={300}
              className="border rounded-lg  border-[#1a1a1a]  shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] hover:-translate-y-0.5 transition-all "
            />
            <Image
              src="/placeholder.svg"
              alt="Studio AI Screenshot 2"
              width={400}
              height={300}
              className="border border-[#1a1a1a]  shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] hover:-translate-y-0.5 transition-all rounded-lg"
            />
          </div>
        </div>
        
        <div className="mb-8 bg-[#f0ead6] border-[#1a1a1a] border-2 shadow-[4px_4px_0px_#d1548e] rounded-none  transition-all hover:shadow-[8px_8px_0px_#d1548e] hover:-translate-y-1 h-auto p-4">
          <h2 className="text-2xl font-semibold mb-4">Besoins du client</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>{}</li>
          </ul>
        </div>
        
        <div className="mb-8 bg-[#f0ead6] border-[#1a1a1a] border-2 shadow-[4px_4px_0px_#d1548e] rounded-none p-6 transition-all hover:shadow-[8px_8px_0px_#d1548e] hover:-translate-y-1 h-auto p-4 p-4">
          <h2 className="text-2xl font-semibold mb-4">Description du projet</h2>
          <p className="text-lg leading-relaxed">
            Studio AI est une plateforme SaaS innovante qui permet aux utilisateurs de générer des images personnelles à l'aide de l'intelligence artificielle. Le projet a été développé en utilisant Next.js pour le front-end, offrant une expérience utilisateur fluide et réactive. Prisma a été utilisé pour la gestion de la base de données, assurant une interaction efficace avec les données des utilisateurs et des images générées.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            L'interface utilisateur a été conçue pour être intuitive, permettant aux utilisateurs de facilement personnaliser leurs demandes d'images et de visualiser les résultats en temps réel. Un système de galerie a été implémenté pour que les utilisateurs puissent sauvegarder, organiser et partager leurs créations.
          </p>
        </div>
        
        <div className="bg-[#f0ead6] border-[#1a1a1a] border-2 shadow-[4px_4px_0px_black] rounded-none p-6 transition-all hover:shadow-[8px_8px_0px_black] hover:-translate-y-1 h-auto p-4p-4">
          <h2 className="text-2xl font-semibold mb-4">Technologies utilisées</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Next.js pour le développement front-end</li>
            <li>Prisma pour la gestion de la base de données</li>
            <li>API d'IA pour la génération d'images</li>
            <li>Stripe pour l'intégration des paiements</li>
            <li>Vercel pour le déploiement et l'hébergement</li>
          </ul>
        </div>
        
        <Button 
              className=" mt-8 bg-[#4ecdc4] text-[#f0ead6] hover:bg-[#45b7b0] border-[#1a1a1a]  shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] hover:-translate-y-0.5 transition-all rounded-none"
            >
              Voir le projet
            </Button>
      </div>
    </div>
  )
}