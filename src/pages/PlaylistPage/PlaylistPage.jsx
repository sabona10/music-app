// import * as usersService from '../../utilities/users-service';
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import './PlaylistPage.css'
import { useLocation, Redirect } from 'react-router-dom';
// import playlist from '../../../models/playlist';
// import {useEffect} from 'react';

// import SimpleSlider from '../../components/Carousel/Carousel';


export default function PlaylistPage({handleAddToPlaylist}) {

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
  const { state } = useLocation()
  // console.log(state)
  if (state === undefined){
    return <Redirect to="/discover" />
  }else{
    let playlist = state.playlist;
    // console.log(playlist);
    // const { state:{playlist} } = useLocation()
    // state = { playlist } 
 
  // console.log(playlist);
  // }
  // console.log(playlist)
  // const playlist = 
  return (
    <section>
     
      <div>
        <div className="main">
          <h1>One Playlist called {playlist.list_Name}</h1>
          {
            playlist.songs.length ? 
            <ul className="cards">
              <div className="container">
                <h2>Responsive Tables Using LI <small>Triggers on 767px</small></h2>
                <ul className="responsive-table">
                  <li className="table-header">
                    <div className="col col-1">Song Id</div>
                    <div className="col col-2">Song Name</div>
                    <div className="col col-3">Artist</div>
                    <div className="col col-4">Duration</div>
                  </li>
                  {playlist.songs.map(song=>
                  <li className="table-row">
                    <div className="col col-1" data-label="Job Id">{song.song_id}</div>
                    <div className="col col-2" data-label="Customer Name">{song.song_name}</div>
                  <div className="col col-3" data-label="Amount">{song.artist}</div>
                    <div className="col col-4" data-label="Payment Status">{song.duration} </div>
                  </li>
                    
                    )}
                </ul>
                  <button onClick={() => handleAddToPlaylist(playlist._id, {
                    song_id: 'QTw5B7YhaIQ',
                    song_name: 'Be Prepared',
                    duration: 2000,
                    artist: 'jay'
                  })}>Add something this to playlist 'abc'</button>
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
          
            :
              <div><div> No playlists to show</div> <div><button onClick={() => handleAddToPlaylist(playlist._id, {
                song_id: 'QTw5B7YhaIQ',
                song_name: 'Be Prepared',
                duration: 2000,
                artist: 'jay'})}>Add something this to playlist 'abc'</button></div></div>      }
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