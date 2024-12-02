import * as loadingAnimation from 'data/loading.json'
import { FC, useContext, useMemo } from 'react'
import Lottie from 'react-lottie'

import Container from 'components/Atoms/Container/Container'
import ProductItemsStyles from 'components/Molecules/ProductItems/ProdcutItems.module.css'
import { AppContext } from 'hooks/useContext'
import { useSelection } from 'hooks/useSelection'


const ProdcutItems: FC = () => {
  const {
    handleDeleteCard,
    handleUpdateCard,
    isShowModal,
  } = useContext(AppContext)

  const { isLoading } = useSelection()


  let data: string | any[];

  const items = useMemo(() => data?.length === 0 ? (
    <>
      {!isShowModal && (
        <Container className={ProductItemsStyles.emptyMessageWrapper}>
          <p className={ProductItemsStyles.emptyMessage}>
            Your products list is empty, try to add one!
          </p>
        </Container>
      )}
    </>
  ) : isLoading ? (
    <Container className={ProductItemsStyles.loadingWrapper} testId="loading">
      <Lottie
        height="35%"
        options={{
          animationData: loadingAnimation,
          autoplay: true,
          loop: true,
          rendererSettings: {},
        }}
        width="35%"
      />
    </Container>
  ) : (
    <>
      <Container
        className={
          isShowModal
            ? ProductItemsStyles.productsWithBlureEffect
            : ProductItemsStyles.productsWithoutBlureEffect
        }
        testId="productItems"
      >
        <></>

      </Container>
    </>
  ), [
    handleDeleteCard,
    handleUpdateCard,
    isLoading,
    isShowModal
  ]
  )

  return items
}

export default ProdcutItems
