import { appText } from 'data/appText'
import { FC, useContext } from 'react'

import Container from 'components/Atoms/Container/Container'
import CartStyles from 'components/Molecules/Cart/Cart.module.css'
import Selection from 'components/Molecules/Selection/Selection'
import { AppContext } from 'hooks/useContext'


interface ICartProps {
  isShowCart?: boolean
}

const Cart: FC<ICartProps> = ({ isShowCart = false }) => {
  const { handleCartRemoveAll, selectedCards } = useContext(AppContext)


  return (
    <>
      {isShowCart && (
        <Container className={CartStyles.cartWrapper} testId="cart">
          <Container className={CartStyles.cartHeader}>
            <h3 className={CartStyles.cartHeading}>Shopping Cart</h3>
            {selectedCards?.length !== 0 && (
              <h5
                className={CartStyles.removeAction}
                onClick={handleCartRemoveAll}
              >
                {appText.cart.deleteAllAction}
              </h5>
            )}
          </Container>
          <Container className={CartStyles.cartContent}>
            {selectedCards?.length === 0 ? (
              <p className={CartStyles.nullContent} data-testid="message">
                {appText.cart.emptyMessage}
              </p>
            ) : (
              selectedCards?.map((el: DataItem) => (
                  <div key={el.id}>
                    <Selection data={el} testId={`select-${el.id}`} />
                  </div>
                ))
            )}
          </Container>
        </Container>
      )}
    </>
  )
}

export default Cart
