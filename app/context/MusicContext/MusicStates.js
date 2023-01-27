import { useReducer } from "react";
import MusicContext from "./MusicContext";
import { MusicReducer } from "./MusicReducer";
import { LOAD_MUSICS } from "./MusicTypes";
import Sound from 'react-native-sound';
import { useRef } from "react";

export const MusicStates = ({ children }) => {

  const initialState = useMemo(
    () => ({
      listMusic: []
    }),
    []
  );

  const [state, dispatch] = useReducer(MusicReducer, initialState);

  let audioPlayer = useRef(null)
  const playSound = (music) => {
    let tmpSound = state.listMusic.filter(item => item.id == music.id)
    if (tmpSound.length > 0) {
      Sound.setCategory('Playback');
      if (audioPlayer.current) {
        audioPlayer.current.stop();
      }
      audioPlayer.current = new Sound(music.audio, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        audioPlayer.current.play((success) => {
          if (success) {

            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      });
    }
  }

  const loadSounds = (listSounds) => {
    dispatch({ type: LOAD_MUSICS, payload: listSounds })
  }

  return <MusicContext.Provider
    value={{
      playSound,
      loadSounds,
    }}
  >
    {children}
  </MusicContext.Provider>
}