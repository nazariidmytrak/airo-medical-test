'use client';

import { FC, MouseEvent } from 'react';
import Image from 'next/image';

import { RecipeProps } from '@/app/interfaces/recipe';
import { useRouter } from 'next/navigation';

interface RecipeCardProps {
  recipe: RecipeProps;
  onSelect: (id: number) => void;
  isSelected: boolean;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe, onSelect, isSelected }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/recipe/${recipe.id}`);
  };

  const handleContextMenu = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    onSelect(recipe.id);
  };

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      className={`p-2 cursor-pointer border-2 rounded-xl bg-white text-center ${
        isSelected ? 'bg-gray-400' : ''
      }`}
    >
      <div className='grid gap-2 w-full'>
        <div className='w-full mb-3 relative overflow-hidden aspect-video md:aspect-square'>
          <Image
            className='w-full h-auto object-contain'
            src={recipe.image_url}
            alt={recipe.name}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            fill
          />
        </div>
        <div className='font-bold text-lg'>{recipe.name}</div>
        <div className='truncate'>{recipe.tagline}</div>
      </div>
    </div>
  );
};

export default RecipeCard;
