import React, { Component } from 'react';
import {View , Text , Image} from 'react-native';
import {Card ,CardSection } from './common';


export default class Item extends Component {

  render(){
    const { title, thumbnailUrl, url, id} = this.props.item;
    return(
        <Card>
          <CardSection>
            <View style={styles.itemHeaderStyle}>
              <View >
                <Image
                    style={{
                      alignSelf: 'center',
                      height: 80,
                      width: 80,
                      borderWidth: 1,
                      borderRadius: 40
                    }}
                    source={{uri: thumbnailUrl}}
                    resizeMode="cover" />
            </View>
            <Text style={styles.texContainerStyle}> { title } id: {id} </Text>
        </View>
        </CardSection>

        <CardSection>
        <Image style={{flex:1, height: 240, width : null}}
             source={{uri: url}}
             resizeMode="stretch" />
        </CardSection>
        </Card>
    );
  };
}

const styles = {
   itemHeaderStyle: {
     flexDirection :'row',
     justifyContent : 'space-between'
   },
   texContainerStyle : {
      justifyContent: 'center',
      alignItems : 'center',
      marginLeft: 10,
      marginRight: 75,
   }
}
