import React, { Component } from 'react';
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
import { clickHandle } from '../functions';

class ButtonsBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconSize: 1,
      maxDelay: 10,
      delayValue: 5,
    };
  }

  iconProps(actionName, iconName) {
    return {
      onClick: clickHandle[actionName].bind(this, this.setState),
      path: iconName,
      size: this.state.iconSize,
    };
  }
  render() {
    const {
      lengthOfSlide,
      state,
      state: { isFullScreen, isPlaying, isShowSettings, elementSetting, currentSlideNumber },
      setState,
    } = this.props;
    const { iconSize, maxDelay, delayValue } = this.state;
    return (
      <div className={styles.buttonsBlock} onDoubleClick={e => e.stopPropagation()} onClick={e => e.stopPropagation()}>
        <Icon {...this.iconProps('settings', mdiCogOutline)} />
        <div className={styles.settings} id="settings">
          <div className={styles.settings__item}>
            <span>delay</span>
            {`${delayValue}s`}
            <input
              title="delay"
              type="range"
              min="1"
              max={maxDelay}
              value={delayValue}
              step={'1'}
              onChange={e => this.setState({ delayValue: e.target.value })}
            />
          </div>
        </div>
        <div className={styles.movesBlock}>
          <div className={styles.movesBlock__playControl}>
            <Icon {...this.iconProps('prev', mdiSkipPrevious)} />
            <Icon {...this.iconProps('play', isPlaying ? mdiStop : mdiPlay)} />
            <Icon {...this.iconProps('next', mdiSkipNext)} />
          </div>
        </div>
        <Icon {...this.iconProps('fullscreen', isFullScreen ? mdiFullscreenExit : mdiFullscreen)} />
      </div>
    );
  }
}

ButtonsBlock.propTypes = {
  lengthOfSlide: PropTypes.number.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func,
};

export default ButtonsBlock;
