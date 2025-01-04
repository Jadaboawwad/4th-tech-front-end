import React from "react";
import styles from 'components/Molecules/LatestNews/LatestNews.module.css';
import Container from "components/Atoms/Container/Container";


const LatestNews = () =>
(
  <Container className={styles.latestNewsPillWrapper}>
    <span className={styles.description}>
     Watch Latest Workshop
    </span>
  </Container>
);


export default LatestNews;
