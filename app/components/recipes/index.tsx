'use client';

import { useEffect, useState } from 'react';

import RecipeCard from '@/app/components/recipeCard';
import useRecipesStore from '@/app/store';
import { fetchRecipes } from '@/app/api/fetchRecipes';
import { RecipeProps } from '@/app/interfaces/recipe';
import Button from '../shared/button';

const Recipes = () => {
  const { recipes, setRecipes } = useRecipesStore();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    const getData = async () => {
      try {
        const data: RecipeProps[] = await fetchRecipes(currentPage);
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [currentPage]);

  const handleSelect = (id: number) => {
    setSelectedIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((selectedId) => selectedId !== id)
        : [...prevIds, id]
    );
  };

  const handleDelete = () => {
    const updatedRecipes = recipes.filter(
      (recipe) => !selectedIds.includes(recipe.id)
    );

    if (updatedRecipes.length === 0) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setRecipes(updatedRecipes);
    }

    setSelectedIds([]);
  };

  const displayedRecipes = recipes.slice(0, itemsPerPage);

  return (
    <>
      {selectedIds.length >= 1 && (
        <div className='absolute right-5 top-5'>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      )}
      <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {displayedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onSelect={handleSelect}
            isSelected={selectedIds.includes(recipe.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Recipes;
