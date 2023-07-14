'use client';

import { FC } from 'react';
import Image from 'next/image';

import { RecipeProps } from '@/app/interfaces/recipe';
import RecipeHeader from './recipeHeader';
import RecipeDescription from './recipeDescription';
import RecipeDetails from './recipeDetails';
import RecipeIngredients from './recipeIngredients';
import RecipeMethod from './recipeMethod';
import RecipePairing from './recipePairing';
import Button from '../shared/button';
import { useRouter } from 'next/navigation';

interface Props {
  recipe: RecipeProps;
}

const Recipe: FC<Props> = ({ recipe }) => {
  const {
    food_pairing,
    method,
    ingredients,
    name,
    tagline,
    description,
    abv,
    attenuation_level,
    boil_volume,
    brewers_tips,
    contributed_by,
    ebc,
    first_brewed,
    ibu,
    id,
    ph,
    srm,
    target_fg,
    target_og,
    volume,
    method: { twist },
  } = recipe;
  const router = useRouter();
  return (
    <>
      <div className='left-5 absolute top-5'>
        <Button
          onClick={() => {
            router.back();
          }}
        >
          Back
        </Button>
      </div>

      <div className='flex gap-8 flex-wrap justify-center'>
        <div className='mr-10 align-top'>
          <Image
            src={recipe.image_url}
            alt={recipe.name}
            width={350}
            height={50}
          />
        </div>

        <div className='grid gap-3 max-w-2xl text-center'>
          <RecipeHeader name={name} tagline={tagline} />

          <RecipeDescription description={description} />

          <RecipeDetails
            id={id}
            ph={ph}
            ibu={ibu}
            abv={abv}
            ebc={ebc}
            srm={srm}
            twist={twist}
            volume={volume}
            targetFG={target_fg}
            targetOG={target_og}
            boilVolume={boil_volume}
            firstBrewed={first_brewed}
            brewersTips={brewers_tips}
            contributedBy={contributed_by}
            attenuationLevel={attenuation_level}
          />

          <RecipeIngredients ingredients={ingredients} />

          <RecipeMethod method={method} />

          <RecipePairing foodPairing={food_pairing} />
        </div>
      </div>
    </>
  );
};

export default Recipe;
