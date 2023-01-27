import { LOAD_MUSICS } from "./MusicTypes";


export const MusicReducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case LOAD_MUSICS: {
            return {
                ...state,
                listMusic: payload
            }
        }
    }
}