import React from 'react';
import UserListItem from './UserListItem';

const UsersList = props => {
  const { users } = props;

  const mapUser = ({
    email,
    name: { title: appeal, first: firstName, last: lastName },
    gender,
    picture: { large: srcPicture },
  }) => {
    return (
      <UserListItem
        key={email}
        email={email}
        appeal={appeal}
        firstName={firstName}
        lastName={lastName}
        gender={gender}
        srcPicture={srcPicture}
      />
    );
  };
  return <>{users.map(mapUser)}</>;
};

export default UsersList;
