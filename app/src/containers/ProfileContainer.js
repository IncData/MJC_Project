import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class ProfileContainer extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Mark Muller</Text>
              <Text style={styles.info}>mark.muller@gmail.com</Text>
              <Text style={styles.description}>Strasbourg, FRANCE</Text>
              <Text style={styles.description}>"Je suis toujours passionné par des activités sportives et ma priorité c'est de faire des super belles rencontres au MJC."</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text >Editer Profil</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text >Mes Activités</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
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
 


