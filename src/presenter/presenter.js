import {render} from '../render';

export default class Presenter {

  constructor({container, component, place}) {
    this.container = container;
    this.component = component;
    this.place = place;
  }

  init() {
    render(this.component, this.container, this.place);
  }
}
