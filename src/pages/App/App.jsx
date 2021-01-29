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

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [thisPlaylist, setThisPlaylist] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [onProgress, setOnProgress] = useState();
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
  function pausevid() {
    setPlaying(true);
  }
  
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
          <button onClick={pausevid}>pause vid</button>
          <NavBar user={user} setUser={setUser} allPlaylist={allPlaylists} handleCreatePlaylist={handleCreatePlaylist} handleGetOnePlaylist={handleGetOnePlaylist} />
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing={playing} onProgress={onProgress}/>
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
              <PlaylistPage thisPlaylist={thisPlaylist} setThisPlaylist={setThisPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} handleAddToPlaylist={handleAddToPlaylist} allPlaylist={allPlaylists} />
            </Route>
            <Redirect to="/discover" />
          </Switch>

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
