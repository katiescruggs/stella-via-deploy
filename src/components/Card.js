import React from 'react';
import { colors } from '../assets/colors';
import { connect } from 'react-redux';
import { changePage, setConstellation } from '../actions';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableHighlight, 
  Image 
} from 'react-native';

export const Card = ({ currentPage, changePage, setConstellation, constellation }) => {
  const handlePress = () => {    
    const nextPage = currentPage === 'Search' 
      ? 'ConstellationSearch' 
      : 'ConstellationTonight';

    setConstellation(constellation);
    changePage(nextPage);
  };

  const { 
    translation, 
    name, 
    image,
    visible 
  } = constellation;

  const source = image ? image : null;

  const visibleEye = visible 
    ? <Image 
      style={styles.eye}
      source={require('../assets/icons/night-sky.png')} /> 
    : null;

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        {visibleEye}
        <Text style={styles.cardTitle}>
          {name}
        </Text>
        <Text style={styles.translation}>
          {`"${translation}"`}
        </Text>
      </View>
      <TouchableHighlight 
        style={styles.button}
        onPress={handlePress} 
        activeOpacity={0.3} 
        underlayColor={colors.$darkPurple}>
        <Image 
          style={styles.icon}
          source={require('../assets/icons/eye.png')}/>
      </TouchableHighlight>
      <Image 
        source={source}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colors.$cardShadow,
    borderColor: colors.$purple,
    borderBottomWidth: 6,
    paddingBottom: 10,
    width: '100%'
  },
  cardHeader: {
    backgroundColor: colors.$darkPurple,
    width: '100%',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5
  },
  eye: {
    position: 'absolute',
    top: 5,
    left: 5, 
    height: 40,
    width: 40,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.$white
  },
  translation: {
    fontSize: 16,
    color: colors.$white
  },
  button: {
    position: 'absolute', 
    right: 15, 
    bottom: 15,
    backgroundColor: colors.$purple,
    borderRadius: 10,
    padding: 5
  },
  icon: {
    height: 35,
    width: 35
  },
  img: {
    height: 200, 
    width: 200
  }
});

export const mapStateToProps = state => ({
  currentPage: state.page
});

export const mapDispatchToProps = dispatch => ({
  changePage: (pageRoute) => {
    dispatch(changePage(pageRoute));
  },
  setConstellation: (pageRoute) => {
    dispatch(setConstellation(pageRoute));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);