import React from 'react';
import  { Header } from './components/common';
import ListItems from './components/ListItems';
import { View, ListView } from 'react-native';


export default class App extends React.Component {

  render() {
    return (
      <View style={{flex : 1}}>
       <Header headerText = "House Of Apps Demo" />
        <ListItems />
      </View>
    );
  }
}
