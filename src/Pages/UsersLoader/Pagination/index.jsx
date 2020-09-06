import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';
import classNames from 'classnames';

const Pagination = props => {
  const { currentPage, setCurrentPage, numberOfLastPage } = props;
  const countPaginationButtons = numberOfLastPage > 8 ? 9 : numberOfLastPage;
  const arrButtonsNames = new Array(countPaginationButtons);

  arrButtonsNames.fill(1).forEach((el, i, arr) => {
    if (countPaginationButtons < 9 || currentPage <= 5) {
      arr[i] = i + 1;
    } else {
      if (numberOfLastPage - currentPage >= 5) {
        arr[i] = currentPage - 4 + i;
      } else {
        arr[i] = numberOfLastPage - 8 + i;
      }
    }
  });

  const classNameStr = id =>
    classNames(styles.button, {
      [styles.active]: id === currentPage,
    });

  return (
    <div className={styles.pagination}>
      <button className={styles.button} onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        {'|<'}
      </button>
      <button className={styles.button} onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>
        {'<<'}
      </button>
      {arrButtonsNames.map((button, id) => {
        return (
          <button className={classNameStr(button)} onClick={() => setCurrentPage(button)} key={id}>
            {button}
          </button>
        );
      })}
      <button
        className={styles.button}
        onClick={() => setCurrentPage(prev => prev + 1)}
        disabled={currentPage === numberOfLastPage}
      >
        {'>>'}
      </button>
      <button
        className={styles.button}
        onClick={() => setCurrentPage(numberOfLastPage)}
        disabled={currentPage === numberOfLastPage}
      >
        {'>|'}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  numberOfLastPage: PropTypes.number.isRequired,
};

export default Pagination;
