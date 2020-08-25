import React, { useState, useEffect, useRef } from 'react';

import styles from './Carousel.module.scss';
import Slide from '../Slide';
import ButtonsBlock from './ButtonsBlock';

const Carousel = props => {
  const { slides, sliderStyles } = props;
  const lengthOfSlide = slides.length;
  const [state, setState] = useState({
    // delayValue: 5,
    isFullScreen: false,
    isPlaying: true,
    isShowSettings: false,
    elementSetting: null,
  });
  const { isPlaying } = state;
  const currentSlideNumber = useRef(0);
  const refValue = useRef({
    delayValue: 5,
    currentSlideNumber: 0,
  });
  let timeoutId = null;

  useEffect(() => {
    setState({ ...state, elementSetting: document.getElementById('settings') });
  }, []);
  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (isPlaying) {
      let { currentSlideNumber, delayValue } = refValue.current;
      timeoutId = setTimeout(() => {
        currentSlideNumber = (currentSlideNumber + 1) % lengthOfSlide;
      }, delayValue * 1000);
    }
  });

  const bgSize = sliderStyles.isSlideContain ? 'contain' : 'cover';
  const currentStyles = state.isFullScreen ? { ...sliderStyles, width: '100vw', height: '100vh' } : sliderStyles;
  const handleMove = () => {
    setState({ ...state, isPlaying: !isPlaying, isShowSettings: false });
    state.elementSetting.classList.remove(`active`);
  };
  return (
    <div
      className={styles.carousel}
      style={currentStyles}
      onClick={handleMove}
      // onDoubleClick={setState({ ...state, isFullScreen: !state.isFullScreen })}
    >
      <Slide slide={slides[currentSlideNumber.current]} bgSize={bgSize} />
      <ButtonsBlock
        delayValue={refValue.current.delayValue}
        currentSlideNumber={currentSlideNumber}
        lengthOfSlide={lengthOfSlide}
        state={state}
        setState={setState}
      />
    </div>
  );
};

export default Carousel;
