// import * as usersService from '../../utilities/users-service';
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import './PlaylistsPage.css'
import { Link } from 'react-router-dom';
// import { deletePlaylist } from '../../utilities/playlists-api';

// import SimpleSlider from '../../components/Carousel/Carousel';


export default function PlaylistsPage({ allPlaylist, handleDeletePlaylist}) {

  // async function handleCheckToken() {
  //   const expDate = await usersService.checkToken();
  //   console.log(expDate);
  // }

  return (
    <section>
      <div>
        <div className="main">
          <h1>All Your Playlist</h1>
          <ul className="cards">
          {allPlaylist.map(playlist =>
            <li className="cards_item" key={playlist._id}>
              <div className="card">
                <div className="card_image">
                  
                  <div className='image'>
                    {playlist.songs.length ? <img style={{ 'object-fit': 'cover', height: '135%' }} src={'https://img.youtube.com/vi/' + playlist.songs[0].song_id + '/hqdefault.jpg'} alt="" />
                    
                    :
                      <img src="https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA" alt="" />
                    }
                    <span className='bimage'><img src="https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA" alt="" /></span>

                  </div>
                  {/* <img src="https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA"  alt='' /> */}
                  </div>
                  <div className="card_content">
                  <Link
                    to={{
                      pathname: '/playlist',
                      state: { playlist }
                    }}
                    key={playlist._id}
                  ><h2 className="card_title">{playlist.list_Name}</h2></Link>
                  {/* <h2 className="card_title">{playlist.list_Name}</h2> */}
                    <p className="card_text">{playlist.songs.length} songs </p>
                  <button onClick={() => handleDeletePlaylist(playlist._id)}>Delete Playlist</button>
                  </div>
                </div>
            </li>
          )}
          </ul>
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