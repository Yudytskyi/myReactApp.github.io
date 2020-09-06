import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from './../../api';
import styles from './UsersLoader.module.scss';

import UsersList from './UsersList';
import Spinner from '../../components/Spinner';
import Pagination from './Pagination';

const UsersLoader = props => {
  const { maxAmountItem, amountOfRows } = props;
  const [isFetching, setIsFetching] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [amountItemOnPage, setAmountItemOnPage] = useState(1);
  const [numberOfLastPage, setNumberOfLastPage] = useState(1);
  const [error, setError] = useState(null);
  useEffect(() => {
    const rootElement = document.getElementById('root');
    const amountOfColumns = Math.floor(rootElement.clientWidth / 381);
    setAmountItemOnPage(amountOfRows * amountOfColumns);
    setCurrentPage(1);
  }, []);
  useEffect(() => {
    setIsFetching(true);
    setNumberOfLastPage(Math.ceil(maxAmountItem / amountItemOnPage));
    getUsers({
      page: currentPage,
      results:
        currentPage < numberOfLastPage ? amountItemOnPage : maxAmountItem - (numberOfLastPage - 1) * amountItemOnPage,
    })
      .then(setUsers, setError)
      .finally(() => setIsFetching(false));
  }, [currentPage]);

  const handleNumberPage = num => {
    setCurrentPage(num);
  };

  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return <div className={styles.pageUsers__error}>{`${new Error(error)}`}</div>;
  }
  return (
    <>
      <div className={styles.pageUsers}>
        <UsersList users={users} />
        <Pagination currentPage={currentPage} setCurrentPage={handleNumberPage} numberOfLastPage={numberOfLastPage} />
      </div>
    </>
  );
};

UsersLoader.propTypes = {
  maxAmountItem: PropTypes.number,
  amountOfColumns: PropTypes.number,
};

UsersLoader.defaultProps = {
  maxAmountItem: 500,
  amountOfRows: 3,
};
export default UsersLoader;
