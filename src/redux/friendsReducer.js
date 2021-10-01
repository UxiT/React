

let initState={
    friends: [
        {id: 1, name: "Geralt"},
        {id: 2, name: "Triss"},
        {id: 3, name: "Ciri"},
        {id: 4, name: "Dandelion"}
    ]
};

const friendsReducer = (state = initState, action) =>{
    return state;
}

export default friendsReducer