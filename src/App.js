import "./App.css";
import { useState, useEffect } from "react";

import Track from "./Components/Track";
import Player from "./Components/Player";

function App() {
  // useState
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState({});
  const [trackID, setTrackID] = useState("");

  const handlerCounter = (number) => {
    setCount(count + number);
  };
  const handlerCounter2 = (number) => {
    setCount((prevCount) => prevCount + number);
  };
  const handlerCounter5 = () => {
    // setCount((prevCount) => prevCount + 5);
    handlerCounter(5);
  };
  // Similar a componentDidMount y componentDidUpdate: - React ejecuta los efectos después de cada renderizado
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `You clickedd ${count} times`;
    console.log("count");
    if (count === 5) {
      alert("testets");
    }
  }, [count]);

  useEffect(() => {
    const url = `https://api.spotify.com/v1/playlists/2IHm4qBFx3xzJAJNGTbwhG/tracks?market=ES`;

    // "Authorization: Bearer BQCUKrU-bfh4hqcFF7TjvwvMZAlCDEoB2pJIh77U4SwwiUlQiISC66eaIT0wmvyFT_RmNig53s3hMgw3Wo1W4vWuGt8kcv3V-S-Qku15owmsvMqz5fzprlTF1qY3_Sqgh_elUrQrYIU2sHk26dF9V7ueoCyoVA`
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQCyUuK9HEU3u7mrAdC9J4J06Twxua-wa_yAxNdoYvoOXK6MrRU46K6Vdu-QHapFaONljqdEejX53ZHJ6vRET71f5jeyy2U0zgNmVIujPWt7WXOQntNixj953CyZY3REAFzlzlM8maWgpJ3cNuP6iHJzBXF2hQ",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        console.log("Success:", response);
        setResponse(response);
      });
  }, []);

  const playAudio = (newTrackID) => {
    console.log("prevURL", newTrackID);
    setTrackID(newTrackID);
  };

  return (
    <>
      <div className="App">
        test: {count}
        <button onClick={() => setCount(count + 1)}>click!</button>
        <button onClick={() => handlerCounter(1)}>click1</button>
        <button onClick={() => handlerCounter(2)}>click2</button>
        <button onClick={() => handlerCounter2(2)}>clicked</button>
        <button onClick={handlerCounter5}>clicked + 5</button>
        <Player
          items={response.items || []}
          trackID={trackID}
          onChangeTrackID={playAudio}
        />
        {response.items?.map((item) => {
          return (
            <Track key={item.track.id} track={item.track} clicked={playAudio} />
          );
        })}
      </div>
    </>
  );
}

export default App;
