// import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from "react-contextmenu";
import { useLocation, Redirect } from 'react-router-dom';
import {useEffect,useState} from 'react';
import Duration from '../../components/PlayerBar/Duration'
import * as playlistApi from '../../utilities/playlists-api';
import './PlaylistPage.css';
// import React from "react";
// import ReactDOM from "react-dom";



export default function PlaylistPage({ load, handleAddToPlaylist, allPlaylist }) {
  const [chartPlaylist, setChartPlaylist] = useState({
    list_Name: 'admin',
    songs: [{
      song_id: '',
      song_name: '',
      duration: 0,
      artist: '',
      thumbnail: ''
    }],
    author_name: 'admin',
    author_id: 'admin',
    // user:[userSchema]
  });

  useEffect(() => {
    async function getChartPlaylists() {
      // console.log(user);
      const chartplaylists = await playlistApi.getOne('6015f53f4146db4c0859c538');
      setChartPlaylist(chartplaylists);
      // console.log(chartplaylists);
      // console.log('done this');

    }
    getChartPlaylists();
  },[])

// console.log(chartPlaylist);
  // let playlist = [];
  // if(!chartPlaylist.length){
  //   async function getChartPlaylists() {
  //     // console.log(user);
  //     const chartplaylists = await playlistApi.getOne('6015f53f4146db4c0859c538');
  //     setChartPlaylist(chartplaylists);
  //     console.log("here");
  //     return chartplaylists
  //     // console.log(chartplaylists);

  //   }
  //   playlist = getChartPlaylists();
  // }else{
  //   console.log(chartPlaylist);
  
  // const [test, setTest] = useState('?')

  // useEffect(()=>{
  //   setTimeout(function () { setTest("Hello"); }, 3000);
  //   console.log('eek');
  // })
  // }
  // console.log(chartPlaylist);
  const playlist = chartPlaylist;
  // console.log(playlist);
  return (
    <section>
      <div>
        <div className="main">
          <div>



          </div>
          {
            playlist.songs.length ?
              <ul className="cards">
                <div className="container">
                  <ul className="responsive-table">
                    <li className="table-header">
                      <div className="col col-1">Title</div>
                      <div className="col col-2">Artist</div>
                      <div className="col col-3">Number</div>
                      <div className="col col-4">Duration</div>
                    </li>
                    {playlist.songs.map((song, idx) => {
                      return (
                        <>
                          <ContextMenuTrigger id={idx} >
                            <li className="table-row" key={idx} onClick={() => load({
                              title: song.song_name,
                              artist: song.artist,
                              url: 'https://www.youtube.com/watch?v=' + song.song_id
                            })}>
                              <div className="col col-1" data-label="Job Id">{song.song_name}</div>
                              <div className="col col-2" >{song.artist}</div>
                              <div className="col col-3" >{ idx +1}</div>
                      <div className="col col-4" data-label="Payment Status">{<Duration seconds={song.duration / 1000} />} </div>
                            </li>
                          </ContextMenuTrigger>

                          <ContextMenu id={idx} >
                            <MenuItem data={{ foo: 'bar' }} onClick={() => load({
                              title: song.song_name,
                              artist: song.artist,
                              url: 'https://www.youtube.com/watch?v=' + song.song_id
                            })}>
                              Play
                              </MenuItem>
                            <MenuItem divider />
                            <SubMenu title='Add to Playlist'>
                              {allPlaylist.map(playlist =>
                                <MenuItem key={playlist._id} onClick={() => handleAddToPlaylist(playlist._id, {
                                  song_id: song.song_id,
                                  song_name: song.name,
                                  created_at:Date.now(),
                                  thumbnail:song.thumbnail,
                                  duration: song.duration,
                                  artist: song.artist 
                                })} data={{ foo: 'bar' }} >{playlist.list_Name}</MenuItem>
                              )}
                            </SubMenu>
                          </ContextMenu>

                        </>
                      )

                    })}
                  </ul>
                </div>
              </ul>

              :
              <h3> This playlist is Empty</h3>}
        </div>

      </div>

    </section>
  
  
  );
  // function isPlainObject(o) {
  //   return (o === null || Array.isArray(o) || typeof o == 'function') ?
  //     false
  //     : (typeof o == 'object');
  // }
  // function handleClick(e, data) {
  //   console.log(data.foo);
  // }
  // let contextTrigger = null;

  // const toggleMenu = e => {
  //   console.log(e);
  //   console.log(Object.keys(contextTrigger.handleContextMenu))
  //   // console.log(e.which)
  //   if (contextTrigger) {
  //     contextTrigger.handleContextClick(e);
  //     console.log(contextTrigger)
  //     // contextTrigger.
  //   }
  // };
  // const hideMenu = e => {
  //   console.log(e);
  //   // console.log(Object.keys(contextTrigger))
  //   // if (contextTrigger) {
  //   //   contextTrigger.handleContextClick(e);
  //   //   // contextTrigger.
  //   // }
  // };

  // async function handleCheckToken() {
  //   const expDate = await usersService.checkToken();
  //   console.log(expDate);
  // if (props.state === undefined){
  //   console.log("hello");
  //   console.log(props.state);
  //   <Redirect to="/discover" />
  //   // }, [])
  // }

  // let playlist = {};
  // const { state } = useLocation();


  // console.log(thisPlaylist.length)
  // if (state === undefined) {
  //   return <Redirect to="/discover" />
  // } else {
  //   let playlist;
  //   // if (thisPlaylist._id !== state.playlist._id) setThisPlaylist(state.playlist);
  //   // playlist = thisPlaylist;
  //   // if (!isPlainObject(thisPlaylist)) {
  //   // }
  //   playlist = state.playlist;
  //   // console.log(playlist);
    
  // }
}