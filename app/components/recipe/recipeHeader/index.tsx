'use client';

import { FC } from 'react';

interface Props {
  name: string;
  tagline: string;
}

const RecipeHeader: FC<Props> = ({ name, tagline }) => {
  return (
    <div className='grid gap-1'>
      <h2 className='text-3xl font-bold'>{name}</h2>
      <p className='text-gray-600'>{tagline}</p>
    </div>
  );
};

export default RecipeHeader;
