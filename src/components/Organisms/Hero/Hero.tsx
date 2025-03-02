import React from 'react'
import styles from './Hero.module.css'
import Paragraph from 'components/Atoms/Paragraph/Paragraph'
import Button from 'components/Atoms/Button/Button'
import PromoPill from 'components/Molecules/PromoBill/PromoBill'
import Container from 'components/Atoms/Container/Container'
import { useInView } from 'react-intersection-observer'
import Image from 'components/Atoms/Image/Image'
import LatestNews from 'components/Molecules/LatestNews/LatestNews'
import { useNavigate } from 'react-router-dom'

const Hero = ({ scrollToRef }) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/our-workshops') // This will navigate to the Contact Us page
  }
  
  const { inView: leftInView1, ref: leftRef1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300,
  })

  const { inView: leftInView2, ref: leftRef2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: 300,
  })

  const { inView: rightInView, ref: rightRef } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    delay: 300,
  })

  const handleScrollToTech = () => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Container className={styles.gridWrapper}>
        <Container className={styles.promoPillWrapper}>
          <PromoPill />
        </Container>

        <Container className={styles.latestNewsPillWrapper} onClick={handleButtonClick}>
          <LatestNews />
        </Container>

        <Container
          ref={leftRef1}
          className={`${styles.leftBlock1} ${
            leftInView1 ? styles.slideInLeft : ''
          }`}
        >
          <Paragraph className={styles.pargraph}>
            We offer comprehensive research development and specialized training
            services in cutting-edge technology, aimed at fostering innovation
            and enhancing technical skills..
          </Paragraph>
        </Container>

        <Container
          ref={leftRef2}
          className={`${styles.leftBlock2} ${
            leftInView2 ? styles.slideInLeft : ''
          }`}
        >
          <Paragraph className={styles.buttonTitle}>
            Request your service now!
          </Paragraph>
          <Button onClick={handleScrollToTech} className={styles.button}>
            Request
          </Button>
        </Container>

        <Container
          ref={rightRef}
          className={`${styles.rightBlock} ${
            rightInView ? styles.slideInRight : ''
          }`}
        >
          <Image
            src="images/hero-image.png"
            alt="Descriptive Alt Text"
            className={styles.image}
          />
        </Container>
      </Container>
    </>
  )
}

export default Hero
