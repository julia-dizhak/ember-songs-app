import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export class Band {
  @tracked name;
  @tracked songs;

  constructor({ id, name, songs }) {
    this.id = id;
    this.name = name;
    this.songs = songs;
  }
}

export class Song {
  constructor({ title, rating, band }) {
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
  }
}

export default class BandsRoute extends Route {
  @service catalog;

  model() {
    // songs
    const blackDog = new Song({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3,
    });

    const pretender = new Song({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2,
    });

    const pretender_1 = new Song({
      title: 'The Pretender new',
      band: 'Foo Fighters',
    });

    const makeUp = new Song({
      title: 'Make Up',
      band: 'The Heart Kiss',
      rating: 5,
    });

    const prirva = new Song({
      title: 'Prirva',
      band: 'The Heart Kiss',
      rating: 5,
    });

    // bands
    const ledZeppelin = new Band({
      id: 'led-zeppelin',
      name: 'Led Zeppelin',
      songs: [blackDog],
    });

    const fooFighters = new Band({
      id: 'foo-fighters',
      name: 'Foo Fighters',
      songs: [pretender, pretender_1],
    });

    const theHeartKiss = new Band({
      id: 'the-heart-kiss',
      name: 'The Heart Kiss',
      songs: [makeUp, prirva],
    });

    this.catalog.add('band', theHeartKiss);
    this.catalog.add('band', ledZeppelin);
    this.catalog.add('band', fooFighters);


    return this.catalog.bands;
  }
}
