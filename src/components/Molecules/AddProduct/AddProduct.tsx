import { appText } from 'data/appText';
import { FC, useContext } from 'react';
import Container from 'components/Atoms/Container/Container';
import AddProductStyles from 'components/Molecules/AddProduct/AddProduct.module.css';
import { AppContext } from 'hooks/useContext';
import Image from 'components/Atoms/Image/Image'; // Import the Image component

const AddProduct: FC = () => {
  const { handleShowModal, isShowModal } = useContext(AppContext);

  return (
    <>
      {!isShowModal && (
        <Container
          className={AddProductStyles.addProductWrapper}
          onClick={handleShowModal}
          testId="addProduct"
        >
          <Image
            alt={appText.addProduct.alt}
            className={AddProductStyles.addProductImage}
            src="svg/add.svg"
          />
          <p className={AddProductStyles.addProductTitle}>
            {appText.addProduct.label}
          </p>
        </Container>
      )}
    </>
  );
};

export default AddProduct;
