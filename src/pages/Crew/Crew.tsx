import { FC, useEffect, useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import data from 'src/data/data.json';
import { Container } from 'src/components/UI/Container';
import { Submenu } from 'src/components/Submenu';
import styles from 'src/pages/Crew/Crew.module.scss';

export const Crew: FC = () => {
  const [crewId, setCrewId] = useState<number>(0);
  const [pageData, setPageData] = useState(data.crew[crewId]);

  const imageRef = useRef(null);

  const submenuItems: string[] = [];
  data.crew.map(({ name }) => submenuItems.push(name));

  useEffect(() => {
    setPageData(data.crew[crewId]);
  }, [crewId]);

  const {
    name,
    images: { png },
    role,
    bio
  } = pageData;

  return (
    <>
      <Container className={styles.crew}>
        <h1 className={styles.header}>
          <span className={styles.headerCounter}>02 </span>Meet your crew
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
                alt={`${role} ${name}`}
              />
            </div>
          </CSSTransition>
        </SwitchTransition>
        <article className={styles.descriptionGroup}>
          <Submenu
            className={styles.submenu}
            items={submenuItems}
            style='dotted'
            toggleContent={setCrewId}
            activeId={crewId}
          />
          <h2 className={styles.role}>{role}</h2>
          <h3 className={styles.name}>{name}</h3>
          <h3 className={styles.bio}>{bio}</h3>
        </article>
      </Container>
    </>
  );
};
