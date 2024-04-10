'use client';
import React, { useState } from 'react'
import styles from './FloatingHead.module.scss'
import RemixButton from './RemixButton';

export default function FloatingHead() {

  const [song, setSong] = useState('/bach.mp3');
  const [type, setType] = useState('audio/mpeg');

  const toggleSong = () => {
    if (song === '/bach.mp3') {
      setSong('/remix.wav');
      setType('audio/wav');

    } else {
      setSong('/bach.mp3');
      setType('audio/mpeg');
    }
  };

  // Usage: toggleBoolean();
  
  return (
    <>
      <RemixButton onClick={toggleSong} />
      <div className={styles.rotate}>
      <img className={`${styles['floatingHead--animate']}`} alt="Rotating Brad Pitt's head" src="https://clipartcraft.com/images/celebrity-png-famous-14.png"/>
      </div>
      
      <audio autoPlay loop>
        <source src={song} type={type} />
        Your browser does not support the audio element.
      </audio>
    </>
  )
}
