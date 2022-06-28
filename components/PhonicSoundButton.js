import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressedButtonIndex: '' };
  }
  playSound = async (soundChunk) => {
    console.log(soundChunk);
    var soundLink =
      'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonIndex === this.state.pressedButtonIndex
            ? [styles.chunkButton, { backgroundColor: 'black' }]
            : [styles.chunkButton, { backgroundColor: 'blue' }]
        }
        onPress={() => {
          this.setState({ pressedButtonIndex: this.props.buttonIndex });
          this.playSound(this.props.soundChunk);
        }}>
        <Text
          style={
            this.props.buttonIndex === this.state.pressedButtonIndex
              ? [styles.displayText, { backgroundColor: 'black' }]
              : [styles.displayText, { backgroundColor: 'blue' }]
          }>
          {this.props.wordChunk}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red',
  },
});
