import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const colors = {
  primary: '#FEFEFE',    
  secondary: '#E6E8EB',  
  accent: '#F6E9B2',     
  background: '#E6E8EB', 
  text: '#070606',       
};

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
      fontSize: 36, // Larger title size
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#2196f3', // Blue color for title
      textAlign: 'center', // Centered text
      textShadowColor: '#000', // Text shadow for depth
      textShadowOffset: { width: 1, height: 1 }, // Shadow offset
      textShadowRadius: 3, // Shadow radius
    },
    buttonContainer: {
      marginVertical: 20,
      width: '80%', // Wider button container
      backgroundColor: '#2196f3', // Button background color
      borderRadius: 10, // Rounded corners for button container
      overflow: 'hidden', // Ensure rounded corners apply to children
    },
    startingScreenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffeb3b', // Bright yellow background
      padding: 20,
    },

    instruction: {
      fontSize: 22,
      color: '#000', // Black color for instruction text
      textAlign: 'center', // Centered text
      marginBottom: 30,
      fontStyle: 'italic', // Italic style for emphasis
    },
    button: {
      paddingVertical: 10, // Padding for button
      alignItems: 'center', // Center text in button
    },
  });

  export {styles, colors};