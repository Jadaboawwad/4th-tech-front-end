import React from 'react';
import Container from 'components/Atoms/Container/Container';
import ContactForm from 'components/Molecules/ContactForm/ContactForm';
import styles from './ContactUsHero.module.css';
import ContactInfoSection from 'components/Molecules/ContactInfoSection/ContactInfoSection';

const ContactUsHero = () => {
  const contactItems = [
    { icon: '📧', text: 'info@4th-tech.com' },
    { icon: '📞', text: '+962799060750' },
    { icon: '📍', text: 'Khalda, Amman, Jordan' },
  ];

  return (
    <Container className={styles.contactUsHeroWrapper}>
      <Container className={styles.left}>
        <ContactInfoSection
          heading="Ready to Start Your Project?"
          description="Let's make your vision a reality. Contact us today and let's discuss how we can help you innovate and grow."
          contactItems={contactItems}
        />
      </Container>
      <Container className={styles.right}>
        <ContactForm />
      </Container>
    </Container>
  );
};

export default ContactUsHero;
