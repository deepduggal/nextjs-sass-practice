'use client';
import React from 'react';
import styles from './RemixButton.module.scss';

export default function RemixButton({onClick}) {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <button className={styles.remixBttn} onClick={onClick}>Remix</button>
  );
}