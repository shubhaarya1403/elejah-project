import React from 'react'
import {Image, StyleSheet, Text,TouchableOpacity, View } from 'react-native'


const Result = () => {
  return (
    <View>
    <View>
     <Text>Result</Text>
     </View>
      <View style={styles.bannerContainer}>
       <Image 
       source={{
    uri:'https://thumbs.dreamstime.com/b/quiz-word-people-question-marks-concept-questionnaire-show-vector-surrounded-competition-banner-exam-interview-190932020.jpg'}}
       style={styles.banner}
       resizeMode="contain"
       />
     </View>
     <View>
     <TouchableOpacity>
     <Text>Home</Text>
     </TouchableOpacity>
     </View>
     </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent:'center',
    alignItems:'center',
  },
});
