import React from 'react';
import PropTypes from 'prop-types';

import Carousel from './Carousel';

import styles from './Slider.module.scss';
import '../Slider/common/_commonStyles.scss';

function Slider(props) {
  const { slides, sliderStyles } = props;
  return (
    <article id="slider" className={styles.contentContainer} style={{ top: '0px', left: '0px' }}>
      <a className="returnLink" href="/">
        ←
      </a>
      <Carousel slides={slides} sliderStyles={sliderStyles} />
    </article>
  );
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      src: PropTypes.string,
    })
  ),
  sliderStyles: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    backgroundColor: PropTypes.string,
    isSlideContain: PropTypes.bool,
  }),
};

Slider.defaultProps = {
  sliderStyles: {
    width: '600px',
    height: '450px',
    backgroundColor: '#313131',
    isSlideContain: true,
  },
  slides: [
    {
      id: '1',
      title: 'Hubble Sees Near and Far',
      src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2031a.jpg',
      description:
        'The barred spiral galaxy known as NGC 4907 shows its starry face from 270 million light-years away to anyone who can see it from the Northern Hemisphere. Appearing in this Hubble image to shine brightly below the galaxy is a star that is actually within our own Milky Way galaxy.',
    },
    {
      id: '2',
      title: 'Hubble Uses Earth as a Proxy for Identifying Oxygen on Potentially Habitable Planets Around Other Stars',
      src:
        'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-h-p2030a-f-1410x785.png',
      description: '',
    },
    {
      id: '3',
      title: 'Hubble Peeks at Stellar Treats',
      src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2030a.jpg',
      description:
        'Aside from its dazzling good looks, this cluster of stars, NGC 2203, contains lots of astronomical treats that have helped astronomers puzzle together the lifetimes of stars.',
    },
  ],
};

export default Slider;
