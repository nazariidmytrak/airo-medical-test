'use client';

import { FC } from 'react';

interface Props {
  description: string;
}

const RecipeDescription: FC<Props> = ({ description }) => {
  return (
    <div className='grid gap-1'>
      <h3 className='text-xl font-bold'>Description</h3>
      <p>{description}</p>
    </div>
  );
};

export default RecipeDescription;
