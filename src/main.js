import Presenter from './presenter/presenter';
import TripFilters from './view/tripFilters';
import TripSort from './view/tripSort';
import TripEvents from './view/tripEvents';
import EventEdit from './view/eventEdit';
import EventNew from './view/eventNew';

const tripControlsElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

// Создаем экземпляры компонентов
const tripFiltersComponent = new TripFilters();
const tripSortComponent = new TripSort();
const tripEventsComponent = new TripEvents();
const eventEditComponent = new EventEdit();
const eventNewComponent = new EventNew();

// Передаем их в Presenter
const tripFiltersPresenter = new Presenter({ container: tripControlsElement, component: tripFiltersComponent });
const tripSortPresenter = new Presenter({ container: tripEventsElement, component: tripSortComponent });
const tripEventsPresenter = new Presenter({ container: tripEventsElement, component: tripEventsComponent });
const eventEditPresenter = new Presenter({ container: tripEventsElement, component: eventEditComponent });
const eventNewPresenter = new Presenter({container: tripEventsElement, component: eventNewComponent});


tripFiltersPresenter.init();
tripSortPresenter.init();
tripEventsPresenter.init();
eventEditPresenter.init();
eventNewPresenter.init();
