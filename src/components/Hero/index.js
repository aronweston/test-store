import React from 'react';
import styled from 'styled-components';
import { Button } from '../Global';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--red);
  height: 350px;
  padding: 15px;

  > * {
    margin: 1rem 0rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Who needs Udemy, we can teachYou.</h1>
      <Button>Explore</Button>
    </HeroContainer>
  );
};

export default Hero;
