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
                        <div className="col col-3"> </div>
                        <div className="col col-1">Title</div>
                        <div className="col col-2">Artist</div>
                        <div className="col col-4">Duration</div>
                      </li>
                      {playlist.content.map((song, idx) => {
                        // console.log();
                        return (
                          <>
                            <ContextMenuTrigger id={song.videoId} >
                              <li className="table-row" key={idx} onClick={() => load({
                                title: song.name,
                                artist: song.artist ? (song.artist.name ? song.artist.name : song.artist.map(e => e.name).join(",")) : song.artist,
                                url: 'https://www.youtube.com/watch?v=' + song.videoId
                              })}>
                                <div className="col col-3"><div className='simage'>
                                  <img style={{ 'objectFit': 'cover', height: '135%' }} src={'https://i.ytimg.com/vi/' + song.videoId + '/2.jpg'} alt="" />
                                  {/* <span className='sbimage'><img src={'https://i.ytimg.com/vi/' + song.song_id + '/2.jpg'} alt="" /></span> */}

                                </div></div>
                                <div className="col col-1">{song.name}</div>
                                <div className="col col-2">{song.artist ? (song.artist.name ? song.artist.name :song.artist.map(e => e.name).join(",")):song.artist}</div>
                                <div className="col col-4">{<Duration seconds={song.duration/1000}/>} </div>
                              </li>
                            </ContextMenuTrigger>

                            <ContextMenu id={song.videoId} >
                              <MenuItem data={{ foo: 'bar' }} onClick={() => load({
                                title: song.name,
                                artist: song.artist ? (song.artist.name ? song.artist.name : song.artist.map(e => e.name).join(",")) : song.artist,
                                url: 'https://www.youtube.com/watch?v=' + song.videoId
                              })}>
                                Play
                              </MenuItem>
                              <MenuItem divider />
                              <SubMenu title='Add to Playlist'>
                                {allPlaylist.map(playlist =>
                                  <MenuItem key={playlist._id} onClick={() => handleAddToPlaylist(playlist._id, {
                                    song_id: song.videoId,
                                    song_name: song.name,
                                    duration: song.duration,
                                    created_at:Date.now(),
                                    thumbnail: Array.isArray(song.thumbnails)?(song.thumbnails.length > 1 ? song.thumbnails[1].url : song.thumbnails[0].url):song.thumbnails.url ,
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