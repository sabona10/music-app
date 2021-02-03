

// import React, { Component } from "react";
// import Slider from "react-slick";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import './SimpleTable.css'
import Duration from '../PlayerBar/Duration'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";


export default function NavBar({popular, load}) {
    // console.log(popular)
    return (
        <table className='simpletable'>
            {/* <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Score</th>
                </tr>
            </thead> */}
            <tbody>
                {popular.map((song, idx)=>{
                    return (
                    <>
                            <tr className="highligted" onClick={() => load({
                                title: song.song_name,
                                artist: song.artist,
                                url: 'https://www.youtube.com/watch?v=' + song.song_id
                            })}>
                        <td>{idx+1}</td>
                        <td>
                            <div className='simage'>
                                        <img style={{ 'objectFit': 'cover', height: '135%' }} src={'https://i.ytimg.com/vi/' + song.song_id+'/2.jpg'} alt="" />
                                        {/* <span className='sbimage'><img src={'https://i.ytimg.com/vi/' + song.song_id + '/2.jpg'} alt="" /></span> */}

                            </div>
                        </td>
                        <td>{song.song_name}</td>
                        <td>{song.artist}</td>
                                <td>{<Duration seconds={song.duration / 1000} />}</td>
                        <td>:</td>
                    </tr>
                    <tr className="spacer"></tr>
                    </>
                    )
                })}
                
                {/* <tr>
                    <td>The</td>
                    <td>Rock</td>
                    <td>112</td>
                </tr>
                <tr>
                    <td>Brave</td>
                    <td>Heart</td>
                    <td>86</td>
                </tr>
                <tr>
                    <td>Martin</td>
                    <td>Jerry</td>
                    <td>48</td>
                </tr> */}
            </tbody>
        </table>
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