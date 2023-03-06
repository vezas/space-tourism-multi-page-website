import { FC, LegacyRef, Ref } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { routes } from 'src/index';
import { Header } from 'src/components/Layout/Header';
import styles from 'src/components/Layout/Layout.module.scss';
import { match } from 'assert';

export const Layout: FC = () => {
  const location = useLocation();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <>
      <Header />
      <div>
        <SwitchTransition>
          <CSSTransition
            in={true}
            nodeRef={nodeRef as Ref<HTMLElement>}
            key={location.pathname}
            timeout={150}
            mountOnEnter
            unmountOnExit
            classNames={{
              enter: styles.pageAnimationEnter,
              enterActive: styles.pageAnimationEnterActive,
              exit: styles.pageAnimationExit,
              exitActive: styles.pageAnimationExitActive
            }}
          >
            <main ref={nodeRef as LegacyRef<HTMLElement>}>
              <Outlet />
            </main>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
};
