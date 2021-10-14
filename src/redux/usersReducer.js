const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS ";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initState = {
  users: [],
  pageSize: 3,
  totalUsersCount: null,
  currentPage: 1,
};

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersAc = (users) => ({ type: SET_USERS, users });
export const setPageAC = (page) => ({ type: SET_PAGE, page: page });
export const setTotalCountAC = (count) => ({ type: SET_TOTAL_COUNT, count: count });

const friendsReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((user) => {
            if (user.id === action.userId) {
              return { ...user, follow: true };
            }
            return user;
          }),
        ],
      };

    case UNFOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((user) => {
            if (user.id === action.userId) {
              return { ...user, follow: false };
            } else {
              return user;
            }
          }),
        ],
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };

    default:
      return state;
  }
};

export default friendsReducer;
