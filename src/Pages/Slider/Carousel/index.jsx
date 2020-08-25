import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  mdiPlay,
  mdiStop,
  mdiSkipNext,
  mdiSkipPrevious,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiCogOutline,
} from '@mdi/js';

import styles from './Carousel.module.scss';
import { clickHandle } from './functions';
import Slide from '../Slide';
class Carousel extends Component {
  constructor(props) {
    super(props);
    const { slides, sliderStyles } = this.props;
    this.sliderStyles = sliderStyles;
    this.state = {
      slides: slides,
      isPlaying: false,
      speedPlaying: 5,
      speedValue: 0,
      maxSpeed: 10,
      isFullScreen: false,
      currentSlideNumber: 0,
      time: new Date(),
      iconSize: 1,
      isShowSettings: false,
    };
    this.timeoutId = null;
  }

  componentDidMount() {
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  componentDidUpdate(prevProps, prevState) {
    const { isPlaying, speedPlaying, maxSpeed } = this.state;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (isPlaying) {
      this.timeoutId = setTimeout(clickHandle.next.bind(this, [this.setState]), (maxSpeed - speedPlaying) * 1000);
    }
  }

  render() {
    const { slides, sliderStyles } = this.props;
    const { isFullScreen, maxSpeed, currentSlideNumber, isPlaying, speedPlaying, iconSize } = this.state;
    const bgSize = sliderStyles.isSlideContain ? 'contain' : 'cover';
    const currentStyles = isFullScreen ? { ...sliderStyles, width: '100vw', height: '100vh' } : sliderStyles;
    const iconProps = (actionName, iconName) => {
      return {
        onClick: clickHandle[actionName].bind(this, this.setState),
        path: iconName,
        size: iconSize,
      };
    };
    const prevSlideNumber = (currentSlideNumber - 1 + slides.length) % slides.length;
    const nextSlideNumber = (currentSlideNumber + 1) % slides.length;

    return (
      <div
        className={styles.carousel}
        style={currentStyles}
        onClick={clickHandle[isPlaying ? 'stop' : 'play'].bind(this, this.setState)}
        onDoubleClick={clickHandle.fullscreen.bind(this, this.setState)}
      >
        <Slide slide={slides[currentSlideNumber]} bgSize={bgSize} />
        <div
          className={styles.buttonsBlock}
          onDoubleClick={e => e.stopPropagation()}
          onClick={e => e.stopPropagation()}
        >
          <Icon {...iconProps('settings', mdiCogOutline)} />
          <div className={styles.settings} id="settings">
            Settings...
          </div>
          <div className={styles.movesBlock}>
            <div className={styles.movesBlock__playControl}>
              <Icon {...iconProps('prev', mdiSkipPrevious)} />
              <Icon {...iconProps(isPlaying ? 'stop' : 'play', isPlaying ? mdiStop : mdiPlay)} />
              <Icon onClick={clickHandle.next.bind(this, this.setState)} path={mdiSkipNext} size={iconSize} />
            </div>
            <input
              type="range"
              min="1"
              max={maxSpeed - 1}
              value={speedPlaying}
              onChange={e => {
                clickHandle.range.call(this, [this.setState, e.target.value]);
              }}
            />
          </div>
          <Icon {...iconProps('fullscreen', isFullScreen ? mdiFullscreenExit : mdiFullscreen)} />
        </div>
      </div>
    );
  }
}

export default Carousel;
