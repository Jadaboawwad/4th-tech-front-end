import { appText } from 'data/appText';
import { FC, useContext, useMemo, useRef } from 'react';

import Container from 'components/Atoms/Container/Container';
import CardStyles from 'components/Molecules/Card/Card.module.css';
import { AppContext } from 'hooks/useContext';
import { useSelection } from 'hooks/useSelection';
import { useValidation } from 'hooks/useValidation';
import Image from 'components/Atoms/Image/Image'; // Import the Image component
import Paragraph from 'components/Atoms/Paragraph/Paragraph'; // Import the Paragraph component

interface ICardProps {
  data?: DataItem;
  id?: number | string;
  infoDisplay?: boolean;
  isInHome?: boolean;
  isInProductList?: boolean;
  isMainCard?: boolean;
  isSelectable?: boolean;
  onDeleteCard?: (flag: string, id: string) => void;
  onUpdateCard?: (flag: string, id: string) => void;
  testId?: string;
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
  const { handleCardClick } = useContext(AppContext);
  const { handleSetCardBorder, isCardHasBorder } = useSelection();
  const { imagUrl } = useValidation(data); // Make sure it's 'imagUrl' not 'imagUrl'
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

  const cardRef = useRef(null);

  return (
    <>
      {data && (
        <Container
          className={borderStyle}
          id={id}
          onClick={() => handleCardClick && handleCardClick(cardRef, data)}
          testId={testId}
        >
          {isInProductList && (
            <Container className={CardStyles.deleteWrapper}>
              <Image
                alt={appText.card.deleteAction}
                className={CardStyles.delete}
                onClick={() => onDeleteCard && onDeleteCard('delete', data.id)}
                src="svg/close.svg"
              />
            </Container>
          )}

          <Image
            alt={data.name}
            className={!isMainCard ? CardStyles.cardImageFilled : CardStyles.mainCardImage}
            onClick={handleSetCardBorder}
            src={imagUrl}
          />
          <Paragraph className={CardStyles.cardName}>{data.name}</Paragraph>
          <Paragraph className={CardStyles.cardDescription}>{data.description}</Paragraph>

          {infoDisplay && (
            <Container className={CardStyles.info}>
              <Paragraph className={CardStyles.infoNumber}>{appText.card.bagCount}</Paragraph>
              <Paragraph className={CardStyles.infoPrice}>{appText.card.price}</Paragraph>
            </Container>
          )}

          {isInProductList && (
            <Container className={CardStyles.cardOperations} testId="updateAction">
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
  );
}

export default Card;
