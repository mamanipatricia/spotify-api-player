import React from "react";

function TrackContent(props) {
  const { artists, name: title, duration_ms: duration } = props.track;
  return (
    <div className="track-content-wrapper">
      <div>FAVORITES</div>
      <div className="track-content">
        ALL CONTENT
        <span>{title}</span>
        {artists.map((artist) => {
          return <span key={artist.id}>{artist.name}</span>;
        })}
      </div>
      <div>{duration}</div>
    </div>
  );
}

export default TrackContent;
