import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const colors = {
  pastelGreen: '#ABC270', // Updated name for lightGray
  softYellow: '#FEC868',  // Updated name for softGray
  coral: '#FDA796',       // Updated name for lightYellow
  darkBrown: '#463C33',   // Updated name for darkText
};

// Main Menu Styles
const mainMenuStyles = StyleSheet.create({
  mainMenuContainer: {
    flex: 1,
    backgroundColor: colors.pastelGreen, // Updated to use pastelGreen
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36, // Larger title size
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.darkBrown, // Updated to use darkBrown
    textAlign: 'center', // Centered text
    textShadowColor: '#000', // Text shadow for depth
    textShadowOffset: { width: 1, height: 1 }, // Shadow offset
    textShadowRadius: 3, // Shadow radius
  },
  buttonContainer: {
    marginVertical: 20,
    width: '80%', // Wider button container
    backgroundColor: colors.coral, // Updated to use coral
    borderRadius: 10, // Rounded corners for button container
    overflow: 'hidden', // Ensure rounded corners apply to children
  },
});

// Other Styles
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

export { styles, colors, mainMenuStyles };
