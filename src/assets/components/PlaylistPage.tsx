//import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import PlaylistIcon from "./PlaylistIcon";
import check from "../images/check.png";
import download from "../images/download.png";
import play from "../images/play.png";
import shuffle from "../images/shuffle.png";
import whitePlay from "../images/whitePlay.png";
import device from "../images/device.png";
import settings from "../images/settings.png";
import skaterCat from "../images/skaterCat.jpg";
import miffy from "../images/miffy.jpg";
import cherryMiffy from "../images/cherryMiffy.jpg";
import nct from "../images/nct.png";
import global from "../images/global.png";
import home from "../images/home.png";
import search from "../images/search.png";
import library from "../images/library.png";
import profile from "../images/profile.png";
import graySpotify from "../images/grayspotify.png";
import arrow from "../images/arrow.png";

const PlaylistPage = () => {
  return (
    <>
      <div className="Window d-flex flex-column justify-content-center align-items-center bg-dark">
        <div className="TopHalf row col-3 pt-0 bg-primary bg-gradient">
          <div className="col-2 mt-1">
            <div className="button text-black mt-3 ms-2">
              <PlaylistIcon image={arrow} width={20} height={20}></PlaylistIcon>
            </div>
          </div>
          <div className="d-flex justify-content-center col-8 mt-3 mb-2">
            <PlaylistIcon
              image={skaterCat}
              width={230}
              height={230}
              position="mt-3"
            />
          </div>
          <div className="col-2"></div>
        </div>

        <div className="DescriptionAndButtons row col-3 d-flex justify-content-start bg-secondary pt-2">
          <h4 className="mb-0">Playlist Name</h4>
          <p className="mb-0">Description</p>
          <div className="d-flex justify-items-start mb-0">
            <PlaylistIcon
              image={profile}
              width={20}
              height={20}
              position="mt-1"
            />
            <p className="col-1 ps-1 mb-0">Creator</p>
          </div>
          <div className="d-flex justify-items-start mb-1">
            <PlaylistIcon
              image={global}
              width={10}
              height={10}
              position="mt-2"
            />
            <p className="col-11 ps-1 mb-0"> 127 Saves • 1h 19m</p>
          </div>
          <div className="d-flex allign-items-start mb-1 col">
            <PlaylistIcon
              image={skaterCat}
              width={30}
              height={38}
              rounded={2}
            />
            <PlaylistIcon
              image={check}
              width={20}
              height={20}
              position="mt-2 ms-3"
            />
            <PlaylistIcon
              image={download}
              width={20}
              height={20}
              position="mt-2 ms-3"
            />
            <PlaylistIcon
              image={settings}
              width={20}
              height={20}
              position="mt-2 ms-3"
            />
            <div className="ms-auto">
              <PlaylistIcon
                image={shuffle}
                width={20}
                height={20}
                position="mt-0 mb-2"
              />
              <PlaylistIcon
                image={play}
                width={40}
                height={40}
                position="ms-3 mt-0 mb-2"
              />
            </div>
          </div>
        </div>

        <div className="Songs container row col-3 bg-white">
          SONGS • SONGS • SONGS • SONGS • SONGS • SONGS • SONGS • SONGS • SONGS
          • SONGS • SONGS • SONGS • SONGS • SONGS • SONGS • SONGS • SONGS •
          SONGS • SONGS • and more
        </div>

        <div className="Recommendations container col-3 bg-success mb-5">
          <h5 className="mt-2">You might also like</h5>
          <div className="ms-1 mb-5">
            <PlaylistIcon
              image={miffy}
              width={167}
              height={167}
              position="mb-5 col-6"
            />
            <PlaylistIcon
              image={cherryMiffy}
              width={167}
              height={167}
              position="ms-3 mb-5 col-6"
            />
          </div>
        </div>

        <div className="position-fixed bottom-0 col-3 row flex-column">
          <div className="CurrentlyPlaying bg-danger rounded-2">
            <div className="d-flex justify-items-start mt-1">
              <PlaylistIcon
                image={nct}
                width={35}
                height={35}
                rounded={1}
                position="mt-1 mb-2"
              />
              <div className="col">
                <h6 className="col-1 ps-2 mb-0">Name</h6>
                <p className="ps-2 mb-0">Artist</p>
              </div>
              <PlaylistIcon
                image={device}
                width={25}
                height={25}
                rounded={1}
                position="mt-2 mb-2"
              />
              <PlaylistIcon
                image={whitePlay}
                width={25}
                height={25}
                rounded={1}
                position="mt-2 ms-3 mb-2"
              />
            </div>

            <div className="container">
              <div
                className="rounded-pill bg-white"
                style={{ height: "2px" }}
              ></div>
            </div>
          </div>

          <div className="Navigation bg-warning mt-0 flex-column">
            <div className="row mt-1 mb-1">
              <div className="col-3 d-flex justify-content-center">
                <PlaylistIcon image={home} width={30} height={30} />
              </div>

              <div className="col-3 d-flex justify-content-center">
                <PlaylistIcon image={search} width={30} height={30} />
              </div>
              <div className="col-3 d-flex justify-content-center">
                <PlaylistIcon image={library} width={30} height={30} />
              </div>
              <div className="col-3 d-flex justify-content-center">
                <PlaylistIcon image={graySpotify} width={30} height={30} />
              </div>
              <div className="col-3  d-flex justify-content-center p-0 ms-0">
                Home
              </div>
              <div className="col-3  d-flex justify-content-center p-0 ms-0">
                Search
              </div>
              <div className="col-3  d-flex justify-content-center p-0 ms-0">
                Your Library
              </div>
              <div className="col-3  d-flex justify-content-center p-0 ms-0">
                Premium
              </div>
              <div className="container col-4">
                <div
                  className="rounded-pill bg-white mt-2 mb-1"
                  style={{ height: "5px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaylistPage;
