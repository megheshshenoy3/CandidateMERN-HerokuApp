import React from 'react'
import {Pagination} from "react-bootstrap"
export default function Paginations(props) {
    let totalpages=[];
    for(let i=0;i<(props.totalpost/props.numberperpost);i++)
    {
        totalpages.push(<Pagination.Item key={i} >
            {i}
          </Pagination.Item>,)
    }
    return (
        <div>
           <Pagination size="sm">
               {totalpages}
               </Pagination> 
        </div>
    )
}
