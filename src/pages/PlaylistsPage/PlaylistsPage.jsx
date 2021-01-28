// import * as usersService from '../../utilities/users-service';
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import './PlaylistsPage.css'
import { Link } from 'react-router-dom';

// import SimpleSlider from '../../components/Carousel/Carousel';


export default function PlaylistsPage({ allPlaylist}) {

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
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA"  alt='' />
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
                    <p className="card_text">{playlist.songs.length} songs</p>
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