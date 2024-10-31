import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    letterContainer: {
      width: screenWidth / 4.5,
      height: screenWidth / 4.5,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#000',
      margin: 10,
    },
    letter: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    detailContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    topCenterLetter: {
      position: 'absolute',
      top: 20,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    letterTopCenter: {
      fontSize: 60,
      fontWeight: 'bold',
    },
    wordContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    wordText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    mainMenuContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 40,
    },
    buttonContainer: {
      marginVertical: 15,
      width: '70%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  export default styles;