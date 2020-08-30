import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './UserListItem.module.scss';

const UserListItem = props => {
  const { email, appeal, firstName, lastName, gender, srcPicture } = props;
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = () => {
    setIsSelected(!isSelected);
  };
  const classNameStr = classNames(styles.item, {
    [styles.isSelected]: isSelected,
    [styles.gender]: gender === 'female',
  });

  return (
    <div className={classNameStr} style={styles} onClick={handleSelected}>
      <img
        className={styles.item__image}
        src={srcPicture}
        alt={`${appeal} ${firstName} ${lastName}`}
        title={`${appeal} ${firstName} ${lastName}`}
      />
      <span className={styles.item__fullName}>
        {appeal} {firstName} {lastName}
      </span>
      <span className={styles.item__email}>{email}</span>
    </div>
  );
};

export default UserListItem;
