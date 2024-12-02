import { appText } from 'data/appText'
import { FC, RefObject, useContext, useMemo, useRef } from 'react'

import Container from 'components/Atoms/Container/Container'
import CardStyles from 'components/Molecules/Card/Card.module.css'
import { AppContext } from 'hooks/useContext'
import { useSelection } from 'hooks/useSelection'
import { useValidation } from 'hooks/useValidation'


interface ICardProps {
  data?: DataItem
  id?: number | string
  infoDisplay?: boolean
  isInHome?: boolean
  isInProductList?: boolean
  isMainCard?: boolean
  isSelectable?: boolean
  onDeleteCard?: (flag: string, id: string) => void
  onUpdateCard?: (flag: string, id: string) => void
  testId?: string
}

const Card: FC<ICardProps> = ({
  data,
  id,
  infoDisplay = false,
  isInHome = false,
  isInProductList = false,
  isMainCard = false,
  isSelectable = false,
  onDeleteCard,
  onUpdateCard,
  testId,
}) => {
  const { handleCardClick } = useContext(AppContext)
  const { handleSetCardBorder, isCardHasBorder } = useSelection()
  const { imagUrl } = useValidation(data)
  const borderStyle = useMemo(() => {
    if (isInHome) {
      return isSelectable
        ? isCardHasBorder
          ? CardStyles.selectedCard
          : CardStyles.cardFilled
        : CardStyles.cardWrapper;
    }

    if (isInProductList) {
      return isSelectable
        ? CardStyles.cardWrapper
        : CardStyles.cardFilled;
    }
  }, [isInHome, isInProductList, isSelectable, isCardHasBorder]);

  const cardRef = useRef<RefObject<HTMLDivElement>>();

  return (
    <>
      {data && (
        <Container
          className={borderStyle}
          componentRef={cardRef}
          id={id}
          onClick={() => handleCardClick && handleCardClick(cardRef, data)}
          testId={testId}
        >
          {isInProductList && (
            <Container className={CardStyles.deleteWrapper}>
              <img
                alt={appText.card.deleteAction}
                className={CardStyles.delete}
                onClick={() => onDeleteCard && onDeleteCard('delete', data.id)}
                src="svg/close.svg"
              />
            </Container>
          )}

          <img
            alt={data.name}
            className={
              !isMainCard
                ? CardStyles.cardImageFilled
                : CardStyles.mainCardImage
            }
            onClick={handleSetCardBorder}
            src={imagUrl}
          />
          <p className={CardStyles.cardName}>{data.name}</p>
          <p className={CardStyles.cardDescription}>{data.description}</p>

          {infoDisplay && (
            <Container className={CardStyles.info}>
              <p className={CardStyles.infoNumber}>{appText.card.bagCount}</p>
              <p className={CardStyles.infoPrice}>{appText.card.price}</p>
            </Container>
          )}

          {isInProductList && (
            <Container
              className={CardStyles.cardOperations}
              testId="updateAction"
            >
              <button
                className={CardStyles.update}
                onClick={() => onUpdateCard && onUpdateCard('update', data.id)}
              >
                {appText.card.updateAction}
              </button>
            </Container>
          )}
        </Container>
      )}
    </>
  )
}

export default Card
