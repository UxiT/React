const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FRIENDS = "SET_FRIENDS ";

let initState={
    friends: [
        {id: 1, name: "Geralt", status: "Killing monsters", follow: false , location: {city: "Kaer Morhen", country: "North"}},
        {id: 2, name: "Triss" , status: "I'm a best witch in the North!", follow: false , location: {city: "Novigrad", country: "Temeria"}},
        {id: 3, name: "Ciri" , status: "My father is a jerk!", follow: false , location: {city: null, country: null}},
        {id: 4, name: "Dandelion" , status: "Check out my new ballad on spotify ", follow: false , location: {city: "Bokler", country: "Toussaint"}}
    ]
};


export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId}); 
export const setFriendsAc = (friends) => ({type: SET_FRIENDS, friends})

const friendsReducer = (state = initState, action) =>{
    switch (action) {

        case FOLLOW:
            return{
                ...state, 
                friends: [...state.friends.map(user => {
                    if(user.id == action.userId){
                        return {...user, follow: true}
                    }
                    return user;
                })]
            }

        case UNFOLLOW:
            return{
                ...state, 
                friends: [...state.friends.map(user => {
                    if(user.id == action.userId){
                        return {...user, follow: false}
                    }
                    return user;
                })]
            }

        case SET_FRIENDS:
            return{
                ...state,
                friends: [...state.friends, ...action.friends]
            }

        default:
            return state;
    }
}

export default friendsReducer