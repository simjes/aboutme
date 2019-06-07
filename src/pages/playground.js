import React, { createRef, useRef, useState } from 'react';
import { useSpring } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';
import MenuButton from '../components/common/menuButton';
import Layout from '../components/layout';

const sections = [
  {
    id: 2314,
    name: 'elm-slide',
    repo: 'https://github.com/simjes/playground/tree/master/elm-slide',
    demo: 'https://elm-slide.simjes.dev/',
  },
  {
    id: 1634,
    name: 'svelte',
    repo: 'https://github.com/simjes/playground/tree/master/elm-slide',
    demo: 'https://elm-slide.simjes.dev/',
  },
  {
    id: 16342,
    name: 'TEST',
    repo: 'https://github.com/simjes/playground/tree/master/elm-slide',
    demo: 'https://elm-slide.simjes.dev/',
  },
];

const Playground = props => {
  const sectionRefs = useRef([...Array(3)].map(() => createRef()));
  const [activeView, setActiveView] = useState(2314);
  const [, setY] = useSpring(() => ({ y: 0 }));

  const scrollToSection = ref => {
    if (ref) {
      const scrollPosition = ref.offsetTop - window.innerHeight / 2.5;

      setY({
        y: scrollPosition,
        reset: true,
        from: { y: window.scrollY },
        onFrame: p => window.scroll(0, p.y),
      });
    }
  };

  const handleOnScrollEnter = sectionId => {
    setActiveView(sectionId);
  };

  return (
    <Layout seoTitle="Playground">
      <Root>
        <Menu>
          {sections.map((section, i) => (
            <MenuButton
              key={`${section.id}-menu`}
              text={section.name}
              onClick={() => scrollToSection(sectionRefs.current[i])}
              active={activeView === section.id}
            />
          ))}
        </Menu>

        {sections.map((section, i) => (
          <Section key={`${section.id}-section`}>
            <Waypoint onEnter={() => handleOnScrollEnter(section.id)} />

            <h1 ref={ref => (sectionRefs.current[i] = ref)}>{section.name}</h1>

            <Links>
              <a
                href={section.repo}
                title={section.repo}
                rel="noopener noreferrer"
                target="_blank"
              >
                Source
              </a>

              <a
                href={section.demo}
                title={section.demo}
                rel="noopener noreferrer"
                target="_blank"
              >
                Demo
              </a>
            </Links>
          </Section>
        ))}
      </Root>
    </Layout>
  );
};

export default Playground;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Links = styled.div`
  text-align: center;

  > a {
    margin: 0 10px;
  }
`;

const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;
