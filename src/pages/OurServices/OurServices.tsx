import React from 'react'

import Container from 'components/Atoms/Container/Container'
import Header from 'components/Organisms/Header/Header'
import OurServicesStyles from 'pages/OurServices/OurServices.module.css'
import OurServicesHero from 'components/Organisms/OurServicesHero/OurServicesHero'

const ContactUs = () => (
  <Container className={OurServicesStyles.ourServicesWrapper}>
    <Header />
    <Container className={OurServicesStyles.ourServices}>
      <OurServicesHero />
    </Container>
  </Container>
)

export default ContactUs
