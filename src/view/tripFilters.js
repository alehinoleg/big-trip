import {createElement} from '../render';
import {SORT_TYPES} from '../consts';
import {capitalizeFirstLetter} from '../utils';

const createTripFiltersFilter = (type) => `
  <div class="trip-filters__filter">
    <input id=filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" checked>
    <label class="trip-filters__filter-label" for="filter-${type}">${capitalizeFirstLetter(type)}</label>
  </div>
`;

const createTripFilters = () => `
    <form class="trip-filters" action="#" method="get">
        ${SORT_TYPES.map((type) => createTripFiltersFilter(type).join(''))}
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
  }

  removeElement () {
    this.element = null;
  }
}
