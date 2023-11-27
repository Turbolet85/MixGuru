import { Link } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <h1>HomeLayout</h1>
      <Link to={'/about'}>About page</Link>
    </>
  );
};

export default HomeLayout;
