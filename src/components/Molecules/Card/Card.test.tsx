import { fireEvent, render, screen } from '@testing-library/react';
import { appText } from 'data/appText';
import data from 'data/items.json';

import * as useSelectionModule from 'hooks/useSelection';

import Card from './Card';

const { getByAltText, queryByAltText, queryByTestId, queryByText } = screen;

const cardElements = {
  card: () => queryByTestId('card-0'),
  cardDescription: () => queryByText(data[0].description),
  cardImage: () => getByAltText(data[0].name),
  cardName: () => queryByAltText(data[0].name),
  delete: () => queryByAltText(appText.card.deleteAction),
  numberOfBags: () => queryByText(appText.card.bagCount),
  price: () => queryByText(appText.card.price),
  update: () => queryByText(appText.card.updateAction),
};

let useSelectionSpy: jest.SpyInstance;

describe('Card', () => {
  describe('When component is rendered', () => {
    beforeEach(() => {
      useSelectionSpy = jest.spyOn(useSelectionModule, 'useSelection');
      useSelectionSpy.mockReturnValue({ isCardHasBorder: true });
    });

    describe('In Home', () => {
      it('renders without info', () => {
        expect.hasAssertions();
        render(<Card data={data[0]} />);
        expect(cardElements.cardDescription()).toBeInTheDocument();
        expect(cardElements.cardImage()).toBeInTheDocument();
        expect(cardElements.cardName()).toBeInTheDocument();
        expect(cardElements.numberOfBags()).not.toBeInTheDocument();
        expect(cardElements.price()).not.toBeInTheDocument();
      });

      it('renders with info', () => {
        expect.hasAssertions();
        render(<Card data={data[0]} infoDisplay />);
        expect(cardElements.cardDescription()).toBeInTheDocument();
        expect(cardElements.cardImage()).toBeInTheDocument();
        expect(cardElements.cardName()).toBeInTheDocument();
        expect(cardElements.numberOfBags()).toBeInTheDocument();
        expect(cardElements.price()).toBeInTheDocument();
      });

      it('should be selectable with truthy props provided', () => {
        expect.hasAssertions();
        render(<Card data={data[0]} isInHome isSelectable testId="card-0" />);

        const cardContainer = cardElements.card() as HTMLElement;

        fireEvent.click(cardContainer);
      });
    });

    describe('In ProductList', () => {
      it('should be selectable in product list when truthy props provided', () => {
        expect.hasAssertions();
        const clickOnDelete = jest.fn();

        render(
          <Card
            data={data[0]}
            isInProductList
            isSelectable
            onDeleteCard={clickOnDelete}
          />
        );
      });

      it('should be updatable', () => {
        expect.hasAssertions();
        const clickOnUpdate = jest.fn();

        render(
          <Card data={data[0]} isInProductList onUpdateCard={clickOnUpdate} />
        );

        const update = cardElements.update() as HTMLElement;

        fireEvent.click(update);

        expect(cardElements.update()).toBeInTheDocument();
        expect(clickOnUpdate).toHaveBeenCalled();
        expect(clickOnUpdate).toHaveBeenCalledWith('update', data[0].id); // Correct usage of toHaveBeenCalledWith
      });

      it('should be deletable', () => {
        expect.hasAssertions();
        const clickOnDelete = jest.fn();

        render(
          <Card data={data[0]} isInProductList onDeleteCard={clickOnDelete} />
        );
        const remove = cardElements.delete() as HTMLElement;

        fireEvent.click(remove);

        expect(cardElements.delete()).toBeInTheDocument();
        expect(clickOnDelete).toHaveBeenCalled();
        expect(clickOnDelete).toHaveBeenCalledWith('delete', data[0].id); // Correct usage of toHaveBeenCalledWith
      });
    });
  });
});
