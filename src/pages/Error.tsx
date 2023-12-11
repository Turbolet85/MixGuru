import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

import img from '../assets/404.svg';

const Error = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <Wrapper>
        <div>
          <p>{error.data}</p>
          <Link to={'/'}>back home</Link>
          <img src={img} alt="404" />
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
    color: var(--grey-500);
  }

  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Error;
