import React, { useState } from 'react';
import LoadingForm from './LoadingForm';

import styles from './HyperlinksParser.module.scss';

const HyperlinksParser = () => {
  const [state, setState] = useState({
    error: null,
    htmlText: null,
    isFetching: false,
  });

  const handleSubmit = ({ url }) => {
    return fetch(url, {
      method: 'GET',
      'Content-type': 'text/html',
    })
      .then(response => response.text())
      .then(data => {
        setState({ ...state, htmlText: data });
      })
      .catch(error => {
        setState({ ...state, error });
      });
  };

  const parseHtmlText = str => {
    // const regExpression = /<[Aa]\s+.*?href\s*?=\s*?(?<quote>\\?['"])(?<hyperLinkValue>.*?)\k<quote>.*?>(?<content>.*?)<\/[Aa]\s?>/g;
    const regExpression = /(?:(?<=<a\s)(.+?)(?=<\/a>))?(?<=href=").*?(?=")|(?<=>)[^<>]+?(?=<\/a)/g;
    // const regExpression = /(?<=<\s?[a]\s+?).*?(?=<\s?\/a>)/g;

    return `${str}`.match(regExpression);
  };

  const { htmlText } = state;
  const res1 = [
    { link: 'https://adjg;odfhag', label: 'label' },
    { link: 'https://adjg;odfhag', label: 'label' },
    { link: 'https://adjg;odfhag', label: 'label' },
    { link: 'https://adjg;odfhag', label: 'label' },
    { link: 'https://adjg;odfhag', label: 'label' },
  ];

  return (
    <article>
      <a className="returnLink" href="/">
        ←
      </a>
      <LoadingForm onSubmit={handleSubmit} />
      {htmlText && (
        <table className={styles.table}>
          <thead className={styles.table__head}>
            <tr>
              <th>Hyperlink value</th>
              <th>Link label</th>
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            {res1.map(({ link, label }, index) => (
              <tr key={index}>
                <th>{link}</th>
                <th>{label}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {parseHtmlText(htmlText)}
    </article>
  );
};

export default HyperlinksParser;
