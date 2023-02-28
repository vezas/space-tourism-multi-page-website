import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from 'src/components/Layout/Layout.module.scss';

export const Layout: FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
