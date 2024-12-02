import { appText } from 'data/appText';
import data from 'data/items.json';
import { FC } from 'react';

import Container from 'components/Atoms/Container/Container';
import Card from 'components/Molecules/Card/Card';
import HeroCenterStyles from 'components/Molecules/HeroCenter/HeroCenter.module.css';
import { useViewport } from 'hooks/useViewport';
import Paragraph from 'components/Atoms/Paragraph/Paragraph'; // Import the Paragraph component

const HeroCenter: FC = () => {
  const viewport = useViewport();
  const numberOfItems =
    viewport === 'extra-large'
      ? 1
      : viewport === 'large'
      ? 2
      : viewport === 'medium'
      ? 0
      : 0;

  return (
    <Container
      className={HeroCenterStyles.heroCenterWrapper}
      testId="heroCenter"
    >
      <Container className={HeroCenterStyles.heroCenterTop}>
        <Paragraph className={HeroCenterStyles.title}>
          {appText.heroCenter.title}
        </Paragraph>
        <Paragraph className={HeroCenterStyles.subTitle}>
          {appText.heroCenter.subtitle}
        </Paragraph>
        <Paragraph className={HeroCenterStyles.description}>
          {appText.heroCenter.description}
        </Paragraph>
        <Paragraph className={HeroCenterStyles.bottomTitle}>
          {appText.heroCenter.bottomTitle}
        </Paragraph>
      </Container>
      <Container className={HeroCenterStyles.heroCenterBottom}>
        {data.map((el: DataItem, idx: number) =>
          idx > numberOfItems && idx < 5 && (
            <div key={idx}>
              <Card
                data={el}
                id={el.id}
                isInHome
                isSelectable={false}
                testId={`heroCard-${el.id}`}
              />
            </div>
          )
        )}
      </Container>
    </Container>
  );
};

export default HeroCenter;
