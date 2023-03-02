import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'src/components/Layout/Header';
import styles from 'src/components/Layout/Layout.module.scss';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
