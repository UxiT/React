import { connect } from "react-redux";
import Friends from "./Friends";
import {followAC, unfollowAC, setFriendsAc} from '../../redux/friendsReducer'


let mapStateToProps = (state) =>{
    return{
        users: state.friendsPage.friends,
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setFriends: (friends)=>{
            setFriendsAc(friends)
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;