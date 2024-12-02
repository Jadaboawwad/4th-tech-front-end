import { appText } from 'data/appText'
import { FC } from 'react'

import Container from 'components/Atoms/Container/Container'
import CloseStyles from 'components/Molecules/Close/Close.module.css'


interface IAddMoreProps {
  handleClose?: (timeout?: number) => void
}

const Close: FC<IAddMoreProps> = ({ handleClose }) => (
  <Container className={CloseStyles.closeWrapper}>
    <img
      alt={appText.close.alt}
      className={CloseStyles.closeImage}
      onClick={() => handleClose && handleClose()}
      src="svg/close.svg"
    />
  </Container>
)

export default Close
