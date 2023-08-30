import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnlain, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnlain}
            id={id}
          />
        );
      })}
    </ul>
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
