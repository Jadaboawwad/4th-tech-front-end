import { render, screen } from '@testing-library/react'
import { appText } from 'data/appText'
import data from 'data/items.json'

import { AppProvider } from 'hooks/useContext'

import Content from './Content'
const { queryByTestId, queryByText } = screen

const contentElements = {
  emptyMessage: () => queryByText(appText.cart.emptyMessage),
  firstSelection: () => queryByTestId('select-0'),
  secondSelection: () => queryByTestId('select-1'),
  selectMessage: () => queryByText(appText.content.selectMessage),
  smapleCard: () => queryByTestId('card-1'),
}

describe('Content', () => {
  describe('When the Content is rendered', () => {
    it('renders the message and at least one card', () => {
      render(
        <AppProvider
          appContext={{
            data,
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
            isShowButton: false,
            isShowItem: true,
          }}
        >
          <Content />
        </AppProvider>
      )
      expect(contentElements.selectMessage()).toBeInTheDocument()
      expect(contentElements.smapleCard()).toBeInTheDocument()
    })

    it('should not render the message if the view more button not clicked', () => {
      render(
        <AppProvider
          appContext={{
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
            isShowButton: true,
            isShowItem: false,
          }}
        >
          <Content />
        </AppProvider>
      )
      expect(contentElements.selectMessage()).not.toBeInTheDocument()
      expect(contentElements.smapleCard()).not.toBeInTheDocument()
    })

    it('should not render the content if the view more button not clicked', () => {
      render(
        <AppProvider
          appContext={{
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
            isShowButton: false,
            isShowItem: true,
          }}
        >
          <Content />
        </AppProvider>
      )
      expect(contentElements.selectMessage()).toBeInTheDocument()
      expect(contentElements.smapleCard()).not.toBeInTheDocument()
    })
  })
})
