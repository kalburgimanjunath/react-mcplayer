import React, { useState, useRef, createRef } from 'react';
import './style.css';
import ReactAudioPlayer from 'react-audio-player';
//...
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function App() {
  const audioList1 = [
    {
      name: 'Despacito',
      singer: 'Luis Fonsi',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
      // support async fetch music src. eg.
      // musicSrc: async () => {
      //   return await fetch('/api')
      // },
    },
    {
      name: 'Dorost Nemisham',
      singer: 'Sirvan Khosravi',
      cover:
        'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
      musicSrc:
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    },
  ];

  const audioList2 = [
    {
      name: 'Bedtime Stories',
      singer: 'Jay Chou',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
    },
    {
      name: 'Dorost Nemisham',
      singer: 'Sirvan Khosravi',
      cover:
        'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
      musicSrc: () => {
        return Promise.resolve(
          'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3'
        );
      },
    },
    {
      name: 'Despacito',
      singer: 'Luis Fonsi',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
    },
  ];

  const audioList3 = [
    {
      name: 'Despacito',
      singer: 'Luis Fonsi',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
    },
    {
      name: 'Bedtime Stories',
      singer: 'Jay Chou',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
    },
    {
      name: 'Dorost Nemisham',
      singer: 'Sirvan Khosravi',
      cover:
        'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
      musicSrc:
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    },
  ];
  const musicTracks = [
    {
      name: 'Memories',
      src: 'https://www.bensound.com/bensound-music/bensound-memories.mp3',
    },
    {
      name: 'Creative Minds',
      src: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
    },
    {
      name: 'Acoustic Breeze',
      src: 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3',
    },
    {
      name: 'Sunny',
      src: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3',
    },
    {
      name: 'Tenderness',
      src: 'https://www.bensound.com/bensound-music/bensound-tenderness.mp3',
    },
    {
      name: 'Once Again',
      src: 'https://www.bensound.com/bensound-music/bensound-onceagain.mp3',
    },
    {
      name: 'Sweet',
      src: 'https://www.bensound.com/bensound-music/bensound-sweet.mp3',
    },
    {
      name: 'Love',
      src: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
    },
    {
      name: 'Piano Moment',
      src: 'https://www.bensound.com/bensound-music/bensound-pianomoment.mp3',
    },
    {
      name: 'E.R.F',
      src: 'https://www.bensound.com/bensound-music/bensound-erf.mp3',
    },
    {
      name: 'Dreams',
      src: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
    },
    {
      name: 'A Day To Remember',
      src: 'https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music',
    },
    {
      name: 'Adventure',
      src: 'https://www.bensound.com/bensound-music/bensound-adventure.mp3',
    },
    {
      name: 'Photo Album',
      src: 'https://www.bensound.com/bensound-music/bensound-photoalbum.mp3',
    },
    {
      name: 'November',
      src: 'https://www.bensound.com/bensound-music/bensound-november.mp3',
    },
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };
  const handleClick = (event) => {
    const value = parseInt(event.target.id);
    setTrackIndex(value);
  };
  console.log(trackIndex);
  return (
    <div>
      <div className="playerContainer">
        {audioList1.map((item, index) => {
          return (
            <div key={item.name} className="videoCard">
              <h1>{item.name}</h1>

              <h3>By:{item.name}</h3>
              <div onClick={handleClick} id={index}>
                <img src={item.cover} width={200} height={200} />
              </div>
              <button onClick={handleClick} id={index}>
                Play
              </button>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <AudioPlayer
          style={{ borderRadius: '1rem' }}
          // layout="horizontal"
          autoPlay
          src={audioList1[trackIndex].musicSrc}
          onPlay={(e) => console.log('onPlay')}
          showSkipControls={true}
          showJumpControls={false}
          header={`Now playing: ${audioList1[trackIndex].name}`}
          // footer="All music from: www.bensound.com"
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
          // other props here
        />
      </div>
    </div>
  );
}
