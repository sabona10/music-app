// import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from "react-contextmenu";
import { useLocation, Redirect } from 'react-router-dom';
import Duration from '../../components/PlayerBar/Duration'
import './PlaylistPage.css';
// import React from "react";
// import ReactDOM from "react-dom";



export default function PlaylistPage({load,  handleAddToPlaylist, allPlaylist }) {


  function isPlainObject(o) {
    return (o === null || Array.isArray(o) || typeof o == 'function') ?
      false
      : (typeof o == 'object');
  }
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
  const { state } = useLocation();


  // console.log(thisPlaylist.length)
  if (state === undefined) {
    return <Redirect to="/discover" />
  } else {
    let playlist ;
    // if (thisPlaylist._id !== state.playlist._id) setThisPlaylist(state.playlist);
    // playlist = thisPlaylist;
    // if (!isPlainObject(thisPlaylist)) {
    // }
    playlist = state.playlist;
    // console.log(playlist);
    return (
      <section>
        <h1>hello there</h1>
         <div>
          <div className="main">
            {/* <h1>One Playlist called {playlist.list_Name}</h1> */}
            <div>



            </div>
            {
              playlist.content.length ?
                <ul className="cards">
                  <div className="container">
                    <ul className="responsive-table">
                      <li className="table-header">
                        <div className="col col-1">Song Id</div>
                        <div className="col col-2">Song Name</div>
                        <div className="col col-3">Artist</div>
                        <div className="col col-4">Duration</div>
                      </li>
                      {playlist.content.map((song, idx) => {
                        // console.log(song);
                        return (
                          <>
                            <ContextMenuTrigger id={idx} >
                              <li className="table-row" key={idx} onClick={() => load('https://www.youtube.com/watch?v=' + song.videoId)}>
                                <div className="col col-1" data-label="Job Id">{song.videoId}</div>
                                <div className="col col-2" data-label="Customer Name">{song.name}</div>
                                <div className="col col-3" data-label="Amount">{song.artist ? (song.artist.name ? song.artist.name :song.artist.map(e => e.name).join(",")):song.author}</div>
                                <div className="col col-4" data-label="Payment Status">{<Duration seconds={song.duration/1000}/>} </div>
                              </li>
                            </ContextMenuTrigger>

                            <ContextMenu id={idx} >
                              <MenuItem data={{ foo: 'bar' }} onClick={() => load('https://www.youtube.com/watch?v=' + song.videoId)}>
                                Play
                              </MenuItem>
                              <MenuItem divider />
                              <SubMenu title='Add to Playlist'>
                                {allPlaylist.map(playlist =>
                                  <MenuItem key={playlist._id} onClick={() => handleAddToPlaylist(playlist._id, {
                                    song_id: song.videoId,
                                    song_name: song.name,
                                    duration: song.duration,
                                    artist: song.artist ? (song.artist.name ? song.artist.name :song.artist.map(e => e.name).join(",")):song.author
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
  }
}