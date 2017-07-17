import React , {Component} from 'react';
import {ScrollView ,View,Text} from 'react-native';
import  {Button, Input, Spinner} from './common';
import Item from './Item';
import axios from 'axios';
const _ = require('lodash');

export default class ListItems extends Component {

    state = {
      items:[],
      data: [],
      direction : null,
      isLoading : null
    };

    componentWillMount(){
      this._fetchItems();
    }

    _fetchItems(){
      this.setState({
        isLoading : true
      });
      axios.get('http://jsonplaceholder.typicode.com/albums/1/photos')
          .then((res) => {
            this.setState({items : res.data, data :res.data, isLoading : false});
          });
    }

    _renderItems(){
      return  this.state.items.map(item =>
        <Item key = {item.id} item = { item } />

      );
    }

    _reRenderItems(){
      if(this.state.direction == 'desc'){
        this.setState({
          items: _.orderBy(this.state.items, ['id'],['asc']),
          direction : 'asc'
        });
      }else{
        this.setState({
          items: _.orderBy(this.state.items, ['id'],['desc']),
          direction : 'desc'
        });
      }

    }

    onFilterTextChange(text){
      text = text.toLowerCase();
      let itemsArr = [];
        if(text == null){
            this.setState({
              items: this.state.data
            })
        }
      this.state.data.forEach((item) => {
          if(item.title.indexOf(text) > -1){
            itemsArr.push(item);
          }
      })
      this.setState({
        items : itemsArr
      })
    }

  render(){
    if(this.state.isLoading){
      return(
        <View>
          <Spinner />
        </View>
      )
    }else{
      return(
          <ScrollView>
            <Button onPress={() => this._reRenderItems()}> {this.state.direction == 'desc' ? 'Azalan sırayla göster': 'Artan sırayla göster'} </Button>
            <Input
              label = "Search"
              placeholder = "Enter text for filter"
              onChangeText = {this.onFilterTextChange.bind(this)}
            />
            {this.state.items.length > 0 ? this._renderItems() : <Text style={styles.mutedText}> No Item Found </Text>}
          </ScrollView>
      );
    }
  }
}

const styles = {
  mutedText :{
    color : '#95a5a6',
    fontSize : 22,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
