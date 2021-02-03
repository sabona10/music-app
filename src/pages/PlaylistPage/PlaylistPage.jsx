// import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from "react-contextmenu";
import { useLocation, Redirect } from 'react-router-dom';
import './PlaylistPage.css';
import Duration from '../../components/PlayerBar/Duration'
import Banner from '../../components/Banner/Banner'
import { useEffect, useState } from "react";
// import React from "react";
// import ReactDOM from "react-dom";



export default function PlaylistPage({load, thisPlaylist, setThisPlaylist, handleRemoveFromPlaylist, handleAddToPlaylist, allPlaylist }) {


  function isPlainObject(o) {
    return (o === null || Array.isArray(o) || typeof o == 'function' || o.constructor === Date) ?
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
  const [playlistCover, setPlaylistCover] = useState(false)
  useEffect(() => {
    setPlaylistCover(false);

  }, [state])
  const epochs = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
  ];

  const getDuration = (timeAgoInSeconds) => {
    for (let [name, seconds] of epochs) {
      const interval = Math.floor(timeAgoInSeconds / seconds);
      if (interval >= 1) {
        return {
          interval: interval,
          epoch: name
        };
      }
    }
  };
  function randomString(length) {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  const timeAgo = (date) => {
    const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
    const { interval, epoch } = getDuration(timeAgoInSeconds+2);
    const suffix = interval === 1 ? '' : 's';
    return `${interval} ${epoch}${suffix} ago`;
  };
  // console.log(thisPlaylist.length)
  if (state === undefined) {
    return <Redirect to="/discover" />
  } else {
    
    let playlist = [];
    if (thisPlaylist._id !== state.playlist._id) setThisPlaylist(state.playlist);
    playlist = thisPlaylist;
    if (!isPlainObject(thisPlaylist)) {
      playlist = state.playlist;
    }
    // console.log(playlist)
    return (
      <section className="playllist" >

        <div>
          <div className="main">


            {/* <h1>One Playlist called dd{playlist.list_Name}</h1> */}
            
            {
              !!playlist && playlist.songs != null ?
              <>
              {}
                  <Banner name={playlist.list_Name} author={playlist.author_name} playlist ={playlist} image={playlistCover ? playlistCover : 'https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA'} />
              <div className="blacklist"> 
                <ul className="cards">
                  <div className="container">
                    <ul className="responsive-table">
                      <li className="table-header thh">
                        <div className="col col-1">Title</div>
                        <div className="col col-2">Artist</div>
                        <div className="col col-3">Added</div>
                        <div className="col col-4">Duration</div>
                      </li>
                          {playlist.songs != null ? playlist.songs.map((song, idx) => {
                            const randid = randomString(10);
                            if (!playlistCover && song.thumbnail != null&&song.thumbnail.length) setPlaylistCover(song.thumbnail)
                        return (
                          <>
                            <ContextMenuTrigger id={randid} >
                              {/* ref={c => contextTrigger = c} */}
                              <li className="table-row" key={song.song_id} onClick={() => load({
                                title: song.song_name,
                                artist: song.artist,
                                url: 'https://www.youtube.com/watch?v=' + song.song_id
                              })}>
                                {/* <li className="table-row" key={song.song_id} onClick={hideMenu}> */}
                                <div className="col col-1">{song.song_name}</div>
                                <div className="col col-2">{song.artist}</div>
                                {/* <div className="col col-3">{song.created_at}</div> */}
                                <div className="col col-3">{song.created_at.length ? timeAgo(parseInt(song.created_at)): ''}</div>
                                <div className="col col-4">{<Duration seconds={song.duration / 1000} />} </div>
                                {/* <button onClick={() => handleRemoveFromPlaylist(playlist._id, idx)}>remove</button> */}
                              </li>
                              {/* <button onClick={toggleMenu}>☰</button> */}
                              {/* <div className="well">Right click to see the menu</div> */}
                            </ContextMenuTrigger>

                            <ContextMenu id={randid} >
                              <MenuItem onClick={() => load({
                                title: song.song_name,
                                artist: song.artist,
                                url: 'https://www.youtube.com/watch?v=' + song.song_id
                              })}>
                                Play
                              </MenuItem>
                              {playlist.author_id !=="admin"&&
                              <MenuItem onClick={() => handleRemoveFromPlaylist(playlist._id, idx)}>
                                remove from playlist
                              </MenuItem>}
                              <MenuItem divider />
                              <SubMenu title='Add to Playlist'>
                                {allPlaylist.map(playlist =>
                                  <MenuItem key={playlist._id} onClick={() => handleAddToPlaylist(playlist._id, {
                                    song_id: song.song_id,
                                    song_name: song.song_name,
                                    duration: song.duration,
                                    created_at: Date.now(),
                                    thumbnail: song.thumbnail ? song.thumbail : 'https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA',
                                    artist: song.artist
                                  })} >{playlist.list_Name}</MenuItem>
                                  // <MenuItem onClick={handleClick} data={{ foo: 'subitem 2' }}>playlist 2</MenuItem>
                                )}
                              </SubMenu>
                              {/* <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
                                ContextMenu Item 3
                              </MenuItem> */}
                            </ContextMenu>

                          </>
                        )

                      }) 
                            :
                            <h3> This playlist is Emptsy</h3>}
                    
                    
                      </ul>
                    {/* <button onClick={() => handleAddToPlaylist(playlist._id, {
                      song_id: 'QTw5B7YhaIQ',
                      song_name: 'Be Prepared',
                      duration: 2000,
                      artist: 'jay'
                    })}>Add something this to playlist 'abc'</button> */}
                  </div>
                  {/* {allPlaylist.map(playlist =>
              <li className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <img src="https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA"  alt='' />
                    </div>
                    <div className="card_content">
                    <h2 className="card_title">{playlist.list_Name}</h2>
                      <p className="card_text">{playlist.songs.length} songs</p>
                    </div>
                  </div>
              </li>
            )} */}
                </ul>
               
             </div>
             
              </>
                :
                <h3> This playlist is Emptsy</h3>}
          </div>

        </div>


        {/* <h1>DiscoverPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      <div style={{ width: 75 + '%', float: 'right' }}>
        <SimpleSlider>
        </SimpleSlider>

      </div> */}
      </section>
    );
  }
}