

import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import SearchBar from '../components/SearchBar';
import Categories from '../components/explore/Categories';
import Listings from '../components/explore/Listings';
import colors from '../styles/colors';
import categoriesList from '../data/categories';
import listings from '../data/listings';
import axios from 'axios'

class ExploreContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteListings: [],
      listings: []
    };
    this.handleAddToFav = this.handleAddToFav.bind(this);
    this.renderListings = this.renderListings.bind(this);
    this.onCreateListClose = this.onCreateListClose.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/admin/getActivities/none-type')
    .then((data) => {
        this.setState(
          { listings: data.data.result }
        )
        //console.log(data.data.result)
        //setInfo({...info, activities : [...data.data.result]})
    })
    .catch(error => console.log(error))
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleAddToFav(listing) {
    const { navigate } = this.props.navigation;
    let { favouriteListings } = this.state;

    const index = favouriteListings.indexOf(listing.id);
    if (index > -1) {
      favouriteListings = favouriteListings.filter(item => item !== listing.id);
      this.setState({ favouriteListings });
    } else {
      navigate('CreateList', { listing, onCreateListClose: this.onCreateListClose });
    }
  }

  onCreateListClose(listingId, listCreated) {
    let { favouriteListings } = this.state;
    if (listCreated) {
      favouriteListings.push(listingId);
    } else {
      favouriteListings = favouriteListings.filter(item => item !== listingId);
    }
    this.setState({ favouriteListings });
  }

  renderListings() {

      return this.state.listings.map((listing, index) => (
      <View key={`listing-${index}`}>
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <View>
                  <Image style={styles.image} source={require('../img/mjc_about_us.png')}/>
                </View>
                <Text h4 style={styles.name}>{listing.title}</Text>
                <Text style={styles.description}>{listing.description}</Text>
                <Text style={styles.description}>{listing.address}</Text>
                <Text style={styles.description}>{listing.city}</Text>
                <Text style={styles.description}>{listing.zip}</Text>
                <Text style={styles.description}>{listing.activityType}</Text>
                <Text style={styles.description}>{listing.responsibleName}</Text>
                <Text style={styles.info}>{listing.responsibleEmail}</Text>
                <Text style={styles.description}>{listing.responsiblePhone}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text>s'inscrire</Text>  
                </TouchableOpacity> 
              </View>
            </View>
      </View>
    ));
    
  }



  render() {
    const { data } = this.props;

    console.log(data.multipleListings)

    return (
      <View style={styles.wrapper}>
        <SearchBar />
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.heading}>
            Activités
          </Text>
          <View style={styles.categories}>
            <Categories categories={categoriesList} />
          </View>
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
  image:{
    height:150,
    width:150
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  header:{
    backgroundColor: "#4f0c87",
    height:200,
  },

  container:{
    flexDirection:'column',
    alignItems:'flex-start',
    backgroundColor: "#ffffff",
    borderWidth:1,
    borderColor: 'black'
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1fc600",
    padding: 10
  },
  name:{
    fontSize:28,
    color: "#000000",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#1d91f3",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#7a777c",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#1d91f3",
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

const ExploreContainerTab = graphql(ListingsQuery)(ExploreContainer);

export default ExploreContainerTab;

