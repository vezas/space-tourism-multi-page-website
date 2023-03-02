import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'src/components/UI/Container';
import styles from 'src/pages/Home/Home.module.scss';

export const Home: FC = () => {
  return (
    <Container className={styles.home}>
      <div className={styles.textGroup}>
        <h1 className={styles.heading}>
          So, you want to travel to <span className={styles.headingMain}>Space</span>
        </h1>
        <p className={styles.paragraph}>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </div>
      <div>
        <Link className={styles.button} to='/destination'>
          Explore
        </Link>
      </div>
    </Container>
  );
};
