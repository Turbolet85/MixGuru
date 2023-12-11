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
