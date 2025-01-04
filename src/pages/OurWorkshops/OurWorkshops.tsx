import React from 'react'

import Container from 'components/Atoms/Container/Container'
import Header from 'components/Organisms/Header/Header'
import styles from 'pages/OurWorkshops/OurWorkshops.module.css'
import OurWorkshopsHero from 'components/Molecules/OurWorkshopsHero/OurWorkshopsHero'

const OurWorkshops = () => (
  <Container className={styles.ourWorkshopsWrapper}>
    <Header />
    <Container className={styles.ourWorkshops}>
      <OurWorkshopsHero />
    </Container>
  </Container>
)

export default OurWorkshops
