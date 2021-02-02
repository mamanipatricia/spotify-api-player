import React, { useState, useEffect, useRef } from "react";

function Player(props) {
  const { trackID, items, onChangeTrackID } = props;

  const audioRef = useRef(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const foundTrack = items.find((item) => item.track.id === trackID);
    if (foundTrack) {
      audioRef.current.pause();
      setUrl(foundTrack.track.preview_url);
      audioRef.current.volume = 0.05;
    }
  }, [trackID, items]);

  useEffect(() => {
    url && audioRef.current.play();
  }, [url]);

  const lastTrack = () => {
    const indexFound = items.findIndex((item) => item.track.id === trackID);
    if (indexFound >= 1) {
      const lastIndex = items[indexFound - 1];
      onChangeTrackID(lastIndex.track.id);
    }
  };

  const nextTrack = () => {
    const indexFound = items.findIndex((item) => item.track.id === trackID);
    if (indexFound < items.length - 1) {
      const lastIndex = items[indexFound + 1];
      onChangeTrackID(lastIndex.track.id);
    }
  };

  return (
    <div>
      <button onClick={lastTrack}>BACK</button>
      <audio ref={audioRef} src={url} controls></audio>
      <button onClick={nextTrack}>NEXT</button>
    </div>
  );
}

export default Player;
