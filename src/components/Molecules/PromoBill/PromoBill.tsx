import React from "react";
import PrompBillStyles from 'components/Molecules/PromoBill/PromoBill.module.css';
import Container from "components/Atoms/Container/Container";


const PromoPill = () =>
(
  <Container className={PrompBillStyles.promoPillWrapper}>
    <span className={PrompBillStyles.badge}>25% SAVE</span>
    <span className={PrompBillStyles.description}>
      on 3D Printing Services & 3D Design
    </span>
  </Container>
);


export default PromoPill;
