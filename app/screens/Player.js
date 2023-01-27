import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import Screen from '../components/Screen';
import color from '../misc/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import PlayerButton from '../components/PlayerButton';
import { AudioContext } from '../context/AudioProvider';
import {
  changeAudio,
  moveAudio,
  pause,
  play,
  playNext,
  resume,
} from '../misc/audioController';
import { convertTime, storeAudioForNextOpening } from '../misc/helper';
import { selectAudio } from '../misc/audioController';
import { Image } from 'react-native';
import { Button, Icon } from '@rneui/base';

const { width } = Dimensions.get('window');

const Player = ({onPress}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const context = useContext(AudioContext);
  const { playbackPosition, playbackDuration, currentAudio } = context;

  const calculateSeebBar = () => {
    if (playbackPosition !== null && playbackDuration !== null) {
      return playbackPosition / playbackDuration;
    }

    if (currentAudio.lastPosition) {
      return currentAudio.lastPosition / (currentAudio.duration * 1000);
    }

    return 0;
  };

  useEffect(() => {
    context.loadPreviousAudio();
    console.log("CURRENT AUDIO: ",currentAudio)
  }, []);

  const handlePlayPause = async () => {
    await selectAudio(context.currentAudio, context);
    console.log("CURRENT AUDIO: ",currentAudio)
    
  };

  const handleNext = async () => {
    await changeAudio(context, 'next');
   
  };

  const handlePrevious = async () => {
    await changeAudio(context, 'previous');
    
  };

  const renderCurrentTime = () => {
    if (!context.soundObj && currentAudio.lastPosition) {
      return convertTime(currentAudio.lastPosition / 1000);
    }
    return convertTime(context.playbackPosition / 1000);
  };

  if (!context.currentAudio) return null;

  return (
    <Screen>
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
          <View style={styles.midBannerContainer}>
            <Image 
              style={{width:130,height:120}}
              source={{uri:currentAudio.artwork}} />
          </View>
          <View style={styles.audioPlayerContainer}>
            <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',paddingHorizontal:10,width:"96%",left:"8%"}}>
              <Text numberOfLines={1} style={styles.audioTitle}>
                {context.currentAudio.title}
              </Text>
              <TouchableOpacity onPress={onPress}>
                <Icon name='caretdown' type='ant-design' size={15}/>
              </TouchableOpacity>
            </View>
            
            {/*<View style={styles.audioCountContainer}>
              <View style={{ flexDirection: 'row',backgroundColor:"red" }}>
                {context.isPlayListRunning && (
                  <>
                    <Text style={{ fontWeight: 'bold' }}>From Playlist: </Text>
                    <Text>{context.activePlayList.title}</Text>
                  </>
                )}
              </View>
              <Text style={styles.audioCount}>{`${
                context.currentAudioIndex + 1
              } / ${context.totalAudioCount}`}</Text>
            </View>*/}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 25,
              }}
            >
              <Text>
                {currentPosition ? currentPosition : renderCurrentTime()}
              </Text>
              <Text>{convertTime(context.currentAudio.duration)}</Text>
              
            </View>
            <Slider
              style={{ width: "95%", height: 30,marginHorizontal:10 }}
              minimumValue={0}
              maximumValue={1}
              value={calculateSeebBar()}
              minimumTrackTintColor={color.FONT_MEDIUM}
              maximumTrackTintColor={color.ACTIVE_BG}
              onValueChange={value => {
                setCurrentPosition(
                  convertTime(value * context.currentAudio.duration)
                );
              }}
              onSlidingStart={async () => {
                if (!context.isPlaying) return;

                try {
                  await pause(context.playbackObj);
                } catch (error) {
                  console.log('error inside onSlidingStart callback', error);
                }
              }}
              onSlidingComplete={async value => {
                await moveAudio(context, value);
                setCurrentPosition(0);
              }}
            />
            <View style={styles.audioControllers}>
              <PlayerButton variation='PREV' onPress={handlePrevious} 
              />
              <PlayerButton
                onPress={handlePlayPause}
                style={{ marginHorizontal: 30 }}
                variation={context.isPlaying ? 'PLAY' : 'PAUSE'}/>
              <PlayerButton variation='NEXT' onPress={handleNext} 
              />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  audioControllers: {
    width:"100%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  audioCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  audioPlayerContainer:{
    width:"70%",
    //backgroundColor:"green",
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 250, 240,0.2)',
    //rgba(255, 250, 240,0.2)
  },
  audioCount: {
    textAlign: 'right',
    color: color.FONT_LIGHT,
    fontSize: 14,
  },
  midBannerContainer: {
    //flex: 1,
    width:"30%",
    //backgroundColor:"red",
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioTitle: {
    fontSize: 15,
    //backgroundColor:"purple",
    flex:1,
    color: color.FONT,
    paddingTop:10,
  },
});

export default Player;
