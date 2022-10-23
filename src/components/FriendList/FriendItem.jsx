import {Chip,Wrapper,Image,TextName } from './FriendItme.styled'
import PropTypes from 'prop-types'

export const FriendItem = ({ avatar, isOnline, name }) => {
    return ( 
        <Wrapper><Chip isOnline={isOnline}></Chip>
            <Image  src={avatar} alt="User avatar" width="48" />
            <TextName  >{ name}</TextName></Wrapper>)
}



FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}