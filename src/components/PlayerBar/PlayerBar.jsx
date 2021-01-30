import React, { Component, useState, useRef, useEffect } from 'react'
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'
import screenfull from 'screenfull';
import './PlayerBar.css'
import './PlayerBarIconsCss/flaticon.css'
import ReactPlayer from 'react-player/youtube'
import Duration from './Duration'


export default function PlayerBar({ load, url, setUrl, played, setPlayed, player, setPlayer, loaded, setLoaded }) {
    // const [url, setUrl] = useState(null);
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);
    // const [played, setPlayed] = useState(0);
    // const [loaded, setLoaded] = useState(0);
    const [duration, setDuration] = useState(0);
    const [loop, setLoop] = useState(false);
    const [seeking, setSeeking] = useState(false);
    const [state, setState] = useState(null);
    // const [player, setPlayer ] =useState(null);

    // useEffect(load = (url) => {
    //     setUrl(url);
    //     setPlayed(0);
    //     setLoaded(0);
    //     // setPlaying(!playing)
    //     // this.setState({ playing: !playing })
    // })

    // const load = (url) => {
    //     setUrl(url);
    //     setPlayed(0);
    //     player.current.seekTo(0)
    //     setLoaded(0);
    //     // setPlaying(!playing)
    //     // this.setState({ playing: !playing })
    // }


    const handlePlayPause = () => {
        setPlaying(!playing)
        // this.setState({ playing: !playing })
    }

    const handleToggleLoop = () => {
        setLoop(!loop)
        // this.setState({ loop: !loop })
    }

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value))
        // this.setState({ volume: parseFloat(e.target.value) })
    }
    const handleToggleMuted = () => {
        setMuted(!muted)
        // this.setState({ muted: !this.state.muted })
    }

    const handlePlay = () => {
        console.log('onPlay')
        setPlaying(true)
        // this.setState({ playing: true })
    }

    const handlePause = () => {
        console.log('onPause')
        setPlaying(false)
        // this.setState({ playing: false })
    }
    const handleProgress = (state) => {
        // console.log('onProgress', state)
        setPlayed(state.played);
        // We only want to update time slider if we are not currently seeking
        // setState(state)
        if (!seeking) {
            setState(state)
            // const [seeking, setSeeking]= setState(state)
            // this.setState(state)
        }
    }
    const handleSeekMouseDown = (e) => {
        setSeeking(true)
        // this.setState({ seeking: true })
    }
    const handleSeekChange = (e) => {
        setPlayed(parseFloat(e.target.value))
        // this.setState({ played: parseFloat(e.target.value) })
    }

    const ref = useRef();

    useEffect(() => {
        // console.log(ref.player)
        // const player = ref
        setPlayer(ref);
        // ref.seekTo(parseFloat(e.target.value))
        // console.log(ref);
        // player = ref.player;
    }, [ref])

    const handleSeekMouseUp = (e) => {
        // console.log(player);
        setSeeking(false)
        // this.setState({ seeking: false })
        player.current.seekTo(parseFloat(e.target.value))
        // this.player.seekTo(parseFloat(e.target.value))
    }

    const handleDuration = (duration) => {
        console.log('onDuration', duration)
        setDuration(duration)
        // this.setState({ duration })
    }
    // const handleToggleLoop = () => {
    //     setLoop(!loop)
    //     // this.setState({ loop: !this.state.loop })

    // }

    // const ref = (player) => {

    // }
    return (
        <div className='app'>
            <section className='section'>
                <h1>ReactPlayer Demo</h1>
                <div className='player-wrapper'>
                    <ReactPlayer
                        ref={ref}
                        className='react-player'
                        width='100%'
                        height='100%'
                        url={url}
                        // pip={pip}
                        playing={playing}
                        // controls={controls}
                        // light={light}
                        loop={loop}
                        // playbackRate={playbackRate}
                        volume={volume}
                        muted={muted}
                        // onReady={() => console.log('onReady')}
                        // onStart={() => console.log('onStart')}
                        onPlay={handlePlay}
                        // onEnablePIP={handleEnablePIP}
                        // onDisablePIP={handleDisablePIP}
                        onPause={handlePause}
                        onBuffer={() => console.log('onBuffer')}
                        onSeek={e => console.log('onSeek', e)}
                        // onEnded={handleEnded}
                        onError={e => console.log('onError', e)}
                        onProgress={handleProgress}
                        onDuration={handleDuration}
                    />
                </div>


                <div className='player-control-bar'>
                    <div className='song-info'>
                        <img src="" alt="" />
                        <span>
                            <span className='title'>Title</span>
                            <span className='artist'>artist</span>
                        </span>
                    </div>
                    <div className='controls'>
                        <span className='shuffle flaticon-shuffle'></span>
                        <span className='previous flaticon-previous'></span>
                        {!playing ? <span onClick={handlePlayPause} className='flaticon-right-triangular-arrowhead play'></span> : <span onClick={handlePlayPause} className='flaticon-pause-symbol pause'></span>}
                        <span className='next flaticon-next'></span>
                        <span className='loop'>
                            {/* <input id='loop' type='checkbox' checked={loop} onChange={handleToggleLoop} /> */}
                            <span onClick={handleToggleLoop} className={!loop ? 'flaticon-arrow-loop' : 'flaticon-arrow-loop bold' }></span> 
                            </span>
                    </div>
                    <div className='slider'>
                        <span className='elapsed'><Duration seconds={duration * played} /></span>
                        <span className='seek-slider'><input
                            type='range' min={0} max={0.999999} step='any'
                            value={played}
                            onMouseDown={handleSeekMouseDown}
                            onChange={handleSeekChange}
                            onMouseUp={handleSeekMouseUp}
                        /></span>
                        <span className='remaining'><Duration seconds={duration * (1 - played)}/></span>
                    </div>
                    <div className='volume'>
                        <span className='mute'>
                            {muted || volume ===0 ? <span onClick={handleToggleMuted} className='flaticon-no-sound'></span> : <span onClick={handleToggleMuted} className='flaticon-sound'></span>}
                            {/* <input id='muted' type='checkbox' checked={muted} onChange={handleToggleMuted} /> */}
                            </span>
                        <span className='volume-slider'> <input type='range' min={0} max={1} step='any' value={volume} onChange={handleVolumeChange} /></span>
                    </div>
                </div>
                {/* <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                <h3>mute <input id='muted' type='checkbox' checked={muted} onChange={handleToggleMuted} /></h3>
                <h3>volume <input type='range' min={0} max={1} step='any' value={volume} onChange={handleVolumeChange} /></h3>
                <h3>loop <input id='loop' type='checkbox' checked={loop} onChange={handleToggleLoop} /></h3>
                <h3>elapsed: <Duration seconds={duration * played} /></h3>
                <h3>remaining: <Duration seconds={duration * (1 - played)} /></h3>
                <h3>duration: <Duration seconds={duration} /></h3>
                <h3><button onClick={() => load('https://www.youtube.com/watch?v=IoO082wJ5GM')}>load this
                </button></h3>
                <h3>seek <input
                    type='range' min={0} max={0.999999} step='any'
                    value={played}
                    onMouseDown={handleSeekMouseDown}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                /></h3> */}

            </section>


        </div>
    )
};
