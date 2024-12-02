import { FC } from 'react'

import Container from 'components/Atoms/Container/Container'
import Content from 'components/Organisms/Content/Content'
import Header from 'components/Organisms/Header/Header'
import Hero from 'components/Organisms/Hero/Hero'

import 'styles/App.css'
import { useLoadData } from 'hooks/useLoadData'
import { useSelection } from 'hooks/useSelection'
import { useScrollTo } from 'hooks/useScrollTo'
import { AppProvider } from 'hooks/useContext'

const App: FC = () => {
  const { data } = useLoadData()
  const {
    handleCardClick,
    handleCartRemoveAll,
    handleMutation,
    handleShowCart,
    handleShowModal,
    isShowCart,
    isShowModal,
    selectedCards,
  } = useSelection()
  const { handleClickToScrollTo, isShowButton, isShowItem } = useScrollTo()
  const context = {
    data,
    handleCardClick,
    handleCartRemoveAll,
    handleClickToScrollTo,
    handleMutation,
    handleShowCart,
    handleShowModal,
    isShowButton,
    isShowCart,
    isShowItem,
    isShowModal,
    selectedCards,
  }

  return (
    <AppProvider appContext={context}>
      <Container className="appContainer">
        <Header />
        <Hero />
        <Content />
      </Container>
    </AppProvider>
  )
}

export default App
