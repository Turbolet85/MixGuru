import { Form, useNavigation } from 'react-router-dom';
import styled from 'styled-components';

interface SearchFormProps {
  searchTerm: string;
}

const SearchForm = ({ searchTerm }: SearchFormProps) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      {
        <Form className={'form'}>
          <input
            type={'search'}
            name={'search'}
            className={'search-input'}
            defaultValue={searchTerm}
          />
          <button type={'submit'} className={'btn'} disabled={isSubmitting}>
            {isSubmitting ? 'searching' : 'search'}
          </button>
        </Form>
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 6rem;

  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
export default SearchForm;
