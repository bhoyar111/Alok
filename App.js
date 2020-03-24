import React, { Component, Document } from 'react';
import { ScrollView } from 'react-native';
import Header from './Components/Header'
import NewsFeed from './Components/NewsFeed';
import EventsView from './Components/EventsView';
import FooterView from './Components/FooterView';
import MenuView from './Components/MenuView';
// import HomeView from './Components/HomeView';
// import Stream from './Components/Stream';
// import StoryView from './Components/StoryView';
// import CardView from './Components/CardView';
// import Buttons from './Components/Buttons';


export default function App () {
    return (
      <ScrollView>
          <Header />
          <MenuView />
          <NewsFeed />
          <EventsView />
          <FooterView />
          {/* <HomeView /> */}
          {/* <Stream /> */}
          {/* <CardView /> */}
          {/* <StoryView/> */}
          {/* <Buttons /> */}
      </ScrollView>
    )
  }
