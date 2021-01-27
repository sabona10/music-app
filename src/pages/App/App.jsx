import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import * as playlistApi from '../../utilities/playlists-api';
import * as browseApi from '../../utilities/browse-api';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allPlaylists, setAllPlaylists] = useState([]);
  // useEffect(() => {
  //   async function getAllPlaylists() {
  //     const playlists = await playlistApi.getAll(getUser());
  //     setAllPlaylists(playlists);
  //     console.log(playlists);
  //   }
  //   getAllPlaylists();
  // }, [])
  // console.log(user);
  async function handleGetAllPlaylist(){
    const playlists = await playlistApi.getAll(user);
    setAllPlaylists(playlists);
    console.log(playlists);
  }
  return (
    <main className="App">
      { user ?
          <>
            <div onClick={handleGetAllPlaylist}>click me</div>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/orders/new">
                <NewOrderPage />
              </Route>
              <Route path="/orders">
                <OrderHistoryPage />
              </Route>
              <Redirect to="/orders" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
