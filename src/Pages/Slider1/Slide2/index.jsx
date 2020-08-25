import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Slide.module.scss';
import dummy from './img/dummy.jpg';
import Spinner from '../../Spinner';

function Slide(props) {
  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);
  const [item, setItem] = useState([]);

  const {
    slide: { src, title, description },
    bgSize,
  } = props;

  const bgStyles = {
    backgroundPosition: 'center',
    // backgroundImage: `url(${src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: bgSize,
  };
  let image = document.getElementById('image');
  const classNameStr = classNames(styles.imageWrapper, {
    // [styles.prevSlide]: isPrevSlide,
    // [styles.nextSlide]: !isLoaded,
  });

  useEffect(() => {
    // image = document.getElementById('image');
  }, []);
  // useEffect(() => {
  //   setIsLoaded(true);
  // });

  // const loadImage = src => {
  //   return new Promise((resolve, reject) => {
  //     const img = src => {
  //       return (
  //         <div
  //           onLoad={() => {
  //             resolve(img);
  //           }}
  //           onError
  //           className={styles.image}
  //           style={{ ...bgStyles, backgroundImage: `url(${src})` }}
  //         ></div>
  //       );
  //     };
  //     img.addEventListener('load', () => {
  //       resolve(img);
  //     });
  //     img.addEventListener('error', error => reject(error));
  //     img.src = src;
  //   });
  // };

  return (
    <figure className={classNameStr} onLoad={() => image.classList.add('currentSlide')}>
      {!isLoaded && <Spinner />}
      <div id="image" className={`${styles.image} `} style={{ backgroundImage: `url(${src})` }}></div>
      <div className={styles.figcaption}>
        <div className={styles.figcaption__title}>
          <h3>{title}</h3>
        </div>
        <div className={styles.figcaption__description}>
          <p>{description}</p>
        </div>
      </div>
    </figure>
  );
}

Slide.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

Slide.defaultProps = {
  src: dummy,
  title: 'Slide',
  bgSize: 'cover',
};

export default Slide;
