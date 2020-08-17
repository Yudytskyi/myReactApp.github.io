export const clickHandle = {
  settings: function () {
    if (this.state.isShowSettings) {
      document.getElementById('settings').classList.remove(`active`);
      this.setState({ isShowSettings: false });
    } else {
      document.getElementById('settings').classList.add(`active`);
      this.setState({ isShowSettings: true });
    }
  },
  prev: function () {
    const {
      currentSlideNumber,
      slides: { length },
    } = this.state;
    this.setState({
      currentSlideNumber: (currentSlideNumber - 1 + length) % length,
    });
  },

  play: function () {
    this.setState({ isPlaying: true });
  },
  stop: function () {
    this.setState({ isPlaying: false });
  },
  range: function (props) {
    const rangeValue = props[1];
    if (this.state.speedPlaying !== rangeValue) {
      this.setState({ speedPlaying: rangeValue });
    }
  },
  next: function () {
    const {
      currentSlideNumber,
      slides: { length },
    } = this.state;
    this.setState({ currentSlideNumber: (currentSlideNumber + 1) % length });
  },
  fullscreen: function () {
    this.setState({ isFullScreen: !this.state.isFullScreen });
    document.getElementById('slider').style = { top: '0px', left: '0px' };
  },
};
