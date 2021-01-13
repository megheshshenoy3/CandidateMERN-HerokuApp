import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
export default function Posts(props) {
  const candidate=useSelector(state=>state.Candidateinfo)
  let count=1
      if(props.loading){
          return <h3>Loading Data</h3>
      }
      else{
        return (
            <React.Fragment>
                {
                    candidate.map(eachcandidate=>{return(
                        <tr>
                        <td className="text_size">{count++}</td>
                        <td className="text_size">{eachcandidate.name}</td>
                        <td className="text_size">{eachcandidate.gender}</td>
                        <td className="text_size">{eachcandidate.experience}</td>
                        <td className="text_size">{eachcandidate.currentcompany}</td>
                        <td className="text_size">{eachcandidate.skillset}</td>
                        <td className="text_size">{eachcandidate.noticeperiod}</td>
                        <td className="text_size">{eachcandidate.evaluationfeedback}</td>
                        <td className="text_size">{eachcandidate.ctc}</td>
                        <td className="text_size">{eachcandidate.ectc}</td>
                        <td className="text_size">{ eachcandidate.createdDate.slice(0,10)}</td>
                        <td className="text_size">{eachcandidate.remarks}</td>
                   </tr>
                    )
                    })
                    
                }
                </React.Fragment>
        )
      }
  
    
}
