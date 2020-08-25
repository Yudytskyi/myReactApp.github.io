import React, { Component } from 'react';

import styles from './Carousel.module.scss';
import { clickHandle } from './functions';
import Slide from '../Slide';
import ButtonsBlock from './ButtonsBlock';

class Carousel extends Component {
  constructor(props) {
    super(props);
    const { slides, sliderStyles } = this.props;
    this.state = {
      isPlaying: false,
      delayValue: 5,
      isFullScreen: false,
      currentSlideNumber: 0,
      elementSetting: null,
    };
    this.sliderStyles = sliderStyles;
    this.slides = slides;
    this.maxDelay = 10;
    this.iconSize = 1;
    this.isShowSettings = false;
    this.timeoutId = null;
  }

  componentDidMount() {
    this.setState({ isPlaying: !this.state.isPlaying });
    this.setState({ elementSetting: document.getElementById('settings') });
  }

  componentDidUpdate(prevProps, prevState) {
    const { isPlaying } = this.state;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (isPlaying) {
      this.timeoutId = setTimeout(clickHandle.next.bind(this, this.setState), this.state.delayValue * 1000);
    }
  }

  render() {
    const { maxDelay, slides, sliderStyles, iconSize } = this;
    const lengthOfSlide = slides.length;
    const { isPlaying, isFullScreen, delayValue, currentSlideNumber, elementSetting } = this.state;
    const bgSize = sliderStyles.isSlideContain ? 'contain' : 'cover';
    const currentStyles = isFullScreen ? { ...sliderStyles, width: '100vw', height: '100vh' } : sliderStyles;

    const iconProps = (actionName, iconName) => {
      return {
        onClick: clickHandle[actionName].bind(this, this.setState),
        path: iconName,
        size: iconSize,
      };
    };

    return (
      <div
        className={styles.carousel}
        style={currentStyles}
        onClick={clickHandle.play.bind(this, this.setState)}
        onDoubleClick={clickHandle.fullscreen.bind(this, this.setState)}
      >
        <Slide slide={slides[currentSlideNumber]} bgSize={bgSize} currentSlideNumber={currentSlideNumber} />
        <ButtonsBlock
          delayValue={delayValue}
          currentSlideNumber={currentSlideNumber}
          lengthOfSlide={slides.length}
          state={this.state}
          setState={this.setState}
        />
      </div>
    );
  }
}

export default Carousel;
