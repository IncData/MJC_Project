
import colors from '../styles/colors';

const listing1Photo = require('./photos/listing1.png');
const listing2Photo = require('./photos/listing2.png');
const listing3Photo = require('./photos/listing3.png');
const listing8Photo = require('./photos/listing8.png');
const listing9Photo = require('./photos/listing9.png');
const listing11Photo = require('./photos/listing11.png');

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
      {
        id: 2,
        photo: listing2Photo,
        type: 'CENTRE CULTUREL LECLERC',
        title: 'Dîner Internationale',
        location: 'Strasbourg, France',
        color: colors.blue,      
      },
      {
        id: 3,
        photo: listing3Photo,
        type: 'MUSÉE RODIN',
        title: 'Sortie au Musée',
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
      {
        id: 9,
        photo: listing9Photo,
        type: 'PISCINE MUNICIPALE',
        title: 'Sortie Natation',
        location: 'Strasbourg, France',
        color: colors.pink01,
      },
      {
        id: 11,
        photo: listing11Photo,
        type: 'STADE DE LA VILLE',
        title: 'Sortie match de Basketball',
        location: 'Strasbourg, France',
        color: colors.pink01,
      },
    ],
  },
];

export default listings;
