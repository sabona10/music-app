import * as usersService from '../../utilities/users-service';
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import './PlaylistsPage.css'

import SimpleSlider from '../../components/Carousel/Carousel';


export default function DiscoverPage({ allPlaylist}) {

  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <section>
      <div>
        <div class="main">
          <h1>All Your Playlist</h1>
          <ul class="cards">
          {allPlaylist.map(playlist =>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA"  alt='' />
                  </div>
                  <div class="card_content">
                  <h2 class="card_title">{playlist.list_Name}</h2>
                    <p class="card_text">{playlist.songs.length} songs</p>
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