import { screen } from '@testing-library/react'
import { appText } from 'data/appText'

import { AppProvider } from 'hooks/useContext'
import * as useSelectionModule from 'hooks/useSelection'
import { render } from 'utils/testUtils'


import ProductItems from './ProdcutItems';

const { queryByAltText, queryByTestId, queryByText } = screen;

const productItemsElements = {
  delete: () => queryByAltText(appText.card.deleteAction),
  emptyMessage: () => queryByText(appText.productList.emptyMessage),
  items: () => queryByTestId('productItems'),
  loading: () => queryByTestId('loading'),
  product: () => queryByTestId('product-0'),
  update: () => queryByText(appText.card.updateAction),
};

let useSelectionSpy: jest.SpyInstance;

describe('ProductItems', () => {
  describe('When product items loaded from local storage', () => {
    beforeEach(() => {
      useSelectionSpy = jest.spyOn(useSelectionModule, 'useSelection');
    });

    it('should not render any product with undefined data and show empty message', () => {
      useSelectionSpy.mockReturnValue({ isLoading: false });
      render(
        <AppProvider
          appContext={{
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
            isShowModal: true,
          }}
        >
          <ProductItems />
        </AppProvider>
      );
      expect(productItemsElements.product()).not.toBeInTheDocument();
    });

    it('should not render any product with empty data and show empty message', () => {
      useSelectionSpy.mockReturnValue({ isLoading: false });
      render(
        <AppProvider
          appContext={{
            handleMutation: jest.fn(),
            handleShowModal: jest.fn(),
            isShowModal: false,
          }}
        >
          <ProductItems />
        </AppProvider>
      );

      expect(productItemsElements.product()).not.toBeInTheDocument();
      expect(productItemsElements.emptyMessage()).toBeInTheDocument();
    });

    it('renders the product when data is available', () => {
      useSelectionSpy.mockReturnValue({ isLoading: false });
      render(<ProductItems />);
      expect(productItemsElements.product()).toBeInTheDocument();
    });

    it('shows loading indicator when data is loading', () => {
      useSelectionSpy.mockReturnValue({ isLoading: true });
      render(<ProductItems />);
      expect(productItemsElements.loading()).toBeInTheDocument();
    });
  });
});
