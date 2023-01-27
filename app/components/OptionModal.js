import React from 'react';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import {
  View,
  StyleSheet,
  Modal,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import color from '../misc/color';
import Player from '../screens/Player';

const OptionModal = ({
  visible,
  currentItem,
  onClose,
  options,
  onPlayPress,
  onPlayListPress,
}) => {
  const { filename } = currentItem;
  return (
    <>
      <StatusBar hidden />
        {/*<Pressable visible={visible} onPress={onClose}>*/}
        <Modal animationType='slide' transparent visible={visible}>
          <View style={[styles.widgetContainerControl]}>
                  <Player onPress={onClose}/>
          </View>
          </Modal>
        {/*</Pressable>*/}
    </>
  );
};

const styles = StyleSheet.create({
  widgetArtisteTitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginHorizontal: 10,
    marginBottom: 12,
    marginTop: 1,
  },
  modalBg: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    //backgroundColor: color.MODAL_BG,
  },
  widgetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent:'flex-end',
    paddingHorizontal: 0,
    height: 60,
    width: Dimensions.get("window").width,
    backgroundColor: 'red',
  },
  widgetContainerControl: {
    //flexDirection: 'row',
    //alignItems: 'center',
    alignItems:'flex-end',
    paddingHorizontal: 0,
    height: 150,
    top:"82.2%",
    width: Dimensions.get("window").width,
    backgroundColor: 'blue',
  },
  
});

export default OptionModal;
