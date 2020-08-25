export const clickHandle = {
  settings: function () {
    document.getElementById('settings').classList[this.isShowSettings ? 'remove' : 'add'](`active`);
    this.isShowSettings = !this.isShowSettings;
  },
  prev: function () {
    this.currentSlideNumber = (this.currentSlideNumber - 1 + this.slides.length) % this.slides.length;
  },

  play: function () {
    this.setState({ isPlaying: !this.state.isPlaying });
    document.getElementById('settings').classList.remove(`active`);
  },
  next: function () {
    this.setState({ currentSlideNumber: (this.state.currentSlideNumber + 1) % this.slides.length });
  },
  range: function (props) {
    this.setState({
      delayValue: props[1],
    });
  },
  fullscreen: function () {
    this.setState({ isFullScreen: !this.state.isFullScreen });
  },
};
