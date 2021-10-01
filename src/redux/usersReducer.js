
let initState = {
    users:[
        {id: 1, name: "John Doe", img: "https://bit.ly/3BUJXdi"},
        {id: 2, name: "Geralt of Rivia", img: "https://bit.ly/3tDkkLf"},
        {id: 3, name: "Triss Merigold", img: "https://bit.ly/3yWQ8vx"},
        {id: 4, name: "Ciri", img: "https://bit.ly/3BUfXhz"},
        {id: 5, name: "Dandelion", img: "https://bit.ly/38P2dIz"}
    ]
};

const usersReducer = (state = initState, action) =>{
    return state;
}

export default usersReducer;