import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Song } from '../models/song';
import { Band } from '../models/band';

export default class BandsRoute extends Route {
  @service catalog;

  model() {
    // songs
    const blackDog = new Song({
      title: 'Black Dog',
      rating: 3,
    });

    const yellowLedbetter = new Song({
      title: 'yellow Ledbetter',
      rating: 4,
    });

    const pretender = new Song({
      title: 'The Pretender',
      rating: 2,
    });

    const pretender_1 = new Song({
      title: 'The Pretender new',
      rating: 3,
    });

    const makeUp = new Song({
      title: 'Make Up',
      rating: 5,
    });

    const prirva = new Song({
      title: 'Prirva',
      rating: 5,
    });

    const heart = new Song({
      title: 'Heart',
      rating: 4.5,
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
      songs: [makeUp, prirva, heart],
    });

    const pearlJam = new Band({
      id: 'pearl-jam',
      name: 'Pearl Jam',
      songs: [yellowLedbetter],
    });

    // connect songs to bands
    blackDog.band = ledZeppelin;
    yellowLedbetter.band = pearlJam;
    
    pretender.band = fooFighters;
    pretender_1.band = fooFighters;

    makeUp.band = theHeartKiss;
    prirva.band = theHeartKiss;
    heart.band = theHeartKiss;

    // keep bands under the catalog
    this.catalog.add('band', theHeartKiss);
    this.catalog.add('band', ledZeppelin);
    this.catalog.add('band', fooFighters);
    this.catalog.add('band', pearlJam);

    // keep songs under the catalog
    this.catalog.add('song', blackDog);
    this.catalog.add('song', yellowLedbetter);

    this.catalog.add('song', makeUp);
    this.catalog.add('song', prirva);
    this.catalog.add('song', heart);

    return this.catalog.bands;
  }
}
