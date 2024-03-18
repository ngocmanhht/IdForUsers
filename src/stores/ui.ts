import {action, makeObservable, observable} from 'mobx';

class UIStore {
  constructor() {
    makeObservable(this);
  }
}

export default UIStore;
