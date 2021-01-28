import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
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
  async function handleAddToPlaylist(playlistId, newSong) {
    for (var i = 0; i < allPlaylists.length; i++) {
      if (allPlaylists[i]._id === playlistId) {
        
        let newPlaylist = allPlaylists[i];
        newPlaylist.songs = [...newPlaylist.songs, newSong];
        const playlists = await playlistApi.addOneToPlaylist(newPlaylist);

        allPlaylists[i] = playlists;
        setAllPlaylists(allPlaylists);
        break;
      }

      // console.log((i + 1) + " --> " + allPlaylists[i])
    }
    // console.log("added to " +playlistId)
    // setAllPlaylists(allPlaylists.)
    // console.log(playlists);
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
          <NavBar user={user} setUser={setUser} allPlaylist={allPlaylists} handleCreatePlaylist={handleCreatePlaylist} handleGetOnePlaylist={handleGetOnePlaylist} />
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
              <PlaylistsPage allPlaylist={allPlaylists} />
            </Route>
            <Route path="/playlist">
              <PlaylistPage handleAddToPlaylist={handleAddToPlaylist} />
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
