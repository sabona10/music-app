import * as usersService from '../../utilities/users-service';
// import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import Carousel from '../../components/Carousel/Carousel';
import SimpleTable from '../../components/SimpleTable/SimpleTable';
import GridBox from '../../components/GridBox/GridBox';
import './DiscoverPage.css';
import {useState} from 'react';


export default function DiscoverPage({ browsePlaylists, load, handleAddToPlaylist, allPlaylist }) {
  // console.log(browsePlaylists)
  // console.log('ree');
  // let popular;;
  let narray, nnarray, popular, yearsbest, hot100, countrysongs, latinsongs, rbhiphopsongs, rocksongs, popsongs, danceelectronicsongs;

  yearsbest = popular = [{
    artist: "24kGoldn Featuring iann dior",
    created_at: "",
    duration: 141000,
    number: "24",
    song_id: "GAEuJe8NDzc",
    song_name: "Mood",
    thumbnail: null
  }];
  nnarray =narray = [];
  
  danceelectronicsongs = popsongs = rocksongs = rbhiphopsongs =latinsongs = countrysongs = {
    list_Name: 'admin',
    songs: [{
      song_id: '',
      song_name: '',
      duration: 0,
      artist: '',
      number: '1',
      thumbnail: ''
    }],
    author_name: 'admin',
    author_id: 'admin',
    // user:[userSchema]
  }
  for (let i = 0; i < browsePlaylists.length; i++) {
    const element = browsePlaylists[i];
    // console.log(element)

    if (element.list_Name === 'hot-100') {
      popular = element.songs.slice(0, 10);
      yearsbest = []
      for (let ix = 0; ix < element.songs.length; ix++) {
        const elementss = element.songs[ix];
        narray.push(parseInt(elementss.number))

      }
      nnarray = narray.sort((a, b) => a - b).reverse().splice(0, 12);
      for (let ix = 0; ix < element.songs.length; ix++) {
        const elementss = element.songs[ix];
        if (nnarray.includes(parseInt(elementss.number))) {
          yearsbest.push(elementss)
        }
        // narray.push(parseint(element.number))

      }


    }
    // console.log(yearsbest);
    // console.log('yere');

    if (element.list_Name === 'hot-100') { hot100 = element; }
    if (element.list_Name === 'country-songs') { countrysongs = element; }
    if (element.list_Name === 'latin-songs') { latinsongs = element; }
    if (element.list_Name === 'r-b-hip-hop-songs') { rbhiphopsongs = element; }
    if (element.list_Name === 'rock-songs') { rocksongs = element; }
    if (element.list_Name === 'pop-songs') { popsongs = element; }
    if (element.list_Name === 'dance-electronic-songs') { danceelectronicsongs = element; }

    
  }
      const genres = [
        {rbhiphopsongs},{rocksongs},{countrysongs},{latinsongs},{
        popsongs},{danceelectronicsongs}]
      
  // console.log(popular);
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <section className='discover-page'>

      {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
      {/* <div style={{ width: 75 + '%' }}> */}
      <div >
        <div className='featuredcarousel'>
          <span className='btitle'>Top Songs of This Year </span>
          <Carousel yearsbest={yearsbest} load={load} handleAddToPlaylist={handleAddToPlaylist} allPlaylist={allPlaylist} >
          </Carousel>

        </div>

        <div className='populartable'>
          <span className='btitle'>Popular This Week</span>
          <SimpleTable popular={popular} load={load} />

        </div>
        <div className='moodgrid'>
          <span className='btitle'>Genres</span>
          <GridBox genres={genres}/>

        </div>


      </div>
    </section>
  );
}