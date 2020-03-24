import React, { Component } from 'react';
import { BottomNavigation, Text, Icon } from 'react-native-paper';

const MusicRoute = () => <Text>Comment</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class ButtonView extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Comment', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  }; 

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}