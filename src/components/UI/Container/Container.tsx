import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from 'src/components/UI/Container/Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <section className={clsx(styles.container, className)}>{children}</section>
);
