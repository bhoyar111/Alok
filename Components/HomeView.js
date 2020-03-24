import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';

// import CardComponent from '../CardComponent';

export default class HomeView extends Component {
    static navigationOptions = {

        tabBarIcon:({tintColor}) => (
            <Icon name="ios-home" style={{color:tintColor}} />
        )
    }
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={{height:100}}>

                        <View style={{flex:1, flexDirection:'row',
                         justifyContent:'spece-between', alignItems:'center', paddinghorizontal:7 }}>
                            <Text style={{fontWeight:'bolt'}}>Stories</Text>
                            <View style={{ flexDirection:'row', alignItems:'center' }}>
                                <Icon name="md-play" style={{ fontsize:14}}></Icon>
                            </View>
                            <Text>Match All</Text>
                        </View>

                        <View style={{flex:3}}>
                            <ScrollView

                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems:'center',
                                paddingStart:5,
                                paddingEnd:5

                            }}
                            >
                                <Thumbnail
                                    style={{marginhorizontal:5, borderColor:'pink', borderWidth:2 }}
                                    source={require
                                        ('./assets/img.JPG')} />
                                 <Thumbnail
                                    style={{marginhorizontal:5, borderColor:'pink', borderWidth:2 }}
                                    source={require
                                        ('./assets/img.JPG')} />
                                 <Thumbnail
                                    style={{marginhorizontal:5, borderColor:'pink', borderWidth:2 }}
                                    source={require
                                        ('./assets/img.JPG')} />
                                 <Thumbnail
                                    style={{marginhorizontal:5, borderColor:'pink', borderWidth:2 }}
                                    source={require
                                        ('./assets/img.JPG')} />
                                 <Thumbnail
                                    style={{marginhorizontal:5, borderColor:'pink', borderWidth:2 }}
                                    source={require
                                        ('./assets/img.JPG')} />

                            
                            </ScrollView>
                        </View>

                    </View>
                    
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="102" />
                    <CardComponent imageSource="1" likes="103" />
                </Content>
            </Container>
            
        )
    }
}
