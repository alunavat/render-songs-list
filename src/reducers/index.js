import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Boyfriend", duration: "4:05" },
    { title: "Root", duration: "5:06" },
    { title: "Best Day of my Life", duration: "3:07" },
    { title: "Silence", duration: "4:05" },
    { title: "Afterhours", duration: "3:12" },
  ];
};

const selectedSongReducer = (selectedSong = null, actions) => {
  if (actions.type === "SONG_SELECTED") {
    return actions.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
