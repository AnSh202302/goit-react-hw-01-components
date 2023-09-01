import { FriendListItemStyled, IsOnlineStatus } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemStyled>
      <IsOnlineStatus $isOnline={isOnline}></IsOnlineStatus>
      <img className="" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendListItemStyled>
  );
};
