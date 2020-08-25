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
    {
      id: '4',
      title: 'Hubble Sees Summertime on Saturn',
      src:
        'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-h-p2043a-f-1592x1137.png',
      description: '',
    },
    {
      id: '5',
      title: 'Hubble Makes a Bright Find',
      src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2024a_0.jpg',
      description:
        'Seen here in incredible detail is the starburst galaxy formally known as PLCK G045.1+61.1. The galaxy, which appears as multiple reddish dots near the center of the image, is being gravitationally lensed by a cluster of closer galaxies, also seen in the image.',
    },
    {
      id: '6',
      title: "Intense Flash From Milky Way's Black Hole Illuminated Gas Far Outside of Our Galaxy",
      src:
        'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-h-p2033b-m-1695x2000.jpg',
      description: '',
    },
    {
      id: '7',
      title: "In Planet Formation, It's Location, Location, Location",
      src:
        'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/location-smaller.png',
      description: '',
    },
    {
      id: '8',
      title: 'Hubble Sees Stellar Glitter in a Cosmic Void',
      src: 'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2020a.jpg',
      description:
        'Unlike a spiral or elliptical galaxy, the galaxy KK 246 looks like glitter spilled across a black velvet sheet. KK 246, also known as ESO 461-036, is a dwarf irregular galaxy residing within the Local Void, a vast region of empty space. This lonely galaxy is the only one known for certain to reside in this enormous volume.',
    },
    {
      id: '9',
      title: 'Nancy Grace Roman: The Mother of Hubble',
      src:
        'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/44477663304_a673c66226_o.jpg',
      description: "Nancy Grace Roman (1925-2018), NASA's first chief astronomer, is known as the 'Mother of Hubble.'",
    },
    {
      id: '10',
      title: "Hubble Finds That Betelgeuse's Mysterious Dimming Is Due to a Traumatic Outburst",
      src:
        'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/stsci-h-p2044a-f-3930x1748.jpg',
      description: '',
    },
  ],
};

export default Slider;
