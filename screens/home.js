import React from 'react';
import {Image,StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import Title from '../components/title'


const Home = () => {
  return (
    <View>
    <Title />
    <View style={styles.bannerContainer}>
       <Image 
       source={{
    uri:'https://thumbs.dreamstime.com/b/quiz-word-people-question-marks-concept-questionnaire-show-vector-surrounded-competition-banner-exam-interview-190932020.jpg'}}
       style={styles.banner}
       resizeMode="contain"
       />
    </View>
    <TouchableOpacity>
    <Text>Start</Text>
    </TouchableOpacity>
     </View>
  );
};

export default Home;

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
