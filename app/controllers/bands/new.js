import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { dasherize } from '@ember/string';
import { action } from '@ember/object';
import { Band } from '../../routes/bands';
import { inject as service } from '@ember/service';

export default class BandsNewController extends Controller {
  @tracked name;
  @service catalog;

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  saveBand() {
    let band = new Band({ name: this.name, id: dasherize(this.name) });
    this.catalog.add('band', band);
  }
}
