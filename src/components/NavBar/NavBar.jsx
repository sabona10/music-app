import { useState, useEffect } from 'react';

import { Link, NavLink, useHistory } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as browseApi from '../../utilities/browse-api';
import '../PlayerBar/PlayerBarIconsCss/flaticon.css';
import './NavBar.css'

export default function NavBar({ user, setUser, allPlaylist, handleCreatePlaylist }) {
  const [playlistName, setPlaylistName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  // const [results, setResults] = useState({});


  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const handleChange = (e) => {
    if (e.target.value) setDisabled(false);
    setPlaylistName(e.target.value)
  }
  const handleSubmit = () => {
    const newPlaylist = {
      songs: [],
      list_Name: playlistName,
      author_name: user.name,
      author_id: user._id
    };
    handleCreatePlaylist(newPlaylist);
    setPlaylistName('')
  }
  // const [timer, setTimer] = useState(2);

  const handleSearchChange = (e) => {
    if (e.target.value.length > 1) setSearchDisabled(false);
    // console.log(timer);
    setSearchTerm(e.target.value)
  }

  // const [value, setValue] = useState("");

  // const handleOnChange = (event) => {
  //   setValue(event.target.value);
  // };
  async function handleGetSearchSuggestions(term) {
    if(term.length>1){
      const suggestions = await browseApi.getSuggestion(term);
      setSuggestions(suggestions);
      console.log(suggestions)
    }
  } 
  const history = useHistory();

  async function handleGetSearchResults(term) {
    setSearchTerm('')
    setSuggestions([])
    if(term.length>1){
      const results = await browseApi.getResult(term);
      history.push({
        pathname: "/result",
        state: { playlist: results },
      });
      // setResults(results);
      // console.log(results)
    }
    
  } 
  // var playlis = {yes:'yes'}
  // function ress() {
    
  //   history.push({
  //     pathname: "/result",
  //     state: { playlist:playlis },
  //   });
    
  // }
  useEffect(() => {
    const timeoutId = setTimeout(() => handleGetSearchSuggestions(searchTerm), 400);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);
  
  
  
  // var ttimer;
  const handleSearchSubmit = (e) => {
    // console.log(e)
    if (e.key === "Enter") handleGetSearchResults(searchTerm);
  }

  return (
    <>
     
    <aside className="sidebar">
      <nav className="nav">
        <ul>
          <li><NavLink exact activeStyle={{ color: 'white' }} to="/discover"> <span className='flaticon-window-of-four-rounded-squares'></span>  Discover</NavLink></li>
          <li><NavLink exact activeStyle={{ color: 'white' }} to="/charts"><span className='flaticon-statistics'></span> Top Charts</NavLink></li>
          {/* <li><NavLink exact activeStyle={{ color: 'white' }} to="/genres"> <span className='flaticon-dj'></span> Genres</NavLink></li> */}
          <li className="ptitle"><NavLink exact activeStyle={{ color: 'white' }} to="/playlists"> <span className='flaticon-playlist-1'></span> Playlists</NavLink></li>
          <ul className="playlist">
            {allPlaylist.map(playlist =>
              <li key={playlist._id} className="playlists">
                <Link
                  to={{
                    pathname: '/playlist',
                    state: { playlist }
                  }}
                  key= {playlist._id}
                > <span className='flaticon-paragraph-left-alignment-symbol-for-interface'></span> <span>{playlist.list_Name}</span></Link>
              </li>
            )}
            <li><div className="inputField">
              <input
                name="name"
                value={playlistName}
                onChange={handleChange}
                type="text" placeholder="Add a playlist" />
              <button onClick={handleSubmit} disabled={disabled}>+</button>
            </div></li>
          </ul>

          <li><Link to=""><span>Welcome, {user.name}</span></Link></li>
          <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>

        </ul>
      </nav>
    </aside>
    
     <div className="header">
        {/* <h1 onClick={()=>handleGetSearchResults('despacito')}>clickme</h1> */}
        <div className="inputField">
          <input
            name="name"
            value={searchTerm}
            onChange={handleSearchChange}
            type="text" placeholder="search for song"
            onKeyDown={handleSearchSubmit} />
          <button onClick={handleSearchSubmit} disabled={searchDisabled} type='submit'>Search</button>
        </div>
        
          <div className="suggestions">
            {suggestions.map(suggestion=>
              <div onClick={() => handleGetSearchResults(suggestion)}>{suggestion}</div>
              )}
          </div>
      </div>
    </>
  );
}