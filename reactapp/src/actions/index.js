export const increment =()=>{
    return{
        type:'INCREMENT'

    };
};

export const decrement=()=>{
    return{
        type:'DECREMENT'
    }
}
export const updatestate=(data)=>{
    return{
        type:'update',
        payload:data

    }
}