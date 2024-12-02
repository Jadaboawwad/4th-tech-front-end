import { render, screen } from '@testing-library/react'
import { appText } from 'data/appText'

import ProductList from './ProductList'

const { queryByAltText, queryByTestId, queryByText } = screen

const productListElements = {
  addProduct: () => queryByAltText(appText.addProduct.alt),
  emptyMessage: () => queryByText(appText.productList.emptyMessage),
  productForm: () => queryByTestId('form'),
  productItems: () => queryByTestId('productItems'),
}

describe('ProductList', () => {
  describe('When ProductList is rendered', () => {
    it('should render children correctly', () => {
      render(<ProductList />)
      expect(productListElements.addProduct()).toBeInTheDocument()
      expect(productListElements.productForm()).not.toBeInTheDocument()
    })
  })
})
