import React , {Component} from 'react';
import {ScrollView ,View,Text} from 'react-native';
import  {Button, Input, Spinner} from './common';
import data from './data/data.json'
import Item from './Item';
import axios from 'axios';
const _ = require('lodash');

export default class ListItems extends Component {

    state = {
      items:[],
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
      if(data){
        this.setState({
          items: data,
          isLoading : false
        })
      }
    }

    _renderItems(){
      return  this.state.items.map(item =>
        <Item key = {item.id} item = { item } />

      );
    }

    _reRenderItems(){
      if(this.state.direction == 'desc'){
        this.setState({
          items: _.orderBy(this.state.items, ['buyPrice'],['asc']),
          direction : 'asc'
        });
      }else{
        this.setState({
          items: _.orderBy(this.state.items, ['buyPrice'],['desc']),
          direction : 'desc'
        });
      }

    }

    onFilterTextChange(text){
      text = text.toLowerCase();
      let itemsArr = [];
        if(text == null){
            this.setState({
              items: data
            })
        }
        this.setState({
          isLoading : true
        })
        data.forEach((item) => {
          if(item.title.toLowerCase().indexOf(text) > -1){
            itemsArr.push(item);
          }
      })
      this.setState({
        items : itemsArr,
        isLoading : false
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
          <ScrollView >
            <Button onPress={() => this._reRenderItems()}> {this.state.direction == 'desc' ? 'Azalan fiyatla göster': 'Artan fiyatla göster'} </Button>
            <Input
              label = "Ürün Ara :"
              placeholder = "Aranacak Kelimeyi giriniz"
              onChangeText = {this.onFilterTextChange.bind(this)}
            />
            {this.state.items.length > 0 ? this._renderItems() : <Text style={styles.mutedText}> Ürün Bulunamadı </Text>}
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
