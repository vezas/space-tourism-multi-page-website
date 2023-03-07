import { FC, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { menuLinks } from 'src/data/menu-links';
import { MobileMenu } from 'src/components/Layout/MobileMenu';
import styles from 'src/components/Layout/Header/Header.module.scss';
import clsx from 'clsx';

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Link className={styles.logoLink} to='/'>
          <span className='accessibility-only'>Home page</span>
          <img
            className={styles.logoItem}
            src={process.env.PUBLIC_URL + '/assets/shared/logo.svg'}
            alt='company logo'
          />
        </Link>
      </div>
      {!isOpen && (
        <nav className={styles.menu}>
          {menuLinks.map(({ name, to }) => (
            <li className={styles.menuItem} key={name}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? clsx(styles.menuLink, styles.menuLinkActive) : styles.menuLink
                }
                to={to}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </nav>
      )}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <button className={styles.toggleMenu} onClick={toggleMenu}>
        <span className='accessibility-only'>Menu button</span>
      </button>
    </header>
  );
};
