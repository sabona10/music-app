import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser, allPlaylist, handleCreatePlaylist }) {
  const [playlistName, setPlaylistName] = useState('');
  const [disabled, setDisabled] = useState(true);
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

  return (
    <aside className="sidebar">
      <nav className="nav">
        <ul>
          <li><NavLink exact activeStyle={{ color: 'white' }} to="/discover">Discover</NavLink></li>
          <li><NavLink exact activeStyle={{ color: 'white' }} to="/charts">Top Charts</NavLink></li>
          <li><NavLink exact activeStyle={{ color: 'white' }} to="/genres">Genres</NavLink></li>
          <li className="ptitle"><NavLink exact activeStyle={{ color: 'white' }} to="/playlists">Playlists</NavLink></li>
          <ul className="playlist">
            {allPlaylist.map(playlist =>
              <li>
                <Link
                  to={{
                    pathname: '/playlist',
                    state: { playlist }
                  }}
                  key= {playlist._id}
                ><span>{playlist.list_Name}</span></Link>
                {/* <a href={() => false}><span>{playlist.list_Name}</span></a> */}
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

          <li><a href={() => false}><span>Welcome, {user.name}</span></a></li>
          <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>

        </ul>
      </nav>
    </aside>
    // <nav>
    //   <NavLink exact activeStyle={{color: 'white'}} to="/orders">Order History</NavLink>
    //   &nbsp; | &nbsp;
    //   <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/orders/new">New Order</NavLink>
    //   &nbsp; | &nbsp;
    //   <span>Welcome, {user.name}</span>
    //   &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    // </nav>
  );
}