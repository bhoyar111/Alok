import React, { Component } from 'react'
import { Text, View, item, title, image, description,} from 'react-native';

export default class CardComponent extends Component {
    
    render() {
        return (
            <View>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.image}</Text>
                    
            </View>
            )
    }
}

