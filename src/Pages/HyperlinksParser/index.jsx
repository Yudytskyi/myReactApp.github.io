import React, { useState } from 'react';
import LoadingForm from './LoadingForm';

import styles from './HyperlinksParser.module.scss';

const HyperlinksParser = () => {
  const [htmlText, setHtmlText] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [, setError] = useState(null);

  const regExpressionTagA = /<a\s.*?<\/a>/gi;
  const handleSubmit = ({ url }) => {
    void fetch(url, {
      method: 'GET',
      'Content-type': 'text/html',
    })
      .then(response => response.text())
      .then(data => data.match(regExpressionTagA))
      .then(setHtmlText)
      .catch(setError)
      .finally(setIsFetching(true));
  };
  const regExpressionLink = /(?<=href\s?=.*?(?<quote>['"]))(?<link>.*?)(?=\k<quote>>?)/;
  const regExpressionLabel = /(?<=>\s?).*?(?=<\s?\/a)/;

  return (
    <article className={styles.article}>
      <LoadingForm onSubmit={handleSubmit} />
      {isFetching && (
        <div className={styles.table}>
          <div className={styles.table__item}>
            <div className={styles.table__item_link}>Hyperlink value</div>
            <div className={styles.table__item_label}>Link label</div>
          </div>
          {[...htmlText].map((el, index) => (
            <div className={styles.table__item} key={index}>
              <div className={styles.table__item_link}>{el.match(regExpressionLink)}</div>
              <div className={styles.table__item_label}>{el.match(regExpressionLabel)}</div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
};

export default HyperlinksParser;
