import React from 'react'

import Container from 'components/Atoms/Container/Container'
import Header from 'components/Organisms/Header/Header'
import OurServicesStyles from 'pages/OurServices/OurServices.module.css'

const ContactUs = () => (
    <Container className={OurServicesStyles.ourServicesWrapper}>
      <Header />
      <Container className={OurServicesStyles.ourServices}>
        <></>
      </Container>
    </Container>
  )

export default ContactUs
