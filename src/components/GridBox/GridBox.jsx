

// import React, { Component } from "react";
// import Slider from "react-slick";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import './Gridbox.css'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export default function Gridbox({ genres }) {
    // console.log(genres);
    const genrename={
        "country-songs":"Country",
        "dance-electronic-songs":"Dance/Electronic",
        "latin-songs":"Latin",
        "pop-songs":"Pop",
        "r-b-hip-hop-songs":"R&B/Hip-Hop",
        "rock-songs":"Rock"
    }
    return (

        <div className="gridcards">
            {genres.map(genre=>{
                const playlist = genre[Object.keys(genre)[0]];
                const loaded = playlist.songs.length>1?3:0;
                // console.log(genre[Object.keys(genre)[0]].list_Name);
            return (
                <Link
                    to={{
                        pathname: '/playlist',
                        state: { playlist }
                    }}
                    key={playlist._id}
                >
            <div className="gridcard">
                <div className='gridimage'>
                            {playlist.songs.length ? <img style={{ 'objectFit': 'cover', height: '135%' }} src={'https://img.youtube.com/vi/' + playlist.songs[loaded].song_id + '/hqdefault.jpg'} alt="" />
                            :
                    <img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt="" />}
                    <span className='gbimage'><img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt="" /></span>

                </div>
                <div className='gridcardtitle'>{genrename[playlist.list_Name]}</div>
            </div>
            </Link>
            )
            }
            )

            }
            
            {/* <div className="gridcard">TWO</div>
  <div className="gridcard">THREE</div>
  <div className="gridcard">FOUR</div>
  <div className="gridcard">FIVE</div>
  <div className="gridcard">SIX</div>
  <div className="gridcard">SEVEN</div>
  <div className="gridcard">EIGHT</div>
  <div className="gridcard">NINE</div>
  <div className="gridcard">TEN</div>
  <div className="gridcard">ELEVEN</div>
  <div className="gridcard">TWELVE</div> */}
        </div>
        // <table className='simpletable'>

        //     <tbody>
        //         <tr className="highligted">
        //             <td>1</td>
        //             <td>
        //                 <div className='simage'>
        //                     <img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt="" />
        //                     <span className='sbimage'><img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt="" /></span>

        //                 </div>
        //             </td>
        //             <td>blinding lights</td>
        //             <td>the weeknd</td>
        //             <td>3:58</td>
        //             <td>:</td>
        //         </tr>
        //         <tr className="spacer"></tr>
        //         <tr className="highligted">
        //             <td>1</td>
        //             <td>
        //                 <div className='simage'>
        //                     <img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt="" />
        //                     <span className='sbimage'><img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt="" /></span>

        //                 </div>
        //             </td>
        //             <td>st</td>
        //             <td>the weekndsss</td>
        //             <td>3:58</td>
        //             <td>:</td>
        //         </tr>
        //     </tbody>
        // </table>


    )
}

// export default class SimpleSlider extends Component {
//     render() {
//         const settings = {
//             dots: false,
//             infinite: false,
//             speed: 500,
//             slidesToShow:5,
//             slidesToScroll: 1,
//             responsive: [
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         arrows: false,
//                         centerMode: true,
//                         centerPadding: '40px',
//                         slidesToShow: 3
//                     }
//                 },
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         arrows: false,
//                         centerMode: true,
//                         centerPadding: '40px',
//                         slidesToShow: 1
//                     }
//                 }
//             ]
//         };
//         return (
//             <div>
//                 <span> Single Item</span>
//                 <Slider {...settings}>
//                     <div className='card'>
//                         <div className='image'>
//                             <img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt=""/>
//                         </div>
//                         <h3>1</h3>
//                     </div>
//                     <div className='card'>
//                         <div className='image'>
//                             <img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt=""/>
//                         </div>
//                         <h3>2</h3>
//                     </div>
//                     <div className='card'>
//                         <div className='image'>
//                             <img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt=""/>
//                         </div>
//                         <h3>3</h3>
//                     </div>
//                     <div className='card'>
//                         <div className='image'>
//                             <img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt=""/>
//                         </div>
//                         <h3>4</h3>
//                     </div>
//                     <div className='card'>
//                         <div className='image'>
//                             <img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt=""/>
//                         </div>
//                         <h3>5</h3>
//                     </div>
//                     <div className='card'>
//                         <div className='image'>
//                             <img src="https://i.ytimg.com/vi/-ot6NLsbxjg/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3lpulY1JNUEorxChGiioEyNRWJanA" alt=""/>
//                         </div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         );
//     }
// }