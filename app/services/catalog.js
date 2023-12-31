import Service from '@ember/service';
import { tracked } from 'tracked-built-ins';

export default class CatalogService extends Service {
  storage = {};

  constructor() {
    super(...arguments);
    this.storage.bands = tracked([]);
    this.storage.songs = tracked([]);
  }

  get bands() {
    return this.storage.bands;
  }

  get songs() {
    return this.storage.songs;
  }

  add(type, record) {
    let collection = type === 'band' ? this.storage.bands : this.storage.songs;
    collection.push(record);
  }

  find(type, filterFn) {
    let collection = type === 'band' ? this.bands : this.songs; 
    return collection.find(filterFn);
  }
}
