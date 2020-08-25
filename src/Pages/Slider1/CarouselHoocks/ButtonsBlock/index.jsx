import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonsBlock.module.scss';
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

const ButtonsBlock = props => {
  const {
    lengthOfSlide,
    delayValue,
    state,
    state: { isFullScreen, isPlaying, isShowSettings, elementSetting },
    setState,
  } = props;
  let { currentSlideNumber } = props;
  const maxDelay = 10;
  const iconSize = 1;

  const clickHandle = {
    settings: () => {
      setState({ ...state, isShowSettings: !isShowSettings });
      elementSetting.classList[isShowSettings ? 'remove' : 'add'](`active`);
    },
    prev: () => {
      currentSlideNumber = (currentSlideNumber - 1 + lengthOfSlide) % lengthOfSlide;
      console.log(currentSlideNumber);
    },

    play: () => {
      setState({ ...state, isPlaying: !isPlaying });
      elementSetting.classList.remove(`active`);
    },
    next: () => {
      currentSlideNumber = (currentSlideNumber + 1) % lengthOfSlide;
      console.log(currentSlideNumber);
    },
    range: props => {
      setState({ ...state, delayValue: props[1] });
    },
    fullscreen: () => {
      setState({ ...state, isFullScreen: !isFullScreen });
    },
  };

  const iconProps = (actionName, iconName) => {
    return {
      onClick: clickHandle[actionName],
      path: iconName,
      size: iconSize,
    };
  };

  return (
    <div className={styles.buttonsBlock} onDoubleClick={e => e.stopPropagation()} onClick={e => e.stopPropagation()}>
      <Icon {...iconProps('settings', mdiCogOutline)} />
      <div className={styles.settings} id="settings">
        <div className={styles.settings__item}>
          <span>delay</span>
          {`${delayValue}s`}
          <input
            title="delay"
            type="range"
            min="1"
            max={maxDelay}
            ref={delayValue}
            // value={delayValue.current}
            step={'1'}
            onChange={e => setState({ ...state, delayValue: e.target.value })}
          />
        </div>
      </div>
      <div className={styles.movesBlock}>
        <div className={styles.movesBlock__playControl}>
          <Icon {...iconProps('prev', mdiSkipPrevious)} />
          <Icon {...iconProps('play', isPlaying ? mdiStop : mdiPlay)} />
          <Icon onClick={clickHandle.next} path={mdiSkipNext} size={iconSize} />
        </div>
      </div>
      <Icon {...iconProps('fullscreen', isFullScreen ? mdiFullscreenExit : mdiFullscreen)} />
    </div>
  );
};

ButtonsBlock.propTypes = {
  lengthOfSlide: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func,
};

export default ButtonsBlock;
