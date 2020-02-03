import React from 'react';
import styled from 'styled-components';
import PlaygroundImage from '../images/playground.svg';
import Layout from '../components/layout';

const Playground = () => {
  return (
    <Layout seoTitle="Playground">
      <Root>
        <PlaygroundImage className="playground" alt="Closed playground" />

        <span>
          Looking for the code? Visit the{' '}
          <a
            href="https://github.com/simjes/playground"
            title="https://github.com/simjes/playground"
            target="_blank"
            rel="noopener noreferrer"
          >
            repository
          </a>
        </span>

        <small>
          <div>Icons made by:</div>
          <div>
            <div>
              <a
                href="https://www.flaticon.com/authors/photo3idea-studio"
                title="photo3idea_studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                photo3idea_studio
              </a>
            </div>
            <div>
              <a
                href="https://www.flaticon.com/authors/alfredo-hernandez"
                title="Alfredo Hernandez"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alfredo Hernandez
              </a>
            </div>
          </div>
        </small>
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
  text-align: center;
  height: 100%;

  .playground {
    height: 300px;
    padding: 20px;
  }
`;
