import React, { Component } from 'react';
// import { string } from 'yup';
import LoadingForm from './LoadingForm';

import styles from './HyperlinksParser.module.scss';

class HyperlinksParser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      htmlText: '',
      isFetching: false,
    };
  }

  loadHtmlText = url => {
    return fetch(url, {
      method: 'GET',
      'Content-type': 'text/html',
    })
      .then(response => response.text())
      .then(data => {
        this.setState({
          htmlText: data,
        });
      })
      .catch(error => {
        this.setState({
          error,
        });
      });
  };

  handleSubmit = ({ url }) => {
    this.loadHtmlText(url);
  };

  parseHtmlText = str => {
    // const regExpression = /<[Aa]\s+.*?href\s*?=\s*?(?<quote>\\?['"])(?<hyperLinkValue>.*?)\k<quote>.*?>(?<content>.*?)<\/[Aa]\s?>/g;
    // const regExpression = /(?:(?<=<a\s)(.+?)(?=<\/a>))?(?<=href=").*?(?=")|(?<=>)[^<>]+?(?=<\/a)/g;
    const regExpression = /(?<=<\s?[a]\s+?).*?(?=<\s?\/a>)/g;
    const result = str.match(regExpression);
    // const result1 = result.keys();
    // const [, b, c] = result;
    console.dir(result);
    return result;
    // return str.match(
    //   /<[Aa]\s+.*?href\s*?=\s*?(?<quote>\\?['"])(?<hyperLinkValue>.*?)\k<quote>.*?>(?<content>.*?)<\/[Aa]\s?>/g
    // );
    // return str.match(/(?:(?<=<a\s)(.+?)(?=<\/a>))?(?<=href=").*?(?=")|(?<=>)[^<>]+?(?=<\/a)/g);
  };

  render() {
    const { htmlText } = this.state;
    return (
      <article>
        <a className="returnLink" href="/">
          ←
        </a>
        <LoadingForm onSubmit={this.handleSubmit} />
        <section>
          YOUR CODE HERE
          <h1>HTML</h1>
          {/* {this.parseHtmlText(htmlText)[1].map((el, index) => {
            return (
              <p key={index} className={styles.hyperLink}>
                {el}
              </p>
            );
          })} */}
          {this.parseHtmlText(htmlText)}
        </section>
      </article>
    );
  }
}

export default HyperlinksParser;
