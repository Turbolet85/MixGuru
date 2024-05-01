import styled from 'styled-components';

import { Drink } from '../../pages/Landing';
import CocktailCard from '../CocktailCard/CocktailCard';

interface CocktailListProps {
  drinks: Drink[] | null | undefined;
}

const CocktailList = ({ drinks }: CocktailListProps) => {
  if (!drinks) {
    return <h4>No matching cocktails found...</h4>;
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export default CocktailList;
