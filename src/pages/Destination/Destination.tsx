import { FC, useEffect, useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import data from 'src/data/data.json';
import { Container } from 'src/components/UI/Container';
import { Submenu } from 'src/components/Submenu';
import styles from 'src/pages/Destination/Destination.module.scss';

export const Destination: FC = () => {
  const [planetId, setPlanetId] = useState<number>(0);
  const [pageData, setPageData] = useState(data.destinations[planetId]);

  const imageRef = useRef(null);

  const submenuItems: string[] = [];
  data.destinations.map(({ name }) => submenuItems.push(name));

  useEffect(() => {
    setPageData(data.destinations[planetId]);
  }, [planetId]);

  const {
    name,
    description,
    distance,
    travel,
    images: { png }
  } = pageData;

  return (
    <Container className={styles.destination}>
      <h1 className={styles.header}>
        <span className={styles.headerCounter}>01 </span>Pick your destination
      </h1>
      <SwitchTransition>
        <CSSTransition
          key={name}
          nodeRef={imageRef}
          timeout={{ enter: 1000, exit: 0 }}
          classNames={{
            enter: styles.imageAnimationEnter,
            enterActive: styles.imageAnimationEnterActive
          }}
        >
          <div className={styles.imageBox}>
            <img
              ref={imageRef}
              className={styles.image}
              src={process.env.PUBLIC_URL + png}
              alt={`The ${name}`}
            />
          </div>
        </CSSTransition>
      </SwitchTransition>
      <article className={styles.descriptionGroup}>
        <Submenu
          className={styles.submenu}
          items={submenuItems}
          style='dotted'
          toggleContent={setPlanetId}
          activeId={planetId}
        />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.paragraph}>{description}</p>
        <div className={styles.infoGroup}>
          <div>
            <h3 className={styles.infoGroupHeading}>Avg. distance</h3>
            <p className={styles.infoGroupText}>{distance}</p>
          </div>
          <div>
            <h3 className={styles.infoGroupHeading}>Est. travel time</h3>
            <p className={styles.infoGroupText}>{travel}</p>
          </div>
        </div>
      </article>
    </Container>
  );
};
