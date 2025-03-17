import {createElement} from '../render';
import {SORT_TYPES} from '../consts';

const createItemTripSort = (type, isChecked) => `
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}" ${isChecked ? 'checked' : ''}
    ${type === 'offers' || type === 'event' ? 'disabled' : '' }
    >
    <label class="trip-sort__btn" for="sort-${type}">${type}</label>
  </div>
`;

const createTripSort = () => `
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
        ${SORT_TYPES.map((itemSort, index) => createItemTripSort(itemSort, index === 0)).join('')}
    </form>
`;

export default class TripSort {
  getTemplates() {
    return createTripSort();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplates());
    }
    return this.element;
  }

  removeElement () {
    this.element = null;
  }
}
