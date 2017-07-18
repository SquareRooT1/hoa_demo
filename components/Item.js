import React, { Component } from 'react';
import {View , Text , Image} from 'react-native';
import {Card ,CardSection } from './common';


export default class Item extends Component {


  render(){
    const { title, thumbnail, id,buyPrice,ownerNick} = this.props.item;
    return(
        <Card>
          <CardSection>
            <Image style={{flex:1, height: 240, width : null}}
              source={{uri: thumbnail[0].orj}}
              resizeMode="stretch" />
          </CardSection>

          <CardSection style={{flex:1,height:100, width :null}}>
            <View style={styles.infoContainerStyle}>
              <Text style={styles.textTitleStyle}> {title} </Text>
              <View style={styles.itemInformationStyle}>
              <Text style={styles.textInformationStyle}>Satıcı : {ownerNick}</Text>
              <Text style={styles.textInformationStyle}>Fiyat : {buyPrice}₺ </Text>
              </View>
            </View>
          </CardSection>
        </Card>
    );
  };
}

const styles = {
    infoContainerStyle : {
      flexDirection  :'row',
      justifyContent : 'space-between'
    },
    itemInformationStyle: {
      flexDirection : 'column',
      alignItems    :'flex-end',
      justifyContent:'flex-end'
    },
    textTitleStyle : {
      fontSize    : 16,
      width       : 160,
      fontWeight  :'600'
    },
    textInformationStyle :{
      fontSize     : 16,
      marginRight  : 75
    }

}
