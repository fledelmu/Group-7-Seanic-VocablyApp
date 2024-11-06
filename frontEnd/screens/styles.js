import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const colors = {
  pastelBlue: '#7671FA', // Changed from pastelGreen to pastelBlue for clarity
  lightGray: '#E5EAF3',  // Changed from softYellow to lightGray for accuracy
  deepCoral: '#07244C',  // Changed from coral to deepCoral to reflect a darker shade
  slateGray: '#7E7F9C',  // Changed from darkBrown to slateGray for better representation
  black: '#000000',
  white: '#FFFF'
};

// Other Styles
const styles = StyleSheet.create({
  
  mainMenuContainer: {
    flex: 1,
    backgroundColor: colors.lightGray, // Updated to use lightGray
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitContainer: {
    position: 'absolute', // Enable absolute positioning
    top: 10, // Distance from the top
    right: 20, // Distance from the right
    marginVertical: 20,
    width: '10%', // Width of the button container
    backgroundColor: colors.slateGray, // Background color
    borderRadius: 10, // Rounded corners
    overflow: 'hidden', // Apply rounded corners to children
    borderColor: colors.slateGray, // Border color
    borderWidth: 2, // Border width
  },
  buttonContainer: {
    marginVertical: 20,
    width: '80%', // Wider button container
    backgroundColor: colors.slateGray, // Use slateGray for the background
    borderRadius: 10, // Rounded corners for button container
    overflow: 'hidden', // Ensure rounded corners apply to children
    borderColor: colors.slateGray, // Use lightGray for the border color
    borderWidth: 2, // Set the border width to make the border visible
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderColor: colors.slateGray, // Change this to a color from your colors object
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    width: '80%', // Adjust to your preference
    backgroundColor: '#fff', // Change to a desired background color
},
  title: {
    fontSize: 36, // Larger title size
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.black, // Updated to use slateGray
    textAlign: 'center', // Centered text
    textShadowColor: '#000', // Text shadow for depth
    textShadowOffset: { width: 1, height: 1 }, // Shadow offset
    textShadowRadius: 3, // Shadow radius
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray, // Updated to use lightGray
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
    borderRadius: 20,
    backgroundColor: colors.pastelBlue,
    borderColor: colors.slateGray,
  },
  letter: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.lightGray, // Changed to pastelBlue
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
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
  box: {
    width: 330, 
    height: 330,
    marginTop: -40,
    marginBottom: 15,
    backgroundColor: colors.white, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40, 
    padding: 10, 
  },
  image: {
    width: 200,
    height: 200,
  },
  wordText: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 70,
    marginTop: -30,
  },
  startingScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    padding: 20,
  },
  instruction: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  button: {
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export { styles, colors};
