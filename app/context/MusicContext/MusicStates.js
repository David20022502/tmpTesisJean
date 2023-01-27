import { useReducer, useMemo } from "react";
import MusicContext from "./MusicContext";
import { MusicReducer } from "./MusicReducer";
import { HANDLE_CONTROLLER_MUSIC, HANDLE_CURRENT_MUSIC, HANDLE_IS_PLAYING, HANDLE_LISTNER, HANDLE_ON_SLIDING_CHANGE, LOAD_MUSICS } from "./MusicTypes";
import Sound from 'react-native-sound';
import { useRef } from "react";
import { ListenerReducer } from "./ListenerReducer";
import { useEffect } from "react";

export const MusicStates = ({ children }) => {

  const initialState = useMemo(
    () => ({
      listMusic: [],
      currentTime: "00:00",
      musicDuration: "00:00",
      isPlaying: true,
      sliderVale: 0,
      sliderValeMax: 1,
      currentSong: null,
      onSlidingChange:false
    }),
    []
  );
  const initialStateListener = useMemo(
    () => ({
      isListener: false
    }),
    []
  );

  const [state, dispatch] = useReducer(MusicReducer, initialState);
  const [stateListner, dispatchListener] = useReducer(ListenerReducer, initialStateListener);
  let audioPlayer = useRef(null)
  let isPlayingInside = useRef(true);
  let indexMusic = useRef(0);
  let onSlidingChange = useRef(false);

  useEffect(() => {
    if (!stateListner.isListener) {
      initAudioListener();
      dispatchListener({ type: HANDLE_LISTNER, payload: true })
    }
  }, [stateListner])

  const playSound = (music) => {

    for (let i = 0; i < state.listMusic.length; i++) {
      if (state.listMusic[i].id == music.id) {
        indexMusic.current = i;

      }

    }
    dispatch({ type: HANDLE_CURRENT_MUSIC, payload: music })
    if (music) {
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
            controllerMusic({
              currentTime: "00:00",
              musicDuration: "00:00",
            })

            isPlayingInside.current = true;


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
  const controllerMusic = (values) => {
    dispatch({ type: HANDLE_CONTROLLER_MUSIC, payload: values })
  }
  const initAudioListener = () => {
    onProgressMusic();
    setTimeout(initAudioListener, 100)
  }
  const onProgressMusic = () => {
    if (audioPlayer.current && isPlayingInside.current&&!state.onSlidingChange) {

      audioPlayer.current.getCurrentTime((seconds) => {
        let time = calculateTime(seconds)
        let sliderValue = seconds / audioPlayer.current.getDuration();
        let timeDuration = calculateTime(audioPlayer.current.getDuration())
        controllerMusic({
          currentTime: time,
          musicDuration: timeDuration.includes("-") ? "00:00" : timeDuration,
          sliderVale: sliderValue,
          sliderValeMax: 1
        })


      })
    }
  }
  const calculateTime = (secs) => {
    let segundos = parseInt(secs);
    let minutos = segundos / 60;
    minutos = parseInt(minutos);
    segundos = segundos - (minutos * 60);
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    return `${minutos}:${segundos}`;
  }
  const onPlayPause = () => {
    if (audioPlayer.current) {
      if (isPlayingInside.current) {
        audioPlayer.current.pause();
      } else {
        audioPlayer.current.play();
      }
      isPlayingInside.current = !isPlayingInside.current;
      dispatch({ type: HANDLE_IS_PLAYING, payload: isPlayingInside.current })
    }
  }
  const onNextMusic = () => {
    if (audioPlayer.current) {
      indexMusic.current += 1;
      if (indexMusic.current >= state.listMusic.length) {
        indexMusic.current = 0;
      }
      console.log(" indexMusic.current-----", indexMusic.current)

      playSound(state.listMusic[indexMusic.current])
    }
  }
  const onPrevMusic = () => {
    if (audioPlayer.current) {
      indexMusic.current -= 1;
      if (indexMusic.current < 0) {
        indexMusic.current = state.listMusic.length - 1;
      }
      console.log(" indexMusic.current-----", indexMusic.current)
      playSound(state.listMusic[indexMusic.current])
    }
  }

  const onSlidingStartContect = async () => {
    try {
      isPlayingInside.current = false;
      audioPlayer.current.pause();
      dispatch({type:HANDLE_ON_SLIDING_CHANGE,payload: true})
      
    } catch (error) {
      console.log("ERROR EN REPRODUCTOR DE CANCIONES BARRA INICIO----", error)
    }
  }
  const onValueChangeSliderContext = (values) => {
    console.log("cambiando valoir de slieder", values)
    if (audioPlayer.current&& state.onSlidingChange) {
      let value=values * audioPlayer.current.getDuration();

      let time = 0;
      audioPlayer.current.setCurrentTime(value)
      audioPlayer.current.getCurrentTime((seconds) => {
        time = calculateTime(seconds)
      })

      controllerMusic({
        currentTime: time,
        sliderVale: value,
        sliderValeMax: 1
      })
      audioPlayer.current.play();
      isPlayingInside.current = true;
      dispatch({type:HANDLE_ON_SLIDING_CHANGE,payload: false})
      
    }
  }
  const onSlidingCompleteContext = (value) => {
    console.log("cambiando valoir de slieder complete", value)
    if (audioPlayer.current) {
      audioPlayer.current.setCurrentTime(value)
      audioPlayer.current.play();
      controllerMusic({
        sliderVale: value,
      })
    }
  }

  return <MusicContext.Provider
    value={{
      currentTime: state.currentTime,
      musicDuration: state.musicDuration,
      isPlaying: state.isPlaying,
      sliderVale: state.sliderVale,
      sliderValeMax: state.sliderValeMax,
      currentSong: state.currentSong,
      playSound,
      loadSounds,
      onPlayPause,
      onPrevMusic,
      onNextMusic,
      onSlidingStartContect,
      onValueChangeSliderContext,
      onSlidingCompleteContext

    }}
  >
    {children}
  </MusicContext.Provider>
}