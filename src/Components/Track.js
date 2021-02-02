import React from "react";
import TrackContent from "./TrackContent";

function Track(props) {
  const { album } = props.track;
  const [, cover] = album.images;

  const onPlayTrack = () => {
    props.clicked(props.track.id);
  };

  return (
    <div className="track">
      {/* reproductor */}
      <div>
        <img
          className="img-cover"
          src={cover.url}
          alt={album.name}
          onClick={onPlayTrack}
        />
      </div>
      <TrackContent track={props.track} />
      {/* <TrackContent album={props.track.album} artist={props.track.artist} /> */}
    </div>
  );
}

export default Track;
