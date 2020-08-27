import React, { useState } from 'react';
import LoadingForm from './LoadingForm';

import styles from './HyperlinksParser.module.scss';

const HyperlinksParser = () => {
  const [htmlText, setHtmlText] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

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
  const regExpressionLink = /(?<=href\s?=.*?(?<quote>['"]))(?<link>.*?)(?=\k<quote>>)/g;
  const regExpressionLabel = /(?<=>\s?)(?<label>.*?)(?=<\s?\/a)/g;

  return (
    <article>
      <a className="returnLink" href="/">
        ←
      </a>
      <LoadingForm onSubmit={handleSubmit} />
      {isFetching && (
        <table className={styles.table}>
          <thead className={styles.table__head}>
            <tr>
              <th>Hyperlink value</th>
              <th>Link label</th>
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            {[...htmlText].map((el, index) => (
              <tr key={index}>
                <th>{el.match(regExpressionLink)}</th>
                <th>{el.match(regExpressionLabel)}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </article>
  );
};

export default HyperlinksParser;
