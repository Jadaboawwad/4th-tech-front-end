import React from 'react';
import styles from './Footer.module.css';
import Image from 'components/Atoms/Image/Image';
import Container from 'components/Atoms/Container/Container';
import Link from 'components/Atoms/Link/Link';
import Title from 'components/Atoms/Title/Title';

const Footer = () => (
    <Container className={styles.footerWrapper}>
        <Container className={styles.logo}>
            <Image src="/images/logo.png" alt="4th Tech Logo" />
        </Container>
        <Container className={styles.links}>
            <Title className={styles.label} level={'1'}>Quick Links</Title>
            <Link href="/">Home</Link>
            <Link href="/our-services">Our Services</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact-us">Contact Us</Link>
        </Container>
        <Container className={styles.payment}>
            <Title className={styles.label} level={'1'}>We accept following payment systems</Title>
            <Image src="images/visa.png" alt="Visa Payment" />
        </Container>
        <Container className={styles.copyRight}>
            ©2024 4th Tech. All rights reserved
        </Container>
        <Container className={styles.socialMedia}>
            <Link href="https://www.facebook.com/4thtechjo/"> <Image src="images/facebook.png" alt="Facebook" className={styles.socialIcon} /></Link>
            <Link href="https://www.instagram.com/4thtechjo/"><Image src="images/instagram.png" alt="Instagram" className={styles.socialIcon} /></Link>
            <Link href="/contact"> <Image src="images/linkedin.png" alt="LinkedIn" className={styles.socialIcon} /></Link>
        </Container>
    </Container>
);

export default Footer;
