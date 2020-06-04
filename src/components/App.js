import React from "react";
import ReactDom from "react-dom";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
// import {selectSong} from '../actions';  // This means we need a Named Export

// import action from '../actions' this will by default take the index.js file in the folder

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
