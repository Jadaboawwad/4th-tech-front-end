import React from 'react'
import 'styles/App.css'
import Container from 'components/Atoms/Container/Container'
import Header from 'components/Organisms/Header/Header'
import styles from 'pages/AboutUs/AboutUs.module.css'
import AboutUsHero from 'components/Organisms/AboutUsHero/AboutUsHero'

const AboutUs = () => (
  <Container className='appContainer'>
    <Header />
    <Container className={styles.aboutUsWrapper}>
      <AboutUsHero />
    </Container>
  </Container>
)

export default AboutUs
