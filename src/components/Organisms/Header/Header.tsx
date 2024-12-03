import { FC, useContext } from 'react'

import Container from 'components/Atoms/Container/Container'
import Logo from 'components/Molecules/Logo/Logo'
import HeaderStyles from 'components/Organisms/Header/Header.module.css'
import Navigation from 'components/Organisms/Header/Navigation'
import { AppContext } from 'hooks/useContext'
import { useViewport } from 'hooks/useViewport'

const Header: FC = () => {
  const { handleShowCart, isShowCart } = useContext(AppContext)

  return (
    <Container className={HeaderStyles.headerWrapper} testId="header">
      <Navigation />
      {useViewport() === 'extra-large' && <Logo testId="webLogo" />}
    </Container>
  )
}

export default Header
