import React from 'react';
import styles from './Hero.module.css';
import Paragraph from 'components/Atoms/Paragraph/Paragraph';
import Button from 'components/Atoms/Button/Button';
import PromoPill from 'components/Molecules/PromoBill/PromoBill';
import Container from 'components/Atoms/Container/Container';

const Hero = () => (
  <Container className={styles.gridContainer}>
    <Container className={styles.promoPillWrapper}><PromoPill /></Container>
    <Container className={styles.leftBlock1}>
      <Paragraph className={styles.leftParagraph}>We are providing research development and training services in technology</Paragraph>
    </Container>
    <Container className={styles.leftBlock2}>
      <Paragraph className={styles.buttonTitle}>Request your service now!</Paragraph>
      <Button onClick={() => console.log("Button clicked!")} className={styles.button}>Request</Button>
    </Container>
    <Container className={styles.rightBlock}>
      <img src="images/hero-image.png" alt="Descriptive Alt Text" />
    </Container>
  </Container>
);

export default Hero;
