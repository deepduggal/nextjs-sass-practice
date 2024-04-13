'use client';
import React, {type ReactElement} from 'react';
import styles from './RemixButton.module.scss';

type RemixButtonProps = {
  onClick: () => void,
};

export default function RemixButton({onClick}: RemixButtonProps): ReactElement {
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