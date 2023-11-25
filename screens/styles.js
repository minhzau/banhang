import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  camera: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default styles;
