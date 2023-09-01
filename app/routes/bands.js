import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

class Band {
  @tracked name;

  constructor({ id, name, songs }) {
    this.id = id;
    this.name = name;
    this.songs = songs;
  }
}

class Song {
  constructor({ title, rating, band }) {
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
  }
}

export default class BandsRoute extends Route {
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

    const makeUp = new Song({
      title: 'Make Up',
      band: 'The Heart Kiss',
      rating: 100000,
    });

    const prirva = new Song({
      title: 'Prirva',
      band: 'The Heart Kiss',
      rating: 10000,
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
      songs: [pretender],
    });

    const theHeartKiss = new Band({
      id: 'the-heart-kiss',
      name: 'The Heart Kiss',
      songs: [makeUp, prirva],
    });

    return [theHeartKiss, ledZeppelin, fooFighters];
  }
}
