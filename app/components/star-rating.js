import Component from '@glimmer/component';

export default class StarRatingComponent extends Component {
  getMaxRating() {
    return this.args.maxRating ?? 55;
  }
}
