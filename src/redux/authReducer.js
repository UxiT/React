const SET_USER = "SET_USER"
const SET_FORM = "SET_FORM"
const IS_TOKEN = "IS_TOKEN"
const LOGOUT = "LOGOUT"

let initState = {
    userId: null,
    username: null,
    logged_in: false,
}


export const setUser = (data) => ({type: SET_USER, data: data})
export const setForm = (form) => ({type: SET_FORM, form: form})
export const isToken = () => ({type: IS_TOKEN})
export const logout = () => ({type: LOGOUT})

// set current user's username and id to store

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case SET_USER:
            return({
                ...state,
                username: action.data.username,
                userId: action.data.id,
                logged_in: true,
                displayed_form: "",
            });
        
        case SET_FORM:
            return({
                ...state,
                displayed_form: action.form,
            })

        case IS_TOKEN:{
            return({
                ...state,
                logged_in: true
            })
        }
        case LOGOUT:
            return({
                ...state,
                username: null,
                userId: null,
                logged_in: false,
                displayed_form: ""
            })

        default:
            return state
    }
}


export default authReducer