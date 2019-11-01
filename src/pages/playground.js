import { graphql, useStaticQuery } from 'gatsby';
import React, { createRef, useRef, useState } from 'react';
import { useSpring } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';
import MenuButton from '../components/common/menuButton';
import Layout from '../components/layout';
import Tags from '../components/tags';
import { MD } from '../theme';

const PLAYGROUND_EQUIPMENT_QUERY = graphql`
  query {
    prisma {
      playgroundEquipments {
        id
        name
        demoLink
        repositoryLink
        tags
      }
    }
  }
`;

const Playground = () => {
  const { prisma } = useStaticQuery(PLAYGROUND_EQUIPMENT_QUERY);
  const equipment = [...prisma.playgroundEquipments];

  const sectionRefs = useRef(
    [...Array(equipment.length)].map(() => createRef()),
  );
  const [activeView, setActiveView] = useState(equipment[0].id);
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
          {equipment.map((section, i) => (
            <MenuButton
              key={`${section.id}-menu`}
              text={section.name}
              onClick={() => scrollToSection(sectionRefs.current[i])}
              active={activeView === section.id}
            />
          ))}
        </Menu>

        {equipment.map((section, i) => (
          <Section key={`${section.id}-section`}>
            <Waypoint onEnter={() => handleOnScrollEnter(section.id)} />

            <h1 ref={ref => (sectionRefs.current[i] = ref)}>{section.name}</h1>

            {section.description && <div>{section.description}</div>}

            {section.repositoryLink && section.demoLink && (
              <Links>
                <a
                  href={section.repositoryLink}
                  title={section.repositoryLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Source
                </a>

                <a
                  href={section.demoLink}
                  title={section.demoLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Demo
                </a>
              </Links>
            )}

            {section.tags && section.tags.length > 0 && (
              <Tags tags={section.tags} />
            )}
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
  z-index: 1;
  padding: 10px;

  @media (max-width: ${MD}) {
    bottom: 0;
    right: 0;
    top: unset;
    flex-direction: row;
    background: ${props => props.theme.foregroundColor};
  }
`;
