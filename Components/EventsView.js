import React, { Component } from 'react'
import { Text, View, Button, ScrollView, Image } from 'react-native';

export default class  EventsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        dataSource: []
    
    };
}
componentDidMount = () => {
    this.setState({
        fromFetch: true,
        loading: true,
    })
    fetch("http://5bb1bc576418d70014071c7e.mockapi.io/modal/list")
        .then(response => response.json())
        .then((responseJson) => {
            
                this.setState({
                    loading: true,
                    dataSource: responseJson,
                })
            
        })
        .catch(error => console.log(error))
}
render(){
 const { dataSource } = this.state;
    return (
          <ScrollView>
            <View>
              {dataSource.map(item => (
              <View>
                <Text key={item.id}></Text>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>{item.subtitle}</Text>
                <Text style={{width:50,height:50}}>{item.image}</Text>
                <Text>{item.description}</Text>
                <Text>{item.price}</Text>
              </View>
              ))}
            </View>
          </ScrollView>
      
    )
        
        }
      }
