import * as usersService from '../../utilities/users-service';
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import SimpleSlider from '../../components/Carousel/Carousel';


export default function DiscoverPage() {

  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <section>

      <h1>DiscoverPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
      <div style={{ width: 75 + '%', float: 'right' }}>
        <SimpleSlider>
        </SimpleSlider>

      </div>
    </section>
  );
}