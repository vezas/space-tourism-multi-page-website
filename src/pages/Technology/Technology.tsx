import { FC, useEffect, useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import data from 'src/data/data.json';
import { Container } from 'src/components/UI/Container';
import { Submenu } from 'src/components/Submenu';
import styles from 'src/pages/Technology/Technology.module.scss';

export const Technology: FC = () => {
  const imageRef = useRef(null);
  const [technologyId, setTechnologyId] = useState<number>(0);
  const [pageData, setPageData] = useState(data.technology[technologyId]);
  const [isImagePortrait, setIsImagePortrait] = useState<boolean>(window.innerWidth >= 1024);

  window.addEventListener('resize', () => setIsImagePortrait(window.innerWidth >= 1024));

  const submenuItems: string[] = [];
  data.technology.map(({ name }) => submenuItems.push(name));

  useEffect(() => {
    setPageData(data.technology[technologyId]);
  }, [technologyId]);

  const {
    name,
    description,
    images: { portrait },
    images: { landscape }
  } = pageData;

  return (
    <>
      <Container className={styles.technology}>
        <h1 className={styles.header}>
          <span className={styles.headerCounter}>03 </span>Space launch 101
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
              {isImagePortrait ? (
                <img
                  ref={imageRef}
                  className={styles.image}
                  src={process.env.PUBLIC_URL + portrait}
                  alt={`The ${name}`}
                />
              ) : (
                <img
                  ref={imageRef}
                  className={styles.image}
                  src={process.env.PUBLIC_URL + landscape}
                  alt={`The ${name}`}
                />
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>
        <article className={styles.descriptionGroup}>
          <Submenu
            className={styles.submenu}
            items={submenuItems}
            style='numbered'
            toggleContent={setTechnologyId}
            activeId={technologyId}
          />
          <h2 className={styles.terminology}>The terminology...</h2>
          <p className={styles.name}>{name}</p>
          <h3 className={styles.description}>{description}</h3>
        </article>
      </Container>
    </>
  );
};
