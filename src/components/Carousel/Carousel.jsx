

// import React, { Component } from "react";
// import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from "react-contextmenu";

import './Carousel.css'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";


export default function NavBar({ yearsbest, load, handleAddToPlaylist, allPlaylist}) {
    
    // console.log(yearsbest);
    return (
        <div className="carousel">
            {
                yearsbest.map((song,idx)=>{
                    return (
                    <>
                            <ContextMenuTrigger id={song.song_id} >
                    <div className='card' onClick={() => load({
                        title: song.song_name,
                        artist: song.artist,
                        url: 'https://www.youtube.com/watch?v=' + song.song_id
                    })}>
                        <div className='image'>
                                        <img style={{ 'objectFit': 'cover', height: '135%' }} src={'https://img.youtube.com/vi/' + song.song_id+'/hqdefault.jpg'} alt="" />
                            <span className='bimage'><img src={'https://img.youtube.com/vi/' + song.song_id + '/hqdefault.jpg'} alt="" /></span>
                            
                        </div>
                        <span className ='title'>{song.song_name}</span>
                        <span className ='subtitle'>{song.artist}</span>
                    </div>
                            </ContextMenuTrigger>
                            <ContextMenu id={song.song_id} >
                                <MenuItem onClick={() => load({
                                    title: song.song_name,
                                    artist: song.artist,
                                    url: 'https://www.youtube.com/watch?v=' + song.song_id
                                })}>
                                    Play
                              </MenuItem>
                                <MenuItem divider />
                                <SubMenu title='Add to Playlist'>
                                    {allPlaylist.map(playlist =>
                                        <MenuItem key={playlist._id} onClick={() => handleAddToPlaylist(playlist._id, {
                                            song_id: song.song_id,
                                            song_name: song.song_name,
                                            duration: song.duration,
                                            created_at: Date.now(),
                                            thumbnail: song.thumbnail ? song.thumbail : 'https://play-lh.googleusercontent.com/j-MLXrudwclqIlOZxRe90kOGS744GY0spVZF2OsEnJeMMxqa6Qxu1SwLiCmjQp8gIA',
                                            artist: song.artist
                                        })} >{playlist.list_Name}</MenuItem>
                                        // <MenuItem onClick={handleClick} data={{ foo: 'subitem 2' }}>playlist 2</MenuItem>
                                    )}
                                </SubMenu>
                                {/* <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
                                ContextMenu Item 3
                              </MenuItem> */}
                            </ContextMenu>
                    </>
                    )

                })
            }

            
           
             
        </div>
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