import {action, makeObservable, observable} from 'mobx';

class SessionStore {
  constructor() {
    makeObservable(this);
  }
}

export default SessionStore;
