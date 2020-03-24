import React, { Component } from 'react';
import { View ,Button, StyleSheet} from 'react-native';

export default function Footer () {

    Login = async () => {
            console.log(this.state.username);
            fetch('https://5bb1bc576418d70014071c7e.mockapi.io/modal/list', {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                //   body: JSON.stringify({                
                //     "username": this.state.username,
                //     "password": this.state.password
                //   })
                }).then((response) => response.json())
                .then((res) => {
                    // this.props.navigation.navigate('Cart')
                    if(typeof(res.message) != "undefined"){
                        Alert.alert("Error", "Error: "+ res.message);
                    }
                    else{
                            // this.setState({ auth_token: res.auth_token });
                            Alert.alert("Welcome", " You have succesfully logged in");
                        }
                }).catch((error) => {
                    console.error(error);
                    });
          }

        return (
            <View style={styles.btn}>
               <Button title="LOGIN" color="green" onPress={this.Login.bind(this)}></Button>
               <Button title="Story" color="yellow"></Button>
               <Button title="Comment" color="blue"></Button>
               <Button title="Delete" color="red"></Button>
            </View>
        )
    }
    const styles = StyleSheet.create({
  
        btn: {
         flexDirection:'row'
        },
       
    });