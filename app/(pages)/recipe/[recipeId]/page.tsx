'use client';

import { useEffect, useState } from 'react';

import { fetchRecipeById } from '@/app/api/fetchRecipesById';
import { RecipeProps } from '@/app/interfaces/recipe';
import Container from '@/app/components/shared/container';
import Recipe from '@/app/components/recipe';

const RecipePage = ({ params }: { params: { recipeId: string } }) => {
  const [recipe, setRecipe] = useState<RecipeProps | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedRecipes: RecipeProps[] = await fetchRecipeById(
          params.recipeId
        );
        if (fetchedRecipes.length > 0) {
          setRecipe(fetchedRecipes[0]);
        } else {
          console.error('Recipe not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [params.recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Recipe recipe={recipe} />
    </Container>
  );
};

export default RecipePage;
