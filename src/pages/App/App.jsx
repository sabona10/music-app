import { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
// import ReactPlayer, {playing} from 'react-player/youtube'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import * as playlistApi from '../../utilities/playlists-api';
import * as browseApi from '../../utilities/browse-api';
import ChartsPage from '../ChartsPage/ChartsPage';
// import GenresPage from '../GenresPage/GenresPage';
import DiscoverPage from '../DiscoverPage/DiscoverPage';
import PlaylistsPage from '../PlaylistsPage/PlaylistsPage';
import PlaylistPage from '../PlaylistPage/PlaylistPage';
import ResultPage from '../ResultPage/ResultPage';
import NavBar from '../../components/NavBar/NavBar';
// import PlayerBar from '../../components/PlayerBar/PlayerBar';
import PlayerBar from '../../components/PlayerBar/PlayerBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [thisPlaylist, setThisPlaylist] = useState([]);
  const [browsePlaylists, setBrowsePlaylists] = useState([{
    list_Name: 'admin',
    songs: [{
      song_id: '',
      song_name: '',
      duration: 0,
      artist: '',
      number:'1',
      thumbnail: ''
    }],
    author_name: 'admin',
    author_id: 'admin',
    // user:[userSchema]
  }]);
  const [playing, setPlaying] = useState(true);
  const [nowPlaying, setNowPlaying] = useState({
    title:'',
    artist:''
  })
  
  // const [chartPlaylist, setChartPlaylist] = useState([]);



  //player 
  const [url, setUrl] = useState(null);
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);
  // const [player, setPlayer] = useState(null);

  const history = useHistory();
  // const [onProgress, setOnProgress] = useState();
  // const [onePlaylists, setOnePlaylists] = useState([]);
 
  useEffect(() => {
    async function getAllPlaylists() {
      console.log(user);
      const playlists = await playlistApi.getAll(getUser());
      if (allPlaylists !== undefined) setAllPlaylists(playlists);
      setAllPlaylists(playlists);
      console.log(playlists);
      
    }
    async function getBrowsePlaylists() {
      // console.log(user);
      const playlists = await playlistApi.getAll('admin');
      if(browsePlaylists !== undefined) setBrowsePlaylists(playlists);
      // console.log(playlists);
      
    }

    if(user){
      getBrowsePlaylists();
      getAllPlaylists();
    }
  }, [user,history])
  // useEffect(()=>{
  //   async function getChartPlaylists() {
  //     // console.log(user);
  //     const chartplaylists = await playlistApi.getOne('6015f53f4146db4c0859c538');
  //     setChartPlaylist(chartplaylists);
  //     // console.log(playlists);

  //   }
  //   return getChartPlaylists();
  // },[])
  // console.log(user);


  // async function handleGetAllPlaylist() {
  //   const playlists = await playlistApi.getAll(user);
  //   setAllPlaylists(playlists);
  //   console.log(playlists);
  // }



  // async function handleGetOnePlaylist(playlistId) {
  //   const playlists = await playlistApi.getOne(playlistId);
  //   // setAllPlaylists(playlists);
  //   console.log(playlists);
  // }






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
  // console.log("here");
    for (var i = 0; i < allPlaylists.length; i++) {
      if (allPlaylists[i]._id === playlistId) {
        console.log("heree");
        
        let newPlaylist = allPlaylists[i];
        newPlaylist.songs.splice(songPosition,1);
        const playlists = await playlistApi.deleteOne(newPlaylist);
        
        if(thisPlaylist && thisPlaylist._id === playlistId) setThisPlaylist(playlists);
        allPlaylists[i] = playlists;
        setAllPlaylists(allPlaylists);
        break;
      }

    }
  }  

// async function handleGetSearchSuggestions(term) {
//       const suggestions = await browseApi.getSuggestion(term);
      
//     console.log(suggestions)
//   }  

  const load = (url) => {
    setNowPlaying({
      title: url.title,
      artist: url.artist
    })
    setUrl(url.url);
    // setPlayed(0);
    // player.current.seekTo(0)
    // setLoaded(0);
    setPlaying(true)
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
          {/* <div onClick={()=>handleGetSearchSuggestions('justin')}>click me</div> */}
          {/* <button onClick={pausevid}>pause vid</button>
          <button onClick={playvid}>play vid</button> */}
          <NavBar user={user} setUser={setUser} allPlaylist={allPlaylists} handleCreatePlaylist={handleCreatePlaylist} />
          {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing={playing} onDuration={handleDuration}/> */}
          <Switch>
            <Route path="/charts">
              <ChartsPage load={load} handleAddToPlaylist={handleAddToPlaylist} allPlaylist={allPlaylists} browsePlaylists={browsePlaylists} />
            </Route>
            <Route path="/discover">
              <DiscoverPage browsePlaylists={browsePlaylists} load={load} handleAddToPlaylist={handleAddToPlaylist} allPlaylist={allPlaylists}/>
            </Route>
            {/* <Route path="/genres">
              <GenresPage />
            </Route> */}
            <Route path="/result">
              <ResultPage load={load} handleAddToPlaylist={handleAddToPlaylist} allPlaylist={allPlaylists}/>
            </Route>
            <Route path="/playlists">
              <PlaylistsPage allPlaylist={allPlaylists} handleDeletePlaylist={handleDeletePlaylist}/>
            </Route>
            <Route path="/playlist">
              <PlaylistPage load={load} thisPlaylist={thisPlaylist} setThisPlaylist={setThisPlaylist} handleRemoveFromPlaylist={handleRemoveFromPlaylist} handleAddToPlaylist={handleAddToPlaylist} allPlaylist={allPlaylists}  />
            </Route>
            <Redirect to="/discover" />
          </Switch>
          <PlayerBar load={load} url={url} setUrl={setUrl} played={played} setPlayed={setPlayed} loaded={loaded} setLoaded={setLoaded} playing={playing} setPlaying={setPlaying} nowPlaying={nowPlaying} setNowPlaying={setNowPlaying} />

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
