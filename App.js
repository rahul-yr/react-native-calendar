import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Calendar} from 'react-native-calendars';

 
export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    var dat = new Date().getDate();
    return (
      <View style={styles.container}>
        <Text style={styles.titleyear}>Calendar</Text>
        <Calendar
        
        markedDates={{
            '2020-10-22': {marked: true},
          }}
        firstDay ={1}
        
        theme = {{
          textMonthFontFamily :"Montserrat-SemiBold",
          textMonthFontSize : 18,
          textDayFontFamily: "Montserrat-Medium",
          textDayFontSize : 15,
          textDayHeaderFontFamily:"Montserrat-Medium",
          textDayHeaderFontSize: 13,
          backgroundColor:"#ECEDF1",
          dotColor:"#D51236",
          
        }}
        
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
  titleyear: {
    fontFamily : "Montserrat-Bold",
    fontSize :30,
    textAlign:"center",
    color:"blue"
  },
});