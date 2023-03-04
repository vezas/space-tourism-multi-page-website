import { FC, SetStateAction, Dispatch } from 'react';
import clsx from 'clsx';
import styles from 'src/components/Submenu/Submenu.module.scss';

interface SubmenuProps {
  items: string[];
  style: 'tabs' | 'dotted' | 'numbered';
  toggleContent: Dispatch<SetStateAction<number>>;
  className?: string;
  activeId: number;
}

export const Submenu: FC<SubmenuProps> = ({ items, style, toggleContent, className, activeId }) => (
  <div className={clsx(styles.submenu, styles[`submenu--${style}`], className && className)}>
    {items.map((name, index) => (
      <button
        className={clsx(
          styles.submenuItem,
          styles[`submenuItem--${style}`],
          index === activeId && styles[`submenuItem--${style}Active`]
        )}
        key={name}
        onClick={() => toggleContent(index)}
      >
        {name}
      </button>
    ))}
  </div>
);
