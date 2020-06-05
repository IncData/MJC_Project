
import colors from '../styles/colors';

const listing1Photo = require('./photos/listing1.png');
const listing2Photo = require('./photos/listing2.png');
const listing3Photo = require('./photos/listing3.png');
const listing4Photo = require('./photos/listing4.png');
const listing5Photo = require('./photos/listing5.png');
const listing6Photo = require('./photos/listing6.png');
const listing8Photo = require('./photos/listing8.png');
const listing9Photo = require('./photos/listing9.png');
const listing11Photo = require('./photos/listing11.png');
const listing12Photo = require('./photos/listing12.png');
const listing13Photo = require('./photos/listing13.png');
const listing14Photo = require('./photos/listing14.png');
const listing15Photo = require('./photos/listing15.png');
const listing16Photo = require('./photos/listing16.png');

const listings = [
  {
    title: 'Culturelles',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 1,
        photo: listing1Photo,
        type: 'SALLE DE CONCERT',
        title: 'Concert de Pauline',
        location: 'Strasbourg, France',
        color: colors.blue,
      },
    ],
  },
  {
    title: 'Sportives',
    boldTitle: false,
    showAddToFav: true,
    listings: [
      {
        id: 8,
        photo: listing8Photo,
        type: 'TERRAIN ILLKIRCH',
        title: 'Tournée de Golf',
        location: 'Strasbourg, France',
        color: colors.pink01,
      },
    ],
  },
];

export default listings;
