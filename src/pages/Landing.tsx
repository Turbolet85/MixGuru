import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

import CocktailList from '../components/CocktailList/CocktailList';
import SearchForm from '../components/SearchForm/SearchForm';

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strGlass: string;
  strCategory: string;
  strInstructions: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
}

interface ApiResponse {
  drinks: Drink[] | null;
  searchTerm: string;
}

export const loader = async () => {
  const searchTerm = '';
  const response = await axios.get<ApiResponse>(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks } = useLoaderData() as ApiResponse;
  return (
    <>
      <CocktailList drinks={drinks} />
      <SearchForm />
    </>
  );
};

export default Landing;
