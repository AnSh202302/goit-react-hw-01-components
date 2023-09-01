import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendListStyled } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        );
      })}
    </FriendListStyled>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
    })
  ),
};
