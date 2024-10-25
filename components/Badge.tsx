import React from 'react';
import { Badge } from './ui/badge';

interface BadgeProps {
  name: string;
}

const TechBadge: React.FC<BadgeProps> = ({ name }) => {
  return (
    <Badge variant='secondary' className='w-fit h-fit p-1 bg-[#d1548e]/50 text-black rounded-sm shadow-[2px_2px_0px_black]'>
        {name}
    </Badge>
  );
};


export default TechBadge;