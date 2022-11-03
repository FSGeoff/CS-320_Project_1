import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Billie Jean', duration: '5:05' },
        { title: 'Unbelievable', duration: '4:30' },
        { title: 'Criminal Minded', duration: '5:15' },
        { title: 'Giving Love', duration: '4:15' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer
});