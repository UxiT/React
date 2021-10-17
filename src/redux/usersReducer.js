const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS ";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_LOAD = "SET_LOAD";

// Settings

let initState = {
  users: [],
  pageSize: 3,
  totalUsersCount: null,
  currentPage: 1,
  isFetching: false,
};

// action creators

export const follow = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPage = (page) => ({ type: SET_PAGE, page: page });
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count: count });
export const setLoad = (isFetching) => ({ type: SET_LOAD, isFetching: isFetching });

const usersReducer = (state = initState, action) => {
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

    case SET_LOAD:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export default usersReducer;
