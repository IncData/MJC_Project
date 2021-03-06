

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SearchBar from '../components/SearchBar';
import Categories from '../components/explore/Categories';
import Listings from '../components/explore/Listings';
import colors from '../styles/colors';
import categoriesList from '../data/categories';
// import listings from '../data/listings';
import listings from '../data/listingsfavorites';


class SavedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteListings: [],
    };
    // this.handleAddToFav = this.handleAddToFav.bind(this);
    this.renderListings = this.renderListings.bind(this);
    // this.onCreateListClose = this.onCreateListClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  renderListings() {
    return listings.map((listing, index) => (
      <View
        key={`listing-${index}`}
      >
        <Listings
          key={`listing-item-${index}`}
          title={listing.title}
          boldTitle={listing.boldTitle}
          listings={listing.listings}
        />
      </View>
    ));
  }

  render() {
    const { data } = this.props;

    console.log(data.multipleListings)

    return (
      <View style={styles.wrapper}>
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.heading}>
            Mes Favoris
          </Text>
          {this.renderListings()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    paddingTop: 100,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  categories: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04,
  },
});


const ListingsQuery = gql`
  query {
    multipleListings{
      title,
      description
    }
  }
`

const SavedContainerTab = graphql(ListingsQuery)(SavedContainer);

export default SavedContainerTab;

