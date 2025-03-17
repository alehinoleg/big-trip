import {createElement} from '../render';
import {FILTERS_TYPES} from '../consts';

const createItemTripFilter = (type, isChecked) => `
  <div class="trip-filters__filter">
    <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" ${isChecked ? 'checked' : ''}>
    <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
  </div>
`;

const createTripFilters = () => `
    <form class="trip-filters" action="#" method="get">
        ${FILTERS_TYPES.map((type, index) => createItemTripFilter(type, index === 0)).join('')}
    </form>
  `;

export default class TripFilters {
  getTemplates () {
    return createTripFilters();
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
