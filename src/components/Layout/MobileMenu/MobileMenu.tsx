import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { menuLinks } from 'src/data/menu-links';
import styles from 'src/components/Layout/MobileMenu/MobileMenu.module.scss';

interface MobileMenuProps {
  isOpen: boolean;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
  const navRef = useRef(null);

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={navRef}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: styles.menuAnimationEnter,
        enterActive: styles.menuAnimationEnterActive,
        exit: styles.menuAnimationExit,
        exitActive: styles.menuAnimationExitActive
      }}
    >
      <nav ref={navRef} className={styles.mobileMenu}>
        {menuLinks.map(({ name, to }) => (
          <li className={styles.mobileMenuItem} key={name}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? clsx(styles.mobileMenuLink, styles.mobileMenuLinkActive)
                  : styles.mobileMenuLink
              }
              to={to}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </nav>
    </CSSTransition>
  );
};
