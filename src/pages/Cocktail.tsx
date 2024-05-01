import { QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link, LoaderFunctionArgs, Navigate, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';

import { Drink } from './Landing';

const cocktailSearchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

interface CocktailData {
  params: { id: string };
}

interface ApiResponse {
  id: string;
  data: { drinks: Drink[] };
}

const singleCocktailQuery = (id: string | undefined) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${cocktailSearchUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs<CocktailData>) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData() as ApiResponse;
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data.drinks) {
    return <Navigate to={'/'} />;
  }

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const ingredients = Object.entries(singleDrink)
    .reduce((acc, entry) => {
      if (entry[0].startsWith('strIngredient') && entry[1]) return acc + `${entry[1]}, `;
      return acc;
    }, '')
    .slice(0, -2);

  return (
    <Wrapper>
      <header>
        <Link to={'/'} className={'btn'}>
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className={'img'} />
        <div className="drink-info">
          <p>
            <span className={'drink-data'}>name :</span>
            {name}
          </p>

          <p>
            <span className={'drink-data'}>category :</span>
            {category}
          </p>

          <p>
            <span className={'drink-data'}>info :</span>
            {info}
          </p>

          <p>
            <span className={'drink-data'}>glass :</span>
            {glass}
          </p>

          <p>
            <span className={'drink-data'}>ingredients :</span>
            {ingredients}
          </p>

          <p>
            <span className={'drink-data'}>instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;

    .btn {
      margin-bottom: 1rem;
    }
  }

  .img {
    border-radius: var(--borderRadius);
  }

  .drink-info {
    padding-top: 2rem;
  }

  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }

  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }

    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Cocktail;
