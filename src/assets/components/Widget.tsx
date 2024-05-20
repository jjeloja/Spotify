//import React from "react";
import funnyCat from "../images/funnyCat.jpg";
import cherryMiffy from "../images/cherryMiffy.jpg";
import flowerCat from "../images/flowerCat.jpg";
import miffy from "../images/miffy.jpg";
import skaterCat from "../images/skaterCat.jpg";
import spotify from "../images/spotify.png";
import PlaylistIcon from "./PlaylistIcon";
import "bootstrap/dist/css/bootstrap.css";

const Widget = () => {
  return (
    <>
      <div className="Window d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="container row col-4 bg-info rounded-top-4">
          <div className="col-2 mt-3">
            <PlaylistIcon
              image={skaterCat}
              width={64}
              height={64}
              rounded={3}
            />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-10  ">
                <h2 className=" mt-3 mb-0">SPOTIFY!?</h2>
              </div>
              <div className="col-2 d-flex justify-content-end mt-3">
                <PlaylistIcon image={spotify} width={40} height={40} />
              </div>
              <div className="col">
                <p className="mt-0 ">currently coding :D</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container row col-4 bg-warning rounded-bottom-4"
          style={{ height: 122 }}
        >
          <div className="col mt-3 mb-2">
            <PlaylistIcon image={funnyCat} width={92} height={92} rounded={4} />
          </div>
          <div className="col mt-3 mb-2">
            <PlaylistIcon image={miffy} width={92} height={92} rounded={4} />
          </div>
          <div className="col mt-3 d-flex justify-content-center mb-2">
            <PlaylistIcon
              image={cherryMiffy}
              width={92}
              height={92}
              rounded={4}
            />
          </div>
          <div className="col mt-3 mb-2">
            <PlaylistIcon
              image={flowerCat}
              width={92}
              height={92}
              rounded={4}
              position="float-end"
            />
          </div>
        </div>
        <p className="mt-1">Spotify</p>
      </div>
    </>
  );
};

export default Widget;
