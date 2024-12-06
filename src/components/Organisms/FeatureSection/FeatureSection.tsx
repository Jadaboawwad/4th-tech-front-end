import React from 'react';
import Container from 'components/Atoms/Container/Container';
import Image from 'components/Atoms/Image/Image';
import Title from 'components/Atoms/Title/Title';
import Paragraph from 'components/Atoms/Paragraph/Paragraph';
import Button from 'components/Atoms/Button/Button';
import { useInView } from 'react-intersection-observer';
import styles from './FeatureSection.module.css'; // Ensure this path is correct

const FeatureSection = () => {
  const { inView: topInView, ref: topRef, } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const { inView: leftInView, ref: leftRef, } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const { inView: rightInView, ref: rightRef, } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <Container className={styles.featureSectionWrapper}>
      <Container ref={topRef} className={`${styles.topWrapper} ${topInView ? styles.fadeIn : styles.hidden}`}>
        <Title level="2" className={styles.topTitle}>
          Explore the latest in robotics trends, tailor your project portfolio, and deploy the AI solutions that best fit your objectives.
        </Title>
      </Container>

      <Container ref={leftRef} className={`${styles.leftWrapper} ${leftInView ? styles.fadeIn : styles.hidden}`}>
        <Image src="images/ml-background.png" alt="Machine Learning" className={styles.image} />
      </Container>

      <Container ref={rightRef} className={`${styles.rightWrapper} ${rightInView ? styles.fadeIn : styles.hidden}`}>
        <Title level="3" className={styles.title}>Engineer Innovatively</Title>
        <Paragraph className={styles.description}>
          Gain comprehensive analytics on AI and robotics trends to guide your strategic decisions.
        </Paragraph>
        <Button onClick={() => console.log('Learn More about ML')} className={styles.button}>
          Learn More
        </Button>
      </Container>
    </Container>
  );
};

export default FeatureSection;
