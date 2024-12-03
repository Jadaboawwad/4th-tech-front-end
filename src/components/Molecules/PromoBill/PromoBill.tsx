import React from "react";
import PrompBillStyles from 'components/Molecules/PromoBill/PromoBill.module.css';


const PromoPill = () =>
(
  <div className={PrompBillStyles.promoPill}>
    <span className={PrompBillStyles.badge}>25% SAVE</span>
    <span className={PrompBillStyles.description}>
      on 3D Printing Services
    </span>
  </div>
);


export default PromoPill;
