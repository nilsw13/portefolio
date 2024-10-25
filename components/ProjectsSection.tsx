import React, { ReactNode, useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GeometricShape } from '@/app/page'
import Image from 'next/image'
import NextLogo from '../public/images/nextjs.svg'
import PrismaLogo from '../public/images/prisma.svg'
import TechBadge from './Badge'


interface Project {
  id: number
  title: string
  description: string
  image: React.ReactNode[];
  specs : React.ReactNode[];
}






export const ProjectsSection = () => {


   


  const [showAll, setShowAll] = useState(false)
  
  const projects: Project[] = [
    { 
      id: 1, 
      title: "Studio AI", 
      description: "Saas platform that help people generate personnal image with Ai",
      image: [<Image src={NextLogo} width={26} height={20} alt='nextjs logo ' className='bg-[#ffff] text-[#ffff] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_#d1548e] hover:shadow-[4px_4px_0px_#d1548e] rounded-full ' />, <Image src={PrismaLogo} width={20} height={20} alt='prisma logo'/>],
      specs: [
        <TechBadge  name='nextJs'/>,
        <TechBadge  name='prisma'/>
        
       ]
    },
    { 
      id: 2, 
      title: "KMCHANGE", 
      description: "website for a currency exchange company" ,
      image: [<Image src={NextLogo} width={26} height={20} alt='nextjs logo ' className='bg-[#ffff] text-[#ffff] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_#d1548e] hover:shadow-[4px_4px_0px_#d1548e] rounded-full ' />, <Image src={PrismaLogo} width={20} height={20} alt='prisma logo'/>],
      specs: [
        <TechBadge  name='Java'/>,
        <TechBadge  name='prisma'/>
        
       ]
    },
    { 
      id: 3, 
      title: "Kories", 
      description: "Saas plateform that help people to generate personnal bed times stories for their kid with Ai",
      image: [<Image src={NextLogo} width={26} height={20} alt='nextjs logo ' className='bg-[#ffff] text-[#ffff] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_#d1548e] hover:shadow-[4px_4px_0px_#d1548e] rounded-full ' />, <Image src={PrismaLogo} width={20} height={20} alt='prisma logo'/>],
      specs: [
        <TechBadge  name='nextJs'/>,
        <TechBadge  name='prisma'/>
        
       ]
    },
    { 
      id: 4, 
      title: "Nathalie Susinie", 
      description: "Website for an osteopath activity",
      image: [<Image src={NextLogo} width={26} height={20} alt='nextjs logo ' className='bg-[#ffff] text-[#ffff] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_#d1548e] hover:shadow-[4px_4px_0px_#d1548e] rounded-full ' />, <Image src={PrismaLogo} width={20} height={20} alt='prisma logo'/>],
      specs: [
        <TechBadge  name='nextJs'/>,
        <TechBadge  name='prisma'/>
        
       ]
    },
    { 
      id: 5, 
      title: "Subscription tracker", 
      description: "Une API REST développée avec Node.js et Express",
      image: [<Image src={NextLogo} width={26} height={20} alt='nextjs logo ' className='bg-[#ffff] text-[#ffff] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_#d1548e] hover:shadow-[4px_4px_0px_#d1548e] rounded-full ' />, <Image src={PrismaLogo} width={20} height={20} alt='prisma logo'/>],
      specs: [
        <TechBadge  name='nextJs'/>,
        <TechBadge  name='prisma'/>
        
       ]
    },
    { 
      id: 6, 
      title: "Dashboard Admin", 
      description: "Un tableau de bord administrateur complet avec des graphiques" ,
      image: [<Image src={NextLogo} width={26} height={20} alt='nextjs logo ' className='bg-[#ffff] text-[#ffff] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_#d1548e] hover:shadow-[4px_4px_0px_#d1548e] rounded-full ' />, <Image src={PrismaLogo} width={20} height={20} alt='prisma logo'/>],
      specs: [
        <TechBadge  name='nextJs'/>,
        <TechBadge  name='prisma'/>
        
       ]
      },
    // Ajoutez d'autres projets ici si nécessaire
  ]

  // Limite l'affichage aux 4 premiers projets si showAll est false
  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <>
          <GeometricShape  className='w-16 h-16 bg-[#4ecdc4] opacity-10 -rotate-12 bottom-20 -right-16'/>

    <section id="projects" className="mb-32">
        
      <h2 className="text-3xl font-bold mb-8">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedProjects.map((project) => (
          <Card 
            key={project.id} 
            className="bg-[#f0ead6] border-[#1a1a1a] border-2 shadow-[4px_4px_0px_black] rounded-none p-6 transition-all hover:shadow-[8px_8px_0px_black] hover:-translate-y-1 h-auto"
          >
            <div className='flex justify-between'>
            <h3 className="text-xl font-semibold mb-8 border-b-4 border-yellow-400/50 ">{project.title}</h3>
            
             {/*   <div className='flex flex-row justify-between gap-3 w-fit h-fit mb-8'>{project.image}</div>*/}
             <div className='flex gap-3'>
            {project.specs}
             </div>
            </div>
            <p className="mb-4">{project.description}</p>
            <Button 
              className=" bg-[#4ecdc4] text-[#f0ead6] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] hover:-translate-y-0.5 transition-all rounded-none " 
            >
              <a href={`${project.id + "/description"}`}>
              Voir le projet
              </a>
            </Button>
          </Card>
        ))}
      </div>
      
      {projects.length > 4 && (
        <div className="mt-8 text-center">
          <Button 
            className="bg-[#4ecdc4] text-[#f0ead6] hover:bg-[#45b7b0] border-[#1a1a1a] border-2 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] hover:-translate-y-0.5 transition-all rounded-none mt-6"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Voir moins de projets' : 'Voir plus de projets...'}
          </Button>
        </div>
      )}
    </section>
    </>
  )
}