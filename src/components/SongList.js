import React from "react";
import { connect } from "react-redux"; //This is a react component
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    //This.props === {songs: state.songs}
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// mapStateToProps is a conventional name used, but we can call it anything
// state will have all data Like songList and selectedSong
const mapStateToProps = (state) => {
  return { songs: state.songs }; // Sometime later it will return as props
};

export default connect(mapStateToProps, {
  selectSong, //selectSong:selectSong (ES funda pass just one name as both are same)
})(SongList); //Function returning function
