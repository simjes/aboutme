/* eslint-disable */
// TODO: Remove lint disable
import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import Lightbox from 'react-spring-lightbox';
import styled, { ThemeProvider } from 'styled-components';
import LightboxHeader from '../components/lightbox/LightboxHeader';
import Navigation from '../components/lightbox/Navigation';
import Post from '../components/post';
import { lazerTitle, theme } from '../theme';
import SEO from '../components/seo';

export const pageQuery = graphql`
  query($id: ID!) {
    fauna {
      findEventByID(id: $id) {
        name
        startDate
        endDate
      }
      postsByEventId(id: $id) {
        publicImageId
        name
        published
      }
    }
    allCloudinaryMedia {
      nodes {
        secure_url
        public_id
      }
    }
  }
`;
export default function Template({
  data, // this prop will be injected by the GraphQL query
}) {
  const { fauna, allCloudinaryMedia } = data;
  const event = fauna.findEventByID;
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const faunaPosts = fauna.postsByEventId;
    const imageDictionary = {};
    allCloudinaryMedia.nodes.forEach(node => {
      imageDictionary[node.public_id] = node.secure_url;
    });

    const postsWithImages = faunaPosts.map(post => ({
      ...post,
      src: imageDictionary[post.publicImageId],
      alt: post.name,
    }));

    setPosts(postsWithImages);
  }, [fauna, allCloudinaryMedia]);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < lightboxImages.length &&
    setCurrentIndex(currentImageIndex + 1);

  const close = () => {
    setOpen(false);
  };

  const openImage = imageIndex => {
    setCurrentIndex(imageIndex);
    setOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <SEO title={event.name} />
      <Root>
        <H1>{event.name}</H1>
        <Gallery>
          {posts.map((post, index) => (
            <Post key={index} post={post} open={() => openImage(index)} />
          ))}
        </Gallery>

        {posts.length > 0 && (
          <StyledLightbox
            isOpen={open}
            onClose={close}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            currentIndex={currentImageIndex}
            images={posts}
            renderHeader={() => (
              <LightboxHeader
                title={posts[currentImageIndex].alt}
                close={close}
              />
            )}
            renderPrevButton={({ canPrev }) => (
              <Navigation
                position="left"
                onClick={gotoPrevious}
                disabled={!canPrev}
              />
            )}
            renderNextButton={({ canNext }) => (
              <Navigation
                position="right"
                onClick={gotoNext}
                disabled={!canNext}
              />
            )}
          />
        )}
      </Root>
    </ThemeProvider>
  );
}

const Root = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10em;
  height: 100%;
`;

const Gallery = styled.ul`
  --cell-size: 150px;
  display: grid;
  grid-template-columns: repeat(auto-fill, var(--cell-size));
  grid-auto-rows: var(--cell-size);
  grid-auto-flow: dense;
  margin: 0;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  flex: 1 1 auto;
`;

const StyledLightbox = styled(Lightbox)`
  background: ${props => props.theme.foregroundColor}ee;
`;

const H1 = styled.h1`
  ${lazerTitle}
`;
