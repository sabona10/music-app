

// import React, { Component } from "react";
// import Slider from "react-slick";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Banner.css'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";


export default function NavBar({name,author,image}) {
    

    return (
        <div className='banner'>
            <div className='banner-content'>
            <div className='image'>
                <img src={image} alt="" />
                <span className='bimage'><img src={image} alt="" /></span>

            </div>
            <div className='contitle'>
            <span className='ttitle'>playlist ...</span>
            {/* <span className='title'>{name}</span> */}
            <div className='tt'>
            <span className='ptitle'>{name}</span>
            <span className='subtitle'>created by <strong>{author}</strong> </span>
                    </div>
            </div>

            </div>
            <span className='bannerimage'><img src={image} alt="" /></span>

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