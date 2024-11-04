import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#0C331C',
    paddingBottom: 40,
  },
  smallLogoImg: {
    width: 350,
    height: 100,
    marginBottom: 200,
    zIndex: 1,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Courier',
    padding: 10,
    textAlign: 'left',
    marginVertical: 20,
    width: '80%',
    lineHeight: 28,
    zIndex: 1,
  },
  btn: {
    backgroundColor: '#68D391',
    borderRadius: 25,
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
    zIndex: 1,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  circleImg: {
    width: '200%',
    height: '130%',
    position: 'absolute',
    top: 200,
    opacity: 1,
    zIndex: 1,
  },
  ellipseImg: {
    width: '150%',
    height: '70%',
    top: 800,
    left: 50,
    transform: [{ rotate: '-2deg' }],
    zIndex: 1,
  },
});
