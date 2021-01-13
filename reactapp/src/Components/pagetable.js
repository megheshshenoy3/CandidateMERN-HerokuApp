import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch}  from 'react-redux';
import { saveAs } from 'file-saver';
import {Table} from 'react-bootstrap'
import './pagetable.css';
import { updatestate }  from '../actions/index';
import swal from 'sweetalert';
import { MDBDataTable } from 'mdbreact';
import Posts from './pagination/posts';
import Pagination from './pagination/Pagination';
import UpdateModal from './updatemodal'
import axios from 'axios';
import XLSX from 'xlsx'
export default function Pagetable(props) {
   var [postperpage,changepostperpage]=useState(10);
   var [totalpost,changetotalnumberofpost]=useState(props.lengthofobj);
   var [currentpage,changecurrentpage]=useState(1);
   var [startindex,changestartindex]=useState(1);
   var [lastindex,changelastindex]=useState();
   var [idtomodal,changeidtomodal]=useState();
   var [modalvisble,changemodalvisible]=useState(false);
   var posts=useSelector(state=>state.Candidateinfo)
   var datatable=[]
   var datatoxlxs=[]

useEffect(() => {
   let lastindexpost=currentpage*postperpage;
   let firstindexpost=lastindexpost-postperpage;
   changestartindex(firstindexpost)
   changelastindex(lastindexpost)
}, [])

 const passUpdateEvent=(typeofopp,idofcand)=>{
   changeidtomodal(idofcand);
   changemodalvisible(true);
  
}
const dispatch= useDispatch();
let datacand=useSelector((state=>state.Candidateinfo))
const passdeleteEvent=(name,id)=>{
  let newcandidatedatatoredux=[]
   swal(`Are You Sure? ${name} record will be Deleted!`)
   .then((value) => {
     if(value){
       axios.delete(`/updatedelete/delete/${id}`).then(res=>{
        swal({
          title: "Successfull!",
          text: "Record Deleted!",
          icon: "success",
          button: "Ok!",
        });
        datacand.map(eachitem=>{
          if(eachitem._id!=id){
            newcandidatedatatoredux.push(eachitem)
          }
        })
        dispatch(updatestate(newcandidatedatatoredux));
       })
     }
  });
  console.log(name)
  console.log(id)
}
const Closemodal=()=>{
  changemodalvisible(false);
}
const downloadfunc=()=>{
  saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}),'CandidateInformation.xlsx');
}
let skillset=[]
let j=1;
posts.map(eachitem=>
  {
    if(eachitem.skillset.length==1){
      skillset.push(j+")"+eachitem.skill+" ")
    }
    else{
      eachitem.skillset.map(item=>{

      })
    }
    datatable.push({
      name:eachitem.name,
      gender:eachitem.gender,
      currentcompany:eachitem.currentcompany,
      skillset:eachitem.skillset.join(" "),
      experience:eachitem.experience,
      noticeperiod:eachitem.noticeperiod,
      evaluationfeedback:eachitem.evaluationfeedback,
      ctc:eachitem.ctc.$numberDecimal,
      ectc:eachitem.ectc.$numberDecimal,
      remarks:eachitem.remarks,
      createdDate:eachitem.createdDate.split(' ').join('-'),
      editdelete:<center><span onClick={() => {passUpdateEvent("update",eachitem._id)}}> <i className="fa fa-edit" ></i></span>{' '}|{' '}<span onClick={() => {passdeleteEvent(eachitem.name,eachitem._id)}}><i className="fas fa-trash-alt"></i></span></center>
    })
    datatoxlxs.push({
      Name:eachitem.name,
      Gender:eachitem.gender,
      CurrentCompany:eachitem.currentcompany,
      Skillset:eachitem.skillset.join(" "),
      Experience:eachitem.experience,
      NoticePeriod:eachitem.noticeperiod,
      EvaluationFeedback:eachitem.evaluationfeedback,
      CTC:eachitem.ctc.$numberDecimal,
      ECTC:eachitem.ectc.$numberDecimal,
      Remarks:eachitem.remarks,
      CreatedDate:eachitem.createdDate.split(' ').join('-'),
    })
})
       var wb = XLSX.utils.book_new();
        wb.Props = {
                Title: "SheetJS Tutorial",
                Subject: "Test",
                Author: "Meghesh Shenoy",
                CreatedDate: new Date(2020,8,30)
        };
        wb.SheetNames.push("Candidate Information");
        var ws = XLSX.utils.json_to_sheet(datatoxlxs);
        wb.Sheets["Candidate Information"] = ws;
        var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});
        function s2ab(s) {
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
        }
        const sendEmail=(e)=>{
           Email.send({
            Host: "smtp.gmail.com",
            Username : "<sender’s email address>",
            Password : "<email password>",
            To : e.target.elements.emailtosend.value,
            From : "<sender’s email address>",
            Subject:"<email subject>",
            Body : "<email body>",
          })
          .then(function(message){
            alert("mail sent successfully")
          });
        }

  let data = {
    columns: [{
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Gender',
        field: 'gender',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Current Company',
        field: 'currentcompany',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Experience',
        field: 'experience',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Evaluation Feedback',
        field: 'evaluationfeedback',
        sort: 'asc',
        width: 150
      },
      {
        label: 'CTC',
        field: 'ctc',
        sort: 'asc',
        width: 150
      },
      {
        label: 'ECTC',
        field: 'ectc',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Remarks',
        field: 'remarks',
        sort: 'asc',
        width: 150
      },
      {
        label: 'SkillSet',
        field: 'skillset',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Notice Period',
        field: 'noticeperiod',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Created Date',
        field: 'createdDate',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Edit/Delete',
        field: 'editdelete',
        sort: 'asc',
        width: 150
      },
    ],
    rows: datatable
   }
let candidatedata=useSelector(state=>state.Candidateinfo)

    return (
      <div>
        <div  className="table_position">
{modalvisble?<UpdateModal  show={modalvisble} data={candidatedata} idpass={idtomodal} onClose={()=>{Closemodal()}}/>:false}
<MDBDataTable responsive
striped
bordered
small
  paging={true}
  data={data}
/>
<button onClick={downloadfunc}> Download</button>
<form>
  <input type="email" name="emailtosend" ></input>
  <button type="submit" />
</form>
</div>
        </div>
    )
}

