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
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allPlaylists, setAllPlaylists] = useState([]);
  useEffect(() => {
    async function getAllPlaylists() {
      const playlists = await playlistApi.getAll(getUser());
      setAllPlaylists(playlists);
      console.log(playlists);
    }
    getAllPlaylists();
  }, [])
  // console.log(user);
  async function handleGetAllPlaylist(){
    const playlists = await playlistApi.getAll(user);
    setAllPlaylists(playlists);
    console.log(playlists);
  }
  async function handleAddToPlaylist(song){
    // setAllPlaylists(allPlaylists.)
    const playlists = await playlistApi.getAll(user);
    setAllPlaylists(playlists);
    console.log(playlists);
  }
  async function handleCreatePlaylist(newPlaylist){

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
          <NavBar user={user} setUser={setUser} allPlaylist={allPlaylists} handleCreatePlaylist={handleCreatePlaylist} />
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
              <PlaylistsPage allPlaylist={allPlaylists}/>
              </Route>
              <Redirect to="/discover" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
