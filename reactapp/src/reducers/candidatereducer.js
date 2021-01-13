const candidateReducer=(state=[],action)=>{
    switch(action.type){
        case 'update':
            state=action.payload
            return state;
        default:
            return state;
    }
}
export default candidateReducer;