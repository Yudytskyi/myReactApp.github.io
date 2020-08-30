import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.scss';

const Pagination = props => {
  const { currentPage, amountItemOnPage, maxAmountItem, setCurrentPage } = props;
  const numberOfLastButton = Math.ceil(maxAmountItem / amountItemOnPage);
  const numberOfMiddleButton =
    currentPage < 5 ? 5 : currentPage > numberOfLastButton - 4 ? numberOfLastButton - 4 : currentPage;
  const numberOfSecondButton = numberOfMiddleButton - 3;
  const arrButtonsNames = [];
  for (let i = 0; i < 7; i++) {
    arrButtonsNames.push(numberOfSecondButton + i);
  }
  return (
    <div className={styles.pagination}>
      <button onClick={() => setCurrentPage(1)}>1</button>
      {currentPage > 5 && <span className={styles.pagination__dots}>...</span>}
      {arrButtonsNames.map((button, id) => {
        return (
          <button onClick={() => setCurrentPage(button)} key={id}>
            {button}
          </button>
        );
      })}
      {currentPage < numberOfLastButton - 4 && <span className={styles.pagination__dots}>...</span>}
      <button onClick={() => setCurrentPage(numberOfLastButton)}>{numberOfLastButton}</button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  amountItemOnPage: PropTypes.number.isRequired,
  maxAmountItem: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
