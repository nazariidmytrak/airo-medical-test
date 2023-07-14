'use client';

import { FC } from 'react';

interface Props {
  ingredients: {
    malt: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
    }[];
    hops: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
      add: string;
      attribute: string;
    }[];
    yeast: string;
  };
}

const RecipeIngredients: FC<Props> = ({ ingredients }) => {
  const { malt, hops, yeast } = ingredients;
  return (
    <div className='grid gap-1'>
      <h2 className='text-xl font-bold'>Ingredients</h2>
      <p>
        <span className='font-bold text-lg'>Malt:</span>
        {malt.map((maltItem) => maltItem.name).join(', ')}
      </p>
      <p>
        <span className='font-bold text-lg'>Hops:</span>
        {hops.map((hop) => hop.name).join(', ')}
      </p>
      <p>
        <span className='font-bold text-lg'>Yeast:</span> {yeast}
      </p>
    </div>
  );
};

export default RecipeIngredients;
