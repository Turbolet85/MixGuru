import { Outlet } from 'react-router-dom';

import Navbar from '../features/Navbar/Navbar';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
