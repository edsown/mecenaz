import { useEffect, useState, React } from "react";
import artistsData from "./Data";

function ArtistCard() {
  const [artist, setArtist] = useState([]);
  useEffect(() => {
    setArtist(artistsData);
  }, []);

  console.log(artist);
  return (
    <div className="artistSection" id="artistSection">
      <div className="ourArtists">
        <h1>Artistas em destaque</h1>
      </div>

      <div className="artistCards">
        {artist.map((artist) => {
          return (
            <div className="cardContainer">
              <h2 className="artistName">{artist.title}</h2>
              <img className="cardImage" src={artist.img}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArtistCard;
