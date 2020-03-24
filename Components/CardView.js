import React, { useState, useEffect } from 'react';
import { View, Text, item, } from 'react-native';
import Card from './Card';
import Axios from "axios";



export default function CardView() {

  const [ cards, setCards ] =  useState([]);
  const [isLoading, setLoading]= useState(false);


  useEffect(() => {
    getCards()
}, []);

const getCards = async () => {
  setLoading(true);
  try {
     const response =  await 
     Axios.get("https://5bb1bc576418d70014071c7e.mockapi.io/modal/list")

      setLoading(false);
      console.log(response.data[0])
      setCards(response.data)
  
  } catch(error){
      console.log(error);
  }
}

if (isLoading){
  return <Text>Loading..</Text>
  return(
    <View>        
         {
            cards.map(item => (
                <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                />
            ))
        }
    
   </View>
  );
}
}