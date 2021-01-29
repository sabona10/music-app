import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import ReactPlayer, {playing} from 'react-player/youtube'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import * as playlistApi from '../../utilities/playlists-api';
import * as browseApi from '../../utilities/browse-api';
import ChartsPage from '../ChartsPage/ChartsPage';
import GenresPage from '../GenresPage/GenresPage';
import DiscoverPage from '../DiscoverPage/DiscoverPage';
import PlaylistsPage from '../PlaylistsPage/PlaylistsPage';
import PlaylistPage from '../PlaylistPage/PlaylistPage';
import NavBar from '../../components/NavBar/NavBar';
// import PlayerBar from '../../components/PlayerBar/PlayerBar';
import PlayerBar from '../../components/PlayerBar/PlayerBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [thisPlaylist, setThisPlaylist] = useState([]);


  //player 
  const [url, setUrl] = useState(null);
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [player, setPlayer] = useState(null);
  // const [onProgress, setOnProgress] = useState();
  // const [onePlaylists, setOnePlaylists] = useState([]);
  useEffect(() => {
    async function getAllPlaylists() {
      const playlists = await playlistApi.getAll(getUser());
      setAllPlaylists(playlists);
      console.log(playlists);
    }
    getAllPlaylists();
  }, [])
  // console.log(user);
  async function handleGetAllPlaylist() {
    const playlists = await playlistApi.getAll(user);
    setAllPlaylists(playlists);
    console.log(playlists);
  }
  async function handleGetOnePlaylist(playlistId) {
    const playlists = await playlistApi.getOne(playlistId);
    // setAllPlaylists(playlists);
    console.log(playlists);
  }
  async function handleDeletePlaylist(playlistId) {
    await playlistApi.deletePlaylist(playlistId);
    const playlists = await playlistApi.getAll(getUser());
    setAllPlaylists(playlists);
    // setAllPlaylists(playlists);
    // console.log(playlists);
  }
async function handleAddToPlaylist(playlistId, newSong) {
  console.log(newSong)
    for (var i = 0; i < allPlaylists.length; i++) {
      if (allPlaylists[i]._id === playlistId) {
        
        let newPlaylist = allPlaylists[i];
        newPlaylist.songs = [...newPlaylist.songs, newSong];
        const playlists = await playlistApi.addOneToPlaylist(newPlaylist);
        if(thisPlaylist && thisPlaylist._id === playlistId) setThisPlaylist(playlists);
        allPlaylists[i] = playlists;
        setAllPlaylists(allPlaylists);
        break;
      }

    }
  }  
async function handleRemoveFromPlaylist(playlistId, songPosition) {
    for (var i = 0; i < allPlaylists.length; i++) {
      if (allPlaylists[i]._id === playlistId) {
        
        let newPlaylist = allPlaylists[i];
        newPlaylist.songs.splice(songPosition,1);
        const playlists = await playlistApi.addOneToPlaylist(newPlaylist);
        if(thisPlaylist && thisPlaylist._id === playlistId) setThisPlaylist(playlists);
        allPlaylists[i] = playlists;
        setAllPlaylists(allPlaylists);
        break;
      }

    }
  }  

  const load = (url) => {
    setUrl(url);
    setPlayed(0);
    player.current.seekTo(0)
    setLoaded(0);
    // setPlaying(!playing)
    // this.setState({ playing: !playing })
  }

  // const handleDuration = (duration) => {
    
  //   console.log('onDuration', duration)
  //   setDuration(duration)
  // }
  
  async function handleCreatePlaylist(newPlaylist) {

    // setAllPlaylists(allPlaylists.)
    const playlists = await playlistApi.create(newPlaylist);
    setAllPlaylists([...allPlaylists, playlists]);
    console.log(playlists);
  }
  return (
    <main className="App">
      { user ?
        <>
          {/* <div onClick={handleGetAllPlaylist}>click me</div> */}
          {/* <button onClick={pausevid}>pause vid</button>
          <button onClick={playvid}>play vid</button> */}
          <NavBar user={user} setUser={setUser} allPlaylist={allPlaylists} handleCreatePlaylist={handleCreatePlaylist} handleGetOnePlaylist={handleGetOnePlaylist} />
          {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing={playing} onDuration={handleDuration}/> */}
          <Switch>
            <Route path="/charts">
              <ChartsPage />
            </Route>
            <Route path="/discover">
              <DiscoverPage />
            </Route>
            <Route path="/genres">
              <GenresPage />
            </Route>
            <Route path="/playlists">
              <PlaylistsPage allPlaylist={allPlaylists} handleDeletePlaylist={handleDeletePlaylist}/>
            </Route>
            <Route path="/playlist">
              <PlaylistPage load={load} thisPlaylist={thisPlaylist} setThisPlaylist={setThisPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} handleAddToPlaylist={handleAddToPlaylist} allPlaylist={allPlaylists} />
            </Route>
            <Redirect to="/discover" />
          </Switch>
          <PlayerBar load = {load}url={url} setUrl={setUrl} played={played} setPlayed={setPlayed} player={player} setPlayer={setPlayer} loaded={loaded} setLoaded={setLoaded} />

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
