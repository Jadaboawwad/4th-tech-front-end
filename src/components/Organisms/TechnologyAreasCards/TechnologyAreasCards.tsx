import React, { forwardRef } from 'react'
import styles from './TechnologyAreasCards.module.css'
import Container from 'components/Atoms/Container/Container'
import Card from 'components/Molecules/Card/Card'
import Title from 'components/Atoms/Title/Title'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'

const TechnologyAreaCards = forwardRef((props, ref) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/contact-us') // This will navigate to the Contact Us page
  }

  const { inView, ref: inViewRef } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const setRefs = (node) => {
    inViewRef(node)

    if (typeof ref === 'function') {
      ref(node)
    } else if (ref) {
      ref.current = node
    }
  }

  return (
    <Container
      className={`${styles.areaWrapper} ${inView ? styles.fadeIn : ''}`}
      ref={setRefs}
    >
      <Title className={styles.title} level={'1'}>
        Technology Areas
      </Title>
      <Container className={styles.cardsWrapper}>
        <Card
          imageSrc="images/technology-0.png"
          title="Machine Learning"
          subtitle="Do what you would like to achieve. We do Classification, Regression, or Clustering Tasks."
          buttonText="Start Your Order"
          onButtonClick={handleButtonClick}
        />
        <Card
          imageSrc="images/technology-1.png"
          title="Mobile Development"
          subtitle="We build great apps, bring your idea and we will build it for you."
          buttonText="Start Your Order"
          onButtonClick={handleButtonClick}
        />
        <Card
          imageSrc="images/technology-2.png"
          title="Robotics"
          subtitle="Think how you can achieve your Robot to deal with the real environment. We can help you too."
          buttonText="Start Your Order"
          onButtonClick={handleButtonClick}
        />
      </Container>
    </Container>
  )
})

export default TechnologyAreaCards
