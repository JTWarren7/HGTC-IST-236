import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import Button from '@/components/Button';
import { useState } from 'react';

export default function Index() {
  
  const [showAppInfo, setShowAppInfo] = useState<boolean>(false);

  const [enterText, setText] = useState('');

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNumber: number = getRandomInt(1, 20);

  var finalText = "Nothing Entered"
  if (randomNumber == 1) {
    finalText = "It is certain"
  } else if (randomNumber == 2) {
    finalText = "It is decidedly so"
  } else if (randomNumber == 3) {
    finalText = "Without a doubt"
  } else if (randomNumber == 4) {
    finalText = "Yes definitely"
  } else if (randomNumber == 5) {
    finalText = "You may rely on it"
  } else if (randomNumber == 6) {
    finalText = "As I see it, yes"
  } else if (randomNumber == 7) {
    finalText = "Most likely"
  } else if (randomNumber == 8) {
    finalText = "Outlook good"
  } else if (randomNumber == 9) {
    finalText = "Yes"
  } else if (randomNumber == 10) {
    finalText = "Signs point to yes"
  } else if (randomNumber == 11) {
    finalText = "Reply hazy, try again"
  } else if (randomNumber == 12) {
    finalText = "Ask again later"
  } else if (randomNumber == 13) {
    finalText = "Better not tell you now"
  } else if (randomNumber == 14) {
    finalText = "Cannot predict now"
  } else if (randomNumber == 15) {
    finalText = "Concentrate and ask again"
  } else if (randomNumber == 16) {
    finalText = "Dont count on it"
  } else if (randomNumber == 17) {
    finalText = "My reply is no"
  } else if (randomNumber == 18) {
    finalText = "My sources say no"
  } else if (randomNumber == 19) {
    finalText = "Outlook not so good"
  } else if (randomNumber == 20) {
    finalText = "Very doubtful"
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Magic 8 Ball</Text>
      {showAppInfo ? (
        <View>
          <View style={styles.circleContainer}>
            <View style={styles.triangle}></View>
            <Text style={styles.finalText}>{finalText}</Text>
          </View>
          <Button label = "Go Back" onPress={() => setShowAppInfo(false)} />
        </View>
      ) : (
        <View>
          <TextInput style={styles.inputText}
            value = {enterText}
            onChangeText = {setText}
            placeholder="Enter your question here"
          />
          <Button label = "Shake 8 Ball" onPress={() => setShowAppInfo(true)} />
        </View>
      )
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    marginBottom: 70,
    fontSize: 50,
  },
  inputText: {
    borderColor: '#000000',
    borderWidth: 2,
    marginHorizontal: 25,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 250,
    borderRadius: 5,
  },
  circleContainer: {
    width: 300, // Adjust this size as needed
    height: 300, // Adjust this size as needed
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
    borderRadius: "100%", // Makes the container circular
    marginBottom: 20,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 100,
    borderRightWidth: 100,
    borderTopWidth: 174,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
    position: 'absolute',
    top: 90, // Adjust for positioning within the circle
  },
  finalText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '30%'
  },
});