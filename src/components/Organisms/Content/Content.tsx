import { appText } from 'data/appText';
import { FC, useContext } from 'react';

import Container from 'components/Atoms/Container/Container';
import Card from 'components/Molecules/Card/Card';
import ContentStyles from 'components/Organisms/Content/Content.module.css';
import { AppContext } from 'hooks/useContext';
import Paragraph from 'components/Atoms/Paragraph/Paragraph'; // Import the Paragraph component

const Content: FC = () => {
  const { data, isShowItem } = useContext(AppContext);

  return (
    <Container className={ContentStyles.contentWrapper}>
      {isShowItem && (
        <Container className={ContentStyles.contentMessage}>
          <Paragraph>{appText.content.selectMessage}</Paragraph>  // Updated to use Paragraph
        </Container>
      )}
      <Container className={ContentStyles.content} id="contentCards">
        {isShowItem &&
          data?.map((el: DataItem, idx: number) => (
              <div key={idx}>
                <Card
                  data={el}
                  id={el.id}
                  isInHome
                  isSelectable
                  testId={`card-${el.id}`}
                />
              </div>
            ))}
      </Container>
    </Container>
  );
}

export default Content;
