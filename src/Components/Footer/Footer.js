import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsPinterest,
  BsLinkedin,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top_content">
        <div className="flex">
          <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
          <h3>List your Show</h3>
          <h4>
            Got a show, event, activity or a great experience? Partner with us
            &amp; get listed on BookMyShow
          </h4>
        </div>
        <div>
          <button className="contact_btn">Contact today!</button>
        </div>
      </div>
      <div className="middle_footer_content">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 102 102"
            id="icon-resend"
            width="100%"
            height="100%"
          >
            <path d="M92.1 69l-5.6-13.9a1 1 0 0 0-1.1-.5c-1.9.8-4.1-.2-4.8-2.1-.4-.9-.4-1.9 0-2.8.4-.9 1.1-1.6 2-2 .2-.1.4-.2.5-.4s.1-.4 0-.6l-5.6-13.9a1 1 0 0 0-1.1-.5L61 38.5l9-20.9c.2-.4 0-.9-.4-1.1L57 11.1c-.4-.2-.9 0-1.1.4a3.3 3.3 0 0 1-4.3 1.8c-.8-.3-1.4-1-1.8-1.8-.3-.8-.3-1.7 0-2.5.1-.2.1-.4 0-.6-.1-.2-.2-.4-.4-.5L36.8 2.6c-.4-.2-.9 0-1.1.4L12.3 58.2l-3.9 1.5c-.2.2-.4.3-.4.5-.1.2-.1.4 0 .6l5.6 13.9c.2.4.7.6 1.1.5 1.9-.7 4.1.2 4.8 2 .4.9.4 1.9 0 2.8s-1.1 1.6-2 2c-.2.1-.4.2-.5.4-.1.2-.1.4 0 .6l5.4 14c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l68.1-27.3c.5-.2.7-.7.6-1.2zM36.9 4.4L48 9.1c-.2 1-.2 2 .2 3 .5 1.2 1.4 2.2 2.7 2.7 2.3 1 4.8.1 6.1-1.9l11.1 4.7-9.3 21.8-4.7 1.9L59 30.2l2.5-5.8c.1-.2.1-.4 0-.6s-.2-.4-.4-.5L38 13.5c-.2-.1-.4-.1-.6 0-.2.1-.4.2-.5.4L19.1 55.5l-4.7 1.9 22.5-53zm-1.4 16.7l.8.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-.8-.3 1.8-4.3 21.6 9.2-1.8 4.3-.8-.4c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1l.8.3-5.1 12-30.7 12.4 14.2-33.5zM23.7 95.6l-5-12.4c1-.6 1.7-1.4 2.2-2.5.6-1.3.6-2.8 0-4.1-.8-2-2.8-3.4-5-3.4-.4 0-.8 0-1.2.1L9.8 61l66.5-26.7 5 12.4c-1 .6-1.7 1.4-2.2 2.5a4.9 4.9 0 0 0 0 4.1c.8 2 2.8 3.4 5 3.4.4 0 .8 0 1.2-.1l5 12.4-66.6 26.6z"></path>
            <path d="M70 42.1c-.1-.2-.2-.4-.4-.5-.2-.1-.4-.1-.6 0L20.2 61.2a1 1 0 0 0-.5 1.1L30 87.8c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l42.3-17 6.4-2.6c.4-.2.6-.7.5-1.1L70 42.1zm3.5 27.3l-.3-.8a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.4.8-34.2 13.7-.3-.7a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.3.8-5.1 2-9.6-23.9 5.1-2 .3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 34.1-13.7.3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 4.9-2 9.6 23.9-4.9 2.1z"></path>
            <path d="M30.6 65.7c-.2-.4-.7-.6-1.1-.5s-.6.7-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm3.5 8.6a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm32.2-22.9a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm1.9 9.3l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1L69.7 60a1 1 0 0 0-1.1-.5c-.4.2-.6.7-.4 1.2zm-19.5-34l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.3.4-.1.9.4 1.1zm-7.8-3.3l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1zm13.4 41.4c-.5 0-.8.4-.8.8 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.3 1.9-4.2 4.2-4.3l-1.6 2.3c-.3.4-.2.9.2 1.2.1.1.3.1.5.1.3 0 .5-.1.7-.4l2.6-3.7c.3-.4.2-.9-.2-1.1L47.5 57c-.4-.3-.9-.2-1.2.2s-.2.9.2 1.2l1.9 1.4c-3 .3-5.4 2.9-5.4 5.9 0 3.3 2.7 6 6 6s6-2.7 6-6c.1-.5-.3-.9-.7-.9z"></path>
          </svg>
          <p>24/7 CUSTOMER CARE</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 102 102"
            id="icon-callcenter"
            width="100%"
            height="100%"
          >
            <path d="M68.8 29.4c0-10.4-8.4-18.8-18.8-18.8S31.2 19 31.2 29.4 39.6 48.2 50 48.2s18.8-8.4 18.8-18.8zm-35.8 0c0-9.3 7.6-17 17-17 9.3 0 17 7.6 17 17 0 9.3-7.6 17-17 17-9.3 0-17-7.6-17-17z"></path>
            <path d="M24 30.3c.5 0 .9-.4.9-.9C24.9 15.6 36.2 4.3 50 4.3s25.1 11.3 25.1 25.1c0 13.1-10.5 28.3-24.2 29v-3.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v8.6c0 .5.4.9.9.9s.9-.4.9-.9v-2.9c14.7-.7 26-16.8 26-30.8C76.9 14.6 64.8 2.5 50 2.5S23.1 14.6 23.1 29.4c0 .5.4.9.9.9z"></path>
            <path d="M68.1 63c-.6-.2-1.2-.3-1.9-.3-.9 0-2.3.7-4.9 2.1-3.2 1.7-7.7 4-10.6 4-3.2 0-8-2.3-11.5-4-2.8-1.3-4.3-2-5.3-2-.7 0-1.3.1-1.9.3C16.7 68.2 11.2 86 11.2 96.7c0 .5.4.9.9.9H88c.5 0 .9-.4.9-.9 0-10.8-5.6-28.6-20.8-33.7zM13 95.7c.3-12.1 7.2-26.8 19.6-30.9.4-.1.8-.2 1.3-.2.6 0 2.7 1 4.5 1.9 3.9 1.9 8.7 4.2 12.3 4.2 3.3 0 7.8-2.3 11.4-4.2 1.6-.8 3.6-1.9 4.1-1.9s.9.1 1.3.2C79.9 68.9 86.7 83.6 87 95.7H13zm3.6-55.3c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c0 .5.4.9.9.9zm66.8 0c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c-.1.5.4.9.9.9z"></path>
          </svg>
          <p>RESEND BOOKING COMFORMATION</p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="icon-newsletter"
            viewBox="-1 -1 102 102"
            width="100%"
            height="100%"
          >
            <g id="elnewsletter">
              <path
                class="elst0"
                d="M97.5 90.3V33.6c0-.5-.4-1-1-1H82.9V9.8c0-.5-.4-1-1-1H18.1a1 1 0 0 0-1 1v22.8H3.5a1 1 0 0 0-1 1v56.9c0 .1.1.1.1.2v.1c0 .1.1.1.2.1.1.1.2.1.2.1.1 0 .1 0 .2.1h93.4c.1 0 .3 0 .4-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2v-.1c0-.1.1-.1.1-.2.1 0 .1 0 .1-.1zm-1.9-55.7v53.6L63.9 64.1l18.6-17.7 7.7-7.4c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-6.8v-2.7h12.9zM50.2 56.1l43.4 33.1H6.4l43.8-33.1zm32.7-16.8h4.4l-4.4 4.1v-4.1zM19.1 10.8h61.8v34.5L62.4 62.9l-11.6-8.8c-.3-.3-.8-.3-1.2 0L37.8 63 19.1 45.3V10.8zm-2 32.6l-4.4-4.1h4.4v4.1zm0-8.8v2.7h-6.8c-.4 0-.8.2-.9.6-.1.4-.1.8.2 1.1l26.5 25.2-31.8 24V34.6h12.8z"
              ></path>
              <path
                class="elst0"
                d="M28.9 22.5h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1zm0 10h42.7a1 1 0 0 0 0-2H28.9a1 1 0 0 0 0 2zm0 9.9h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1z"
              ></path>
            </g>
          </svg>
          <p>SUBSCRIBE TO THE NEWALETTER</p>
        </div>
      </div>
      <div className="top_footer_content"></div>
      <div className="bottom_footer_content">
        <div wrap="wrap" class="bwc__sc-1iuy4bj-0 bwc__sc-au4qa5-1 jnnqYA">
          <div wrap="wrap" class="bwc__sc-1iuy4bj-0 bwc__sc-au4qa5-2 gatsMW">
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">
                Movies Now Showing in Mahishadal
              </div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/movies/bichaar/ET00359639"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Bichaar
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">
                Upcoming Movies in Mahishadal
              </div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/movies/boys-hostel/ET00367143"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Boys Hostel
                </a>
                <a
                  href="/movies/achan-oru-vazha-vechu/ET00367625"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Achan Oru Vazha Vechu
                </a>
                <a
                  href="/movies/kang-daniel-my-parade/ET00366540"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Kang Daniel: My Parade
                </a>
                <a
                  href="/movies/the-equalizer-3/ET00358212"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  The Equalizer 3
                </a>
                <a
                  href="/movies/sapta-sagaradaache-ello-side-a/ET00329345"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Sapta Sagaradaache Ello - Side A
                </a>
                <a
                  href="/movies/loveall/ET00364852"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Love-All
                </a>
                <a
                  href="/movies/goldfish/ET00365486"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Goldfish
                </a>
                <a
                  href="/movies/karumegangal-kalaigindrana/ET00367624"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Karumegangal Kalaigindrana
                </a>
                <a
                  href="/movies/baap-manus/ET00365999"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Baap Manus
                </a>
                <a
                  href="/movies/lucky-man/ET00367623"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Lucky Man
                </a>
                <a
                  href="/movies/baaplyok/ET00366114"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Baaplyok
                </a>
                <a
                  href="/movies/king-of-kotha-hindi/ET00362828"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  King of Kotha (Hindi)
                </a>
                <a
                  href="/movies/twelve-hours/ET00367258"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Twelve Hours
                </a>
                <a
                  href="/movies/paramporul/ET00367848"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Paramporul
                </a>
                <a
                  href="/movies/cheta-singh/ET00365495"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Cheta Singh
                </a>
                <a
                  href="/movies/kushi/ET00328665"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Kushi
                </a>
                <a
                  href="/movies/teenage-mutant-ninja-turtles-mutant-mayhem/ET00355359"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Teenage Mutant Ninja Turtles: Mutant Mayhem
                </a>
                <a
                  href="/movies/kirtan/ET00367505"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Kirtan
                </a>
                <a
                  href="/movies/territory/ET00366904"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Territory
                </a>
                <a
                  href="/movies/rangoli/ET00367748"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Rangoli
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">
                Movie Updates and Celebrities
              </div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Upcoming Movies
                </a>
                <a
                  href="/explore/movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies Now Showing
                </a>
                <a href="/person" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Movie Celebrities
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">Movies Per Week</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/movies-today-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies Playing Today
                </a>
                <a
                  href="/explore/movies-tomorrow-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies Playing Tomorrow
                </a>
                <a
                  href="/explore/movies-this-weekend-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies Playing This Weekend
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">Movies By Genre</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/crime-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Crime Movies
                </a>
                <a
                  href="/explore/adaptation-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Adaptation Movies
                </a>
                <a
                  href="/explore/mythological-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Mythological Movies
                </a>
                <a
                  href="/explore/noir-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Noir Movies
                </a>
                <a
                  href="/explore/political-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Political Movies
                </a>
                <a
                  href="/explore/supernatural-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Supernatural Movies
                </a>
                <a
                  href="/explore/sports-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Sports Movies
                </a>
                <a
                  href="/explore/heist-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Heist Movies
                </a>
                <a
                  href="/explore/historical-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Historical Movies
                </a>
                <a
                  href="/explore/tragedy-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Tragedy Movies
                </a>
                <a
                  href="/explore/animation-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Animation Movies
                </a>
                <a
                  href="/explore/anime-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Anime Movies
                </a>
                <a
                  href="/explore/horror-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Horror Movies
                </a>
                <a
                  href="/explore/psychological-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Psychological Movies
                </a>
                <a
                  href="/explore/mystery-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Mystery Movies
                </a>
                <a
                  href="/explore/biography-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Biography Movies
                </a>
                <a
                  href="/explore/war-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  War Movies
                </a>
                <a
                  href="/explore/period-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Period Movies
                </a>
                <a
                  href="/explore/adventure-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Adventure Movies
                </a>
                <a
                  href="/explore/classic-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Classic Movies
                </a>
                <a
                  href="/explore/musical-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Musical Movies
                </a>
                <a
                  href="/explore/adult-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Adult Movies
                </a>
                <a
                  href="/explore/Screening-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Screening Movies
                </a>
                <a
                  href="/explore/fantasy-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Fantasy Movies
                </a>
                <a
                  href="/explore/thriller-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Thriller Movies
                </a>
                <a
                  href="/explore/bollywood-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Bollywood Movies
                </a>
                <a
                  href="/explore/action-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Action Movies
                </a>
                <a
                  href="/explore/drama-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Drama Movies
                </a>
                <a
                  href="/explore/sci-fi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Sci-Fi Movies
                </a>
                <a
                  href="/explore/comedy-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Comedy Movies
                </a>
                <a
                  href="/explore/devotional-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Devotional Movies
                </a>
                <a
                  href="/explore/romantic-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Romantic Movies
                </a>
                <a
                  href="/explore/suspense-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Suspense Movies
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">
                Upcoming Movies By Genre
              </div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/drama-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Drama
                </a>
                <a
                  href="/explore/thriller-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Thriller
                </a>
                <a
                  href="/explore/action-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Action
                </a>
                <a
                  href="/explore/comedy-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Comedy
                </a>
                <a
                  href="/explore/romantic-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Romantic
                </a>
                <a
                  href="/explore/crime-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Crime
                </a>
                <a
                  href="/explore/horror-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Horror
                </a>
                <a
                  href="/explore/adventure-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Adventure
                </a>
                <a
                  href="/explore/sci-fi-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Sci-Fi
                </a>
                <a
                  href="/explore/historical-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Historical
                </a>
                <a
                  href="/explore/suspense-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Suspense
                </a>
                <a
                  href="/explore/biography-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Biography
                </a>
                <a
                  href="/explore/period-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Period
                </a>
                <a
                  href="/explore/fantasy-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Fantasy
                </a>
                <a
                  href="/explore/mystery-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Mystery
                </a>
                <a
                  href="/explore/animation-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Animation
                </a>
                <a
                  href="/explore/musical-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Musical
                </a>
                <a
                  href="/explore/sports-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Sports
                </a>
                <a
                  href="/explore/political-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Political
                </a>
                <a
                  href="/explore/psychological-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Psychological
                </a>
                <a
                  href="/explore/war-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in War
                </a>
                <a
                  href="/explore/adaptation-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Adaptation
                </a>
                <a
                  href="/explore/mythological-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Mythological
                </a>
                <a
                  href="/explore/noir-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Noir
                </a>
                <a
                  href="/explore/supernatural-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Supernatural
                </a>
                <a
                  href="/explore/heist-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Heist
                </a>
                <a
                  href="/explore/tragedy-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Tragedy
                </a>
                <a
                  href="/explore/anime-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Anime
                </a>
                <a
                  href="/explore/classic-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Classic
                </a>
                <a
                  href="/explore/adult-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Adult
                </a>
                <a
                  href="/explore/Screening-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Screening
                </a>
                <a
                  href="/explore/bollywood-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Bollywood
                </a>
                <a
                  href="/explore/devotional-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Devotional
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">Movies By Language</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/chattisgarhi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Chattisgarhi
                </a>
                <a
                  href="/explore/khasi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Khasi
                </a>
                <a
                  href="/explore/english-7d-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in English 7D
                </a>
                <a
                  href="/explore/nepali-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Nepali
                </a>
                <a
                  href="/explore/french-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in French
                </a>
                <a
                  href="/explore/tulu-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Tulu
                </a>
                <a
                  href="/explore/japanese-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Japanese
                </a>
                <a
                  href="/explore/rajasthani-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Rajasthani
                </a>
                <a
                  href="/explore/gujarati-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Gujarati
                </a>
                <a
                  href="/explore/bhojpuri-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Bhojpuri
                </a>
                <a
                  href="/explore/konkani-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Konkani
                </a>
                <a
                  href="/explore/punjabi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Punjabi
                </a>
                <a
                  href="/explore/hindi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Hindi
                </a>
                <a
                  href="/explore/urdu-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Urdu
                </a>
                <a
                  href="/explore/marathi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Marathi
                </a>
                <a
                  href="/explore/tamil-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Tamil
                </a>
                <a
                  href="/explore/sindhi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Sindhi
                </a>
                <a
                  href="/explore/haryanavi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Haryanavi
                </a>
                <a
                  href="/explore/english-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in English
                </a>
                <a
                  href="/explore/bengali-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Bengali
                </a>
                <a
                  href="/explore/assamese-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Assamese
                </a>
                <a
                  href="/explore/telugu-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Telugu
                </a>
                <a
                  href="/explore/malayalam-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Malayalam
                </a>
                <a
                  href="/explore/oriya-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Odia
                </a>
                <a
                  href="/explore/kannada-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Kannada
                </a>
                <a
                  href="/explore/portuguese-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Portuguese
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">
                Upcoming Movies By Language
              </div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/hindi-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Hindi
                </a>
                <a
                  href="/explore/telugu-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Telugu
                </a>
                <a
                  href="/explore/tamil-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Tamil
                </a>
                <a
                  href="/explore/kannada-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Kannada
                </a>
                <a
                  href="/explore/malayalam-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Malayalam
                </a>
                <a
                  href="/explore/english-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in English
                </a>
                <a
                  href="/explore/marathi-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Marathi
                </a>
                <a
                  href="/explore/bengali-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Bengali
                </a>
                <a
                  href="/explore/punjabi-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Punjabi
                </a>
                <a
                  href="/explore/gujarati-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Gujarati
                </a>
                <a
                  href="/explore/bhojpuri-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Bhojpuri
                </a>
                <a
                  href="/explore/oriya-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Odia
                </a>
                <a
                  href="/explore/khasi-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Khasi
                </a>
                <a
                  href="/explore/rajasthani-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Rajasthani
                </a>
                <a
                  href="/explore/chattisgarhi-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Chattisgarhi
                </a>
                <a
                  href="/explore/english-7d-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in English 7D
                </a>
                <a
                  href="/explore/nepali-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Nepali
                </a>
                <a
                  href="/explore/french-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in French
                </a>
                <a
                  href="/explore/tulu-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Tulu
                </a>
                <a
                  href="/explore/japanese-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Japanese
                </a>
                <a
                  href="/explore/konkani-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Konkani
                </a>
                <a
                  href="/explore/urdu-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Urdu
                </a>
                <a
                  href="/explore/sindhi-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Sindhi
                </a>
                <a
                  href="/explore/haryanavi-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Haryanavi
                </a>
                <a
                  href="/explore/assamese-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Assamese
                </a>
                <a
                  href="/explore/portuguese-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Portuguese
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">Movies By Format</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/3d-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 3D
                </a>
                <a
                  href="/explore/2d-screen-x-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 2D SCREEN X
                </a>
                <a
                  href="/explore/imax-3d-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in IMAX 3D
                </a>
                <a
                  href="/explore/3d-screen-x-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 3D SCREEN X
                </a>
                <a
                  href="/explore/4dx-3d-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 4DX 3D
                </a>
                <a
                  href="/explore/mx4d-3d-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in MX4D 3D
                </a>
                <a
                  href="/explore/full-dome-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Full Dome
                </a>
                <a
                  href="/explore/2d-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 2D
                </a>
                <a
                  href="/explore/imax-2d-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in IMAX 2D
                </a>
                <a
                  href="/explore/7d-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 7D
                </a>
                <a
                  href="/explore/4dx-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 4DX
                </a>
                <a
                  href="/explore/mx4d-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in MX4D
                </a>
                <a
                  href="/explore/ice-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in ICE
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">
                Upcoming Movies By Format
              </div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/2d-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 2D
                </a>
                <a
                  href="/explore/3d-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 3D
                </a>
                <a
                  href="/explore/2d-screen-x-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 2D SCREEN X
                </a>
                <a
                  href="/explore/imax-3d-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in IMAX 3D
                </a>
                <a
                  href="/explore/3d-screen-x-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 3D SCREEN X
                </a>
                <a
                  href="/explore/4dx-3d-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 4DX 3D
                </a>
                <a
                  href="/explore/mx4d-3d-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in MX4D 3D
                </a>
                <a
                  href="/explore/full-dome-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Full Dome
                </a>
                <a
                  href="/explore/imax-2d-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in IMAX 2D
                </a>
                <a
                  href="/explore/7d-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 7D
                </a>
                <a
                  href="/explore/4dx-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in 4DX
                </a>
                <a
                  href="/explore/mx4d-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in MX4D
                </a>
                <a
                  href="/explore/ice-upcoming-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in ICE
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">3D Movies By Genre</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/3d-crime-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Crime Movies
                </a>
                <a
                  href="/explore/3d-adaptation-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Adaptation Movies
                </a>
                <a
                  href="/explore/3d-mythological-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Mythological Movies
                </a>
                <a
                  href="/explore/3d-noir-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Noir Movies
                </a>
                <a
                  href="/explore/3d-political-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Political Movies
                </a>
                <a
                  href="/explore/3d-supernatural-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Supernatural Movies
                </a>
                <a
                  href="/explore/3d-sports-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Sports Movies
                </a>
                <a
                  href="/explore/3d-heist-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Heist Movies
                </a>
                <a
                  href="/explore/3d-historical-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Historical Movies
                </a>
                <a
                  href="/explore/3d-tragedy-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Tragedy Movies
                </a>
                <a
                  href="/explore/3d-animation-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Animation Movies
                </a>
                <a
                  href="/explore/3d-anime-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Anime Movies
                </a>
                <a
                  href="/explore/3d-horror-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Horror Movies
                </a>
                <a
                  href="/explore/3d-psychological-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Psychological Movies
                </a>
                <a
                  href="/explore/3d-mystery-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Mystery Movies
                </a>
                <a
                  href="/explore/3d-biography-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Biography Movies
                </a>
                <a
                  href="/explore/3d-war-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D War Movies
                </a>
                <a
                  href="/explore/3d-period-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Period Movies
                </a>
                <a
                  href="/explore/3d-classic-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Classic Movies
                </a>
                <a
                  href="/explore/3d-adventure-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Adventure Movies
                </a>
                <a
                  href="/explore/3d-musical-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Musical Movies
                </a>
                <a
                  href="/explore/3d-adult-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Adult Movies
                </a>
                <a
                  href="/explore/3d-Screening-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Screening Movies
                </a>
                <a
                  href="/explore/3d-fantasy-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Fantasy Movies
                </a>
                <a
                  href="/explore/3d-thriller-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Thriller Movies
                </a>
                <a
                  href="/explore/3d-bollywood-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Bollywood Movies
                </a>
                <a
                  href="/explore/3d-action-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Action Movies
                </a>
                <a
                  href="/explore/3d-drama-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Drama Movies
                </a>
                <a
                  href="/explore/3d-sci-fi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Sci-Fi Movies
                </a>
                <a
                  href="/explore/3d-comedy-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Comedy Movies
                </a>
                <a
                  href="/explore/3d-devotional-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Devotional Movies
                </a>
                <a
                  href="/explore/3d-romantic-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Romantic Movies
                </a>
                <a
                  href="/explore/3d-suspense-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Suspense Movies
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">3D Movies By Language</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/3d-chattisgarhi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Chattisgarhi Movies
                </a>
                <a
                  href="/explore/3d-khasi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Khasi Movies
                </a>
                <a
                  href="/explore/3d-english-7d-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D English 7D Movies
                </a>
                <a
                  href="/explore/3d-nepali-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Nepali Movies
                </a>
                <a
                  href="/explore/3d-french-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D French Movies
                </a>
                <a
                  href="/explore/3d-tulu-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Tulu Movies
                </a>
                <a
                  href="/explore/3d-japanese-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Japanese Movies
                </a>
                <a
                  href="/explore/3d-rajasthani-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Rajasthani Movies
                </a>
                <a
                  href="/explore/3d-bhojpuri-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Bhojpuri Movies
                </a>
                <a
                  href="/explore/3d-gujarati-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Gujarati Movies
                </a>
                <a
                  href="/explore/3d-konkani-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Konkani Movies
                </a>
                <a
                  href="/explore/3d-punjabi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Punjabi Movies
                </a>
                <a
                  href="/explore/3d-hindi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Hindi Movies
                </a>
                <a
                  href="/explore/3d-urdu-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Urdu Movies
                </a>
                <a
                  href="/explore/3d-marathi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Marathi Movies
                </a>
                <a
                  href="/explore/3d-tamil-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Tamil Movies
                </a>
                <a
                  href="/explore/3d-sindhi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Sindhi Movies
                </a>
                <a
                  href="/explore/3d-haryanavi-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Haryanavi Movies
                </a>
                <a
                  href="/explore/3d-english-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D English Movies
                </a>
                <a
                  href="/explore/3d-bengali-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Bengali Movies
                </a>
                <a
                  href="/explore/3d-assamese-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Assamese Movies
                </a>
                <a
                  href="/explore/3d-telugu-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Telugu Movies
                </a>
                <a
                  href="/explore/3d-malayalam-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Malayalam Movies
                </a>
                <a
                  href="/explore/3d-oriya-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Odia Movies
                </a>
                <a
                  href="/explore/3d-kannada-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Kannada Movies
                </a>
                <a
                  href="/explore/3d-portuguese-movies-mahishadal"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  3D Portuguese Movies
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">Movies in Top Cities</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/movies-mumbai"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Mumbai
                </a>
                <a
                  href="/explore/movies-national-capital-region-ncr"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Delhi-NCR
                </a>
                <a
                  href="/explore/movies-chennai"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Chennai
                </a>
                <a
                  href="/explore/movies-bengaluru"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Bengaluru
                </a>
                <a
                  href="/explore/movies-hyderabad"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Hyderabad
                </a>
                <a href="/explore/movies-pune" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Movies in Pune
                </a>
                <a
                  href="/explore/movies-ahmedabad"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Ahmedabad
                </a>
                <a
                  href="/explore/movies-kolkata"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Kolkata
                </a>
                <a
                  href="/explore/movies-kochi"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movies in Kochi
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">Cinemas in Top Cities</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a href="/mumbai/cinemas" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Cinemas in Mumbai
                </a>
                <a
                  href="/national-capital-region-ncr/cinemas"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Cinemas in Delhi-NCR
                </a>
                <a href="/chennai/cinemas" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Cinemas in Chennai
                </a>
                <a href="/bengaluru/cinemas" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Cinemas in Bengaluru
                </a>
                <a href="/hyderabad/cinemas" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Cinemas in Hyderabad
                </a>
                <a href="/pune/cinemas" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Cinemas in Pune
                </a>
                <a href="/ahmedabad/cinemas" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Cinemas in Ahmedabad
                </a>
                <a href="/kolkata/cinemas" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Cinemas in Kolkata
                </a>
                <a href="/kochi/cinemas" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Cinemas in Kochi
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">COUNTRIES</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="https://id.bookmyshow.com/"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Indonesia
                </a>
                <a
                  href="https://sg.bookmyshow.com/"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Singapore
                </a>
                <a
                  href="https://ae.bookmyshow.com/"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  UAE
                </a>
                <a
                  href="https://lk.bookmyshow.com/"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Sri Lanka
                </a>
                <a
                  href="https://wi.bookmyshow.com/"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  West Indies
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">HELP</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a href="/aboutus" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  About Us
                </a>
                <a href="/contactus" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Contact Us
                </a>
                <a href="/careers/" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Current Opening
                </a>
                <a href="/press-release" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Press Release
                </a>
                <a href="/press-coverage" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Press Coverage
                </a>
                <a href="/static/sitemap" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Sitemap
                </a>
                <a href="/faq" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  FAQs
                </a>
                <a
                  href="/terms-and-conditions"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Terms and Conditions
                </a>
                <a href="/privacy" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">BOOKMYSHOW EXCLUSIVES</div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="https://lollaindia.com/"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Lollapalooza India
                </a>
                <a href="/superstar" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Superstar
                </a>
                <a href="/donation" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  BookASmile
                </a>
                <a href="/voucher" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Corporate Vouchers
                </a>
                <a href="/giftcards" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Gift Cards
                </a>
                <a href="/s/list-your-show/" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  List My Show
                </a>
                <a href="/offers" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Offers
                </a>
                <a href="/explore/c/stream" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Stream
                </a>
                <a href="/buzz" class="bwc__sc-1jgpgcm-4 jgzpRM">
                  Buzz
                </a>
                <a
                  href="/explore/movie-trailers"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Movie Trailers
                </a>
                <a
                  href="/explore/c/summer-activities"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Summer Activities
                </a>
              </div>
            </div>
            <div class="bwc__sc-1jgpgcm-1 eFQjTJ">
              <div class="bwc__sc-1jgpgcm-2 MlBJi">
                ICC Cricket World Cup 2023
              </div>
              <div class="bwc__sc-1jgpgcm-3 dVivmv">
                <a
                  href="/explore/c/icc-cricket-world-cup"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  ICC Men's Cricket World Cup
                </a>
                <a
                  href="/sports/india-icc-mens-cwc-2023/ET00367219"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  India Cricket Matches
                </a>
                <a
                  href="/sports/afghanistan-icc-mens-cwc-2023/ET00367215"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Afghanistan Cricket Matches
                </a>
                <a
                  href="/sports/australia-icc-mens-cwc-2023/ET00367216"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Australia Cricket Matches
                </a>
                <a
                  href="/sports/bangladesh-icc-mens-cwc-2023/ET00367217"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Bangladesh Cricket Matches{" "}
                </a>
                <a
                  href="/sports/england-icc-mens-cwc-2023/ET00367218"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  England Cricket Matches
                </a>
                <a
                  href="/sports/netherlands-icc-mens-cwc-2023/ET00367220"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Netherlands Cricket Matches
                </a>
                <a
                  href="/sports/new-zealand-icc-mens-cwc-2023/ET00367221"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  New Zealand Cricket Matches
                </a>
                <a
                  href="/sports/pakistan-icc-mens-cwc-2023/ET00367222"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Pakistan Cricket Matches
                </a>
                <a
                  href="/sports/south-africa-icc-mens-cwc-2023/ET00367223"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  South Africa Cricket Matches
                </a>
                <a
                  href="/sports/sri-lanka-icc-mens-cwc-2023/ET00367224"
                  class="bwc__sc-1jgpgcm-4 jgzpRM"
                >
                  Sri Lanka Cricket Matches
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_icons">
        <div className="horizontal_line_content">
          <div className="horizontal_line"></div>
          <div className="footer_logo">
            <svg
              viewBox="0 0 88 26"
              height="33.9"
              width="115"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>BookMyShow</title>
              <g fill="none">
                <path
                  d="M55.433 7.383l-1.444-2.43-2.583 1.213-1.444-2.43L47.38 4.95l-1.445-2.43-2.582 1.215-1.445-2.43-2.582 1.212L37.88.087 35.3 1.3l-5.476 17.591 6.643 2.005a3.516 3.516 0 0 1 3.363-2.45c1.944 0 3.52 1.557 3.52 3.478l-.001.07c.016.315-.021.634-.118.946l6.756 2.042 5.446-17.6"
                  fill="#C4242B"
                ></path>
                <path
                  d="M35.52 17.438a.705.705 0 0 1-.591-.705V8.122a.715.715 0 0 1 .724-.717h6.297c.164 0 .329.016.489.043a2.798 2.798 0 0 1 2.336 2.749v6.536a.705.705 0 0 1-.217.51.73.73 0 0 1-.641.195.704.704 0 0 1-.59-.705v-6.536a1.363 1.363 0 0 0-1.377-1.358h-1.372v7.894a.723.723 0 0 1-.86.705.705.705 0 0 1-.59-.705V8.838h-2.75v7.895a.704.704 0 0 1-.216.51.728.728 0 0 1-.642.195M45.99 21.19a.704.704 0 0 1-.592-.706c0-.195.074-.377.209-.51a.73.73 0 0 1 .516-.206c.61 0 1.14-.39 1.315-.97l.748-2.462-2.448-8.083a.722.722 0 0 1 .483-.904.742.742 0 0 1 .896.473l1.82 6.03 1.839-6.026c.091-.34.46-.556.839-.49l.051.011c.392.121.608.528.489.907l-2.52 8.295-.796 2.655c-.206.61-.56 1.106-1.022 1.44-.5.365-1.086.557-1.694.557a.708.708 0 0 1-.133-.012M1.614 15.87h1.428c.788 0 1.43-.633 1.43-1.413v-4.141c0-.687-.498-1.272-1.183-1.391a1.501 1.501 0 0 0-.247-.022l-1.43.001.002 6.965zM.72 17.347a.732.732 0 0 1-.616-.734V3.758c0-.203.077-.391.218-.53a.751.751 0 0 1 .666-.203c.362.062.624.37.624.734v3.656h1.43a2.91 2.91 0 0 1 2.938 2.901l-.001 4.141c0 1.601-1.318 2.902-2.938 2.902H.86a.676.676 0 0 1-.14-.011zM11.096 8.839a1.478 1.478 0 0 0-.246-.02c-.801 0-1.43.62-1.43 1.412v4.313a1.413 1.413 0 0 0 1.43 1.412c.788 0 1.429-.632 1.43-1.412l-.001-4.313c0-.688-.498-1.272-1.183-1.392m-.763 8.564a2.905 2.905 0 0 1-2.42-2.86V10.23c0-.778.304-1.507.858-2.054a2.94 2.94 0 0 1 2.079-.847 2.91 2.91 0 0 1 2.938 2.902l-.001 4.313c0 .775-.308 1.504-.867 2.055a2.94 2.94 0 0 1-2.07.847 2.948 2.948 0 0 1-.517-.043M18.902 8.839a1.47 1.47 0 0 0-.245-.02c-.802 0-1.428.62-1.428 1.412v4.313a1.412 1.412 0 0 0 1.428 1.412c.378 0 .733-.146 1.005-.41.273-.268.424-.624.424-1.002V10.23c0-.687-.498-1.27-1.184-1.391m-.762 8.564a2.907 2.907 0 0 1-2.42-2.859v-4.313c0-1.601 1.317-2.903 2.937-2.903.17 0 .34.014.506.043a2.91 2.91 0 0 1 2.431 2.86v4.313c0 .777-.308 1.504-.867 2.055a2.94 2.94 0 0 1-2.07.847c-.174 0-.348-.014-.517-.043M24.142 17.434a.733.733 0 0 1-.614-.733V3.758a.735.735 0 0 1 .753-.745.746.746 0 0 1 .754.745v7.66l3.474-3.843a.766.766 0 0 1 .697-.228c.139.024.27.085.379.175.309.28.33.75.052 1.048l-2.615 2.88 2.717 4.902a.705.705 0 0 1 .066.553.732.732 0 0 1-.37.443.755.755 0 0 1-.5.082.749.749 0 0 1-.526-.356l-2.444-4.433-.93 1.013v3.047c0 .202-.08.39-.225.532a.758.758 0 0 1-.668.201M57.41 17.426a2.782 2.782 0 0 1-1.96-1.355.75.75 0 0 1-.068-.569.739.739 0 0 1 .346-.45c.15-.084.33-.114.505-.084a.75.75 0 0 1 .525.358c.199.335.509.546.895.614.42.066.803-.048 1.116-.316.29-.267.442-.648.404-1.016a1.22 1.22 0 0 0-.548-.964l-2.031-1.425a2.708 2.708 0 0 1-1.155-2.013 2.642 2.642 0 0 1 .884-2.152 2.754 2.754 0 0 1 2.24-.694h.001c.856.15 1.555.63 1.95 1.323a.746.746 0 0 1 .07.563.747.747 0 0 1-.348.454.757.757 0 0 1-.504.083.747.747 0 0 1-.526-.357c-.172-.3-.482-.51-.856-.575a1.189 1.189 0 0 0-1.021.296c-.26.238-.403.596-.382.96.019.351.22.694.523.894l2.032 1.404a2.729 2.729 0 0 1 1.177 2.101 2.651 2.651 0 0 1-.906 2.214 2.84 2.84 0 0 1-2.307.714l-.055-.008M63.246 17.447a.75.75 0 0 1-.625-.735V3.77c0-.202.08-.39.226-.533a.762.762 0 0 1 .667-.2.733.733 0 0 1 .615.733v3.655h1.43c.174 0 .348.015.516.045a2.902 2.902 0 0 1 2.42 2.857l.001 6.385a.741.741 0 0 1-.883.734.747.747 0 0 1-.625-.735v-6.384a1.41 1.41 0 0 0-1.43-1.412h-1.429v7.797a.742.742 0 0 1-.754.746.781.781 0 0 1-.13-.01M73.609 8.85a1.429 1.429 0 0 0-1.26.39c-.268.265-.416.62-.416 1v4.316c0 .686.494 1.27 1.173 1.388a1.43 1.43 0 0 0 1.261-.388c.274-.268.424-.622.424-1.001V10.24c0-.687-.497-1.272-1.182-1.391m-.763 8.563a2.903 2.903 0 0 1-2.42-2.857V10.24c-.001-1.6 1.317-2.902 2.937-2.902.169 0 .34.013.506.043a2.91 2.91 0 0 1 2.43 2.859v4.315a2.856 2.856 0 0 1-.867 2.054 2.938 2.938 0 0 1-2.586.803M87.892 8.254a.712.712 0 0 0-.077-.545.781.781 0 0 0-.49-.342.747.747 0 0 0-.864.546 920.42 920.42 0 0 1-1.452 5.726l-.014.056-.013-.056c-.62-2.458-1.447-5.69-1.456-5.724a.706.706 0 0 0-.58-.55.75.75 0 0 0-.85.548c-.01.03-.819 3.268-1.454 5.726l-.014.056-.014-.056c-.618-2.458-1.447-5.695-1.455-5.726a.74.74 0 0 0-.889-.536.73.73 0 0 0-.542.877l2.185 8.632a.754.754 0 0 0 .714.556.708.708 0 0 0 .715-.557c.008-.033.837-3.27 1.456-5.73l.013-.054.016.054c.64 2.483 1.451 5.73 1.452 5.732a.754.754 0 0 0 .715.556.71.71 0 0 0 .714-.559l2.184-8.63"
                  fill="#FFF"
                ></path>
              </g>
            </svg>
          </div>
          <div className="horizontal_line"></div>
        </div>
        <div>
          <div className="icons">
            <BsFacebook className="icon"></BsFacebook>
            <BsTwitter className="icon"></BsTwitter>
            <BsInstagram className="icon"></BsInstagram>
            <BsYoutube className="icon"></BsYoutube>
            <BsPinterest className="icon"></BsPinterest>
            <BsLinkedin className="icon"></BsLinkedin>
          </div>
          <div className="copyright_content">
            Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights
            Reserved. <br /> The content and images used on this site are
            copyright protected and copyrights vests with the respective owners.
            The usage of the content and images on this website is intended to
            promote the works and no endorsement of the artist shall be implied.
            Unauthorized use is prohibited and punishable by law.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
