import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandRoute extends Route {
  @service catalog;
  
  model(params) {
    // This route was generated with a dynamic segment. Implement data loading
    // based on that dynamic segment here in the model hook.

    // previous solution
    // let bands = this.modelFor('bands');
    // return bands.find((band) => band.id === params.id);

    // read data from storage
    return this.catalog.find('band', (band) => band.id === params.id);
  }
}
