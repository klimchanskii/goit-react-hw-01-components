import { FriendItem } from "./FriendItem"
import { List } from './FriendItme.styled'

export const FriendList = ({friends}) => {
    return (
        
        <List >
            {friends.map(({ avatar, name, isOnline, id }) => 
                <li  key={id}>
                    <FriendItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}/>
        </li>
        )}
        </List>
    )
}