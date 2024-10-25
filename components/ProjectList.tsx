import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
}

interface ProjectsListProps {
  projects: Project[];
  initialDisplayCount?: number;
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects, initialDisplayCount = 3 }) => {
  const [showAll, setShowAll] = useState(false);
  
  const visibleProjects = showAll ? projects : projects.slice(0, initialDisplayCount);

  return (
    <div className="w-full space-y-4">
      {/* Liste des projets avec transition */}
      <div className="grid gap-6">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="transform transition-all duration-500 ease-in-out"
            style={{
              opacity: 1,
              transform: 'translateY(0)',
              transition: `all 0.5s ease-in-out ${index * 0.1}s`
            }}
          >
            {/* Contenu du projet */}
            <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton avec le style demandé */}
      <div className="mt-8 text-center">
        <Button
          className="bg-[#4ecdc4] text-[#f0ead6] hover:bg-[#45b7b0] border-[#1a1a1a] 
                     border-2 shadow-[2px_2px_0px_black] hover:shadow-[4px_4px_0px_black] 
                     hover:-translate-y-0.5 transition-all rounded-none mt-6"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Voir moins de projets' : 'Voir plus de projets...'}
        </Button>
      </div>
    </div>
  );
};

export default ProjectsList;