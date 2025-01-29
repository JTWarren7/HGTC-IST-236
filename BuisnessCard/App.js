import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/JunoAndMe.jpg")}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Trevor Warren</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("JWarre19@hgtc.edu")} >JWarre19@hgtc.edu</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:+18439577742")}>(843) 957-7742</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/JTWarren7/HGTC-IST-236")}>https://github.com/JTWarren7</Text>
        </View>
      </SafeAreaView>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 2,
    paddingTop: 50,
    paddingBottom: 450,
    alignItems: 'center',
    backgroundColor: '#33c4ff',
    width: "100%",
  },
  image: {
    width: "90%",
    height: 400,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 3,
    backgroundColor: '#ff8800',
    alignItems: 'center',
    justifyContent: 'top',
    width: "100%",
  },
  text: {
    backgroundColor: '#ff8800',
    color: '#ffffff',
    textAlign: 'center',
    justifyContent: 'top',
    fontSize: 25,
    borderBottomWidth: 2,
    margin: 10,
    paddingBottom: 20,
    width: "100%",
    borderColor: '#33c4ff',
    fontWeight: 'bold',
  },
});
