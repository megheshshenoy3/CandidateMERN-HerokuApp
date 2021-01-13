// import React, { useEffect, useState } from 'react'
// import './updatemodel.css'
// import { useSelector, useDispatch } from 'react-redux';
// import swal from 'sweetalert';
// import { updatestate }  from '../actions/'; 
// import axios from 'axios';
// import moment from 'moment'
// import { Modal, Button, Row, Col, Dropdown,Accordion,Card,Nav } from 'react-bootstrap'
// export default function Updatemodal(props) {
//   var [names, changename] = useState();
//   var [genders, changegender] = useState();
//   var [currentcompanys, changecurrentcompany] = useState();
//   var [skillsets, changeskillset] = useState();
//   var [experiences, changeexperience] = useState();
//   var [noticeperiods, changenoticeperiod] = useState();
//   var [evaluationfeedbacks, changeevaluationfeedback] = useState();
//   var [ctcs, changectc] = useState();
//   var [ectcs, changeectc] = useState();
//   var [remarkss, changeremarks] = useState();
//   var [duplicaterecords, changeduplicate] = useState()
//   var [namevalid, changenamevalid] = useState(false);
//   var candidateduplicate = {}
//   var candidatedata = props.data
//   const dispatch = useDispatch()
//   useEffect(() => {
//     console.log("-------><--------" + props.data)
//     console.log("props" + props.idpass)
//     candidatedata.map(result => {
//       if (result._id == props.idpass) {
//         changename(result.name)
//         changegender(result.gender)
//         changecurrentcompany(result.currentcompany)
//         changeskillset(result.skillset)
//         changeexperience(result.experience)
//         changenoticeperiod(result.noticeperiod)
//         changeevaluationfeedback(result.evaluationfeedback)
//         changectc(result.ctc.$numberDecimal)
//         changeectc(result.ectc.$numberDecimal)
//         changeremarks(result.remarks)
//         localStorage.setItem("name", result.name);
//         localStorage.setItem("gender", result.gender);
//         localStorage.setItem("currentcompany", result.currentcompany);
//         localStorage.setItem("skillset", result.skillset);
//         localStorage.setItem("experience", result.experience);
//         localStorage.setItem("noticeperiod", result.noticeperiod);
//         localStorage.setItem("evaluationfeedback", result.evaluationfeedback);
//         localStorage.setItem("ctc", result.ctc);
//         localStorage.setItem("ectc", result.ectc);
//         localStorage.setItem("remarks", result.remarks);
//       }
//       console.log(result)
//     })
//   }, [])
//   const nametextChange = (e) => {
//     changename(e.target.value)
//     console.log("yyyy", e.target.value)
//     nametextvalid(e.target.value)
//     //alert(typeof this.props.candidateinfo)
//   }
//   const nametextvalid = (word) => {
//     let letters = /^[a-zA-Z ]{2,30}$/;
//     console.log("func", word)
//     let text = word;
//     letters.test(word) ? changenamevalid(false) : changenamevalid(true)
//   }
//   const handleDropdown = (evtKey, evt) => {
//     console.log(evtKey);
//     changegender(evtKey)
//   }
//   const remarksfunc = (e) => {
//     changeremarks(e.target.value)
//   }
//   const experiencefunc = (e) => {
//     changeexperience(e.target.value)
//   }
//   const currentcompanyfunc = (e) => {
//     changecurrentcompany(e.target.value)
//   }
//   const skillsetfunc = (e) => {
//     changeskillset(e.target.value)
//   }
//   const noticeperiodfunc = (e) => {
//     changenoticeperiod(e.target.value)
//   }
//   const evaluationfeedbackfunc = (e) => {
//     changeevaluationfeedback(e.target.value)
//   }
//   const ctcfunc = (e) => {
//     changectc(e.target.value)
//   }
//   const ectcfunc = (e) => {
//     changeectc(e.target.value)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     console.log("|||||||-" + e.target.elements.nameofcand.value);
//     let newcandidate = {
//       name: names,
//       gender: genders,
//       currentcompany: currentcompanys,
//       skillset: skillsets,
//       experience: experiences,
//       noticeperiod: noticeperiods,
//       evaluationfeedback: evaluationfeedbacks,
//       ctc: ctcs,
//       ectc: ectcs,
//       remarks: remarkss
//     }
//     console.log("NNN" + newcandidate.name)
//     let url = `http://localhost:5000/updatedelete/update/${props.idpass}`
//     console.log(url)
//     console.log(names)
//     console.log(genders)
//     console.log(currentcompanys)
//     console.log(skillsets)
//     console.log(experiences)
//     console.log(noticeperiods)
//     console.log(evaluationfeedbacks)
//     console.log(ctcs)
//     console.log(ectcs)
//     axios.put(url,{
//       name: names,
//       gender: genders,
//       currentcompany: currentcompanys,
//       skillset: skillsets,
//       experience: experiences,
//       noticeperiod: noticeperiods,
//       evaluationfeedback: evaluationfeedbacks,
//       ctc: ctcs,
//       ectc: ectcs,
//       remarks: remarkss
//     })

//       .then(res => {
//         swal({
//           title: "Good job!",
//           text: " Record Updated Succesfully!",
//           icon: "success",
//           timer: 300000
//         }).then(() => { props.onClose() })
//         console.log("ResultPost" + res);
//         candidatedata.map(result=>{
//           if (result._id == props.idpass) {
//             // changename(result.name)
//             // changegender(result.gender)
//             // changecurrentcompany(result.currentcompany)
//             // changeskillset(result.skillset)
//             // changeexperience(result.experience)
//             // changenoticeperiod(result.noticeperiod)
//             // changeevaluationfeedback(result.evaluationfeedback)
//             // changectc(result.ctc)
//             // changeectc(result.ectc)
//             // changeremarks(result.remarks)
//             result.name=names
//             result.gender=genders
//             result.currentcompany=currentcompanys
//             result.skillset=skillsets
//             result.experience=experiences
//             result.noticeperiod=noticeperiods
//             result.evaluationfeedback=evaluationfeedbacks
//             result.ctc=ctcs
//             result.ectc=ectcs
//             result.remarks=remarkss
//             console.log("Console"+result.name)
//             dispatch(updatestate(candidatedata))
//           }
//           console.log(result)
//         })
        


//       })
//       .catch(function (error) {
//         swal({
//           title: "OOPS!An error occured",
//           text: "Cannot Add now Please try Again Later!",
//           icon: "error",
//           timer: 300000
//         });
//       });

//   }
//   return (
//     <div>

//       <Modal show={props.show} onHide={props.onClose} size="lg">
//         <form onSubmit={handleSubmit}>
//           <Modal.Header closeButton>
//             <Modal.Title>Update Information</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <center>
//               <div className="form_styles">
//                 <Row>
//                   <Col sm={4}>
//                     <Col >
//                       <label className="label_text">Name:</label>
//                     </Col>
//                     <Col>
//                       <input type="text" className="text_box" name="nameofcand" onChange={(e) => { nametextChange(e) }} value={names} placeholder="Enter Name" required />
//                       {namevalid ? <p className="error_text">Enter Name in Valid Format</p> : <p></p>}
//                     </Col>
//                   </Col>
//                   <Col sm={4}>
//                     <Col>
//                       <label className="remarks_text">Remarks:</label>
//                     </Col>
//                     <Col>
//                       <input type="text" className="text_box" onChange={remarksfunc} placeholder="Enter Remarks" value={remarkss} name="remarks" />
//                     </Col>
//                   </Col>
//                   <Col sm={4}>

//                     <Col>
//                       <label className="experience_text" >Experience:</label>
//                     </Col>
//                     <Col >
//                       <input type="text" className="text_box" placeholder="Experience" onChange={experiencefunc} value={experiences} name="experience" required />
//                     </Col>

//                   </Col>
//                 </Row>
//                 <br></br>
//                 <Row>

//                   <Col sm={4}>
//                     <Col><label className="currentcompany_text">Current&nbsp;Company:</label></Col>
//                     <Col><input type="text" className="text_box" required placeholder="Current Company" onChange={currentcompanyfunc} value={currentcompanys} name="currentcompany" /> </Col>
//                   </Col>
                  
//                   <Col sm={4}>
//                     <Col>
//                       <label className="noticeperiod_text">Notice&nbsp;Period:</label>
//                     </Col>
//                     <Col>
//                       <input type="text" className="text_box" placeholder="Enter NoticePeriod" onChange={noticeperiodfunc} value={noticeperiods} name="noticeperiod" />
//                     </Col>
//                   </Col>
//                   <Col sm={4}>
//                     <Col>
//                       <label className="evaluationfeedback_text">Evaluation Feedback:</label>
//                     </Col>
//                     <Col>
//                       <input type="text" className="text_box" placeholder="Enter Evaluation Feedback" onChange={evaluationfeedbackfunc} value={evaluationfeedbacks} name="evaluationfeedback" />
//                     </Col>
//                   </Col>
//                 </Row>
//                 <br />
//                 <Row>
//                   <Col sm={4}>
//                     <Col>
//                       <label className="ctc_text">CTC:</label>
//                     </Col>
//                     <Col>
//                       <input type="text" className="text_box" onChange={ctcfunc} value={ctcs} placeholder="Enter CTC" name="ctc" />
//                     </Col>
//                   </Col>
//                   <Col sm={4}>
//                     <Col>
//                       <label className="ectc_text">ECTC:</label>
//                     </Col>
//                     <Col>
//                       <input type="text" className="text_box" onChange={ectcfunc} value={ectcs} placeholder="Enter ECTC" name="ectc" />
//                     </Col>
//                   </Col>
//                   <Col sm={4}>
//                     <Dropdown  className="dropdown_class" onSelect={handleDropdown} >
//                       <Dropdown.Toggle style={{ "width": "180px" }} variant="secondary" id="dropdown-basic">
//                         {genders}
//                       </Dropdown.Toggle>
//                       <Dropdown.Menu>
//                         <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
//                         <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
//                         <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
//                       </Dropdown.Menu>
//                     </Dropdown>
//                   </Col>
//                 </Row><br />
//                 <Row>
                  
//                   <Col sm={4}>
//                     <Col><label className="skillset_text">Skill&nbsp;Sets:</label></Col>
//                     <Col><input type="text" className="text_box" onChange={skillsetfunc} required placeholder="Enter SkillSet" value={skillsets} name="skillset" /></Col>
//                   </Col>
//                   <Col sm={4}>
//                   <Accordion defaultActiveKey="0">
                 
//   <Card>
//     <Card.Header>
//       <Accordion.Toggle as={Button} variant="link" eventKey="0">
//         Click me!
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//       <Card.Body>Hello! I'm the body</Card.Body>
//     </Accordion.Collapse>
//   </Card>
  
//   </Accordion>
//   </Col>
//                 </Row>
//               </div>
//             </center>
//             <Nav variant="tabs" defaultActiveKey="/home">
//   <Nav.Item>
//     <Nav.Link eventKey="link-2" >Active</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="link-1">Option 2</Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link eventKey="disabled" disabled>
//       Disabled
//     </Nav.Link>
//   </Nav.Item>
// </Nav>

//           </Modal.Body>
//           <Modal.Footer>
            // <Button variant="secondary" onClick={props.onClose}>
            //   Close
            //         </Button>
            // {
            //   (!namevalid && names != localStorage.getItem("name") )|| genders != localStorage.getItem("gender") || skillsets != localStorage.getItem("skillset") || currentcompanys != localStorage.getItem("currentcompany") || experiences != localStorage.getItem("experience") || noticeperiods != localStorage.getItem("noticeperiod") || evaluationfeedbacks != localStorage.getItem("evaluationfeedback") || ctcs != localStorage.getItem("ctc") || ectcs != localStorage.getItem("ectc") || remarkss != localStorage.getItem("remarks") ? <button type="submit" className="btn btn-primary">Save Changes</button> : <button type="submit" className="btn btn-secondary" disabled>Save Changes</button>

            // }

//           </Modal.Footer>
//         </form>
//       </Modal>

//     </div>
//   )
// }update 1.0
///New Update 1.1
import React,{useState,useEffect} from 'react'
import './updatemodel.css';
import axios from 'axios'
import swal from 'sweetalert';
import { updatestate }  from '../actions/'; 
import {useSelector,useDispatch}  from 'react-redux';
import {Row,Col,Button,Modal,Dropdown,DropdownButton} from 'react-bootstrap'
import { relativeTimeRounding } from 'moment';
export default function Updatemodal(props) {
  var[programmingskill,Changeprogskill]=useState()
  var [databaseskill,Changedatabaseskill]=useState()
  var [nontechnicalskill,Changenontechskill]=useState()
  var [selectedskill,ChangeSelectedskill]=useState();
  var[showfirstblock,Changes1stshow]=useState(true);
  var[showsecondblock,Change2ndshow]=useState(true);
  var [varofchange,changevar]=useState(true)
  var [showthirdblock,Change3rdshow]=useState(true);
  var [datatodisplay,changedisplaydata]=useState();
  //var [dataoption,changedataoption]=useState();
  var [namevalid, changenamevalid] = useState(false);
  var [name,Changename]=useState()
  var [skillsets,ChangeSkillSet]=useState([])
  var [experience,Changeexperience]=useState()
  var [ctc,Changectc]=useState()
  var [currentcompany,Changecurrentcompany]=useState()
  var [evaluationfeedback,Changeevaluafeedback]=useState()
  var [ectc,Changeectc]=useState()
  var [noticeperiod,Changenoticeperiod]=useState()
  var [remarks,Changeremarks]=useState()
  var [scripting,changescript]=useState(["WebDesigning","Javascript","PHP","NodeJs","ReactJs","AngularJs","VueJs","Django","ExpressJs","Java","Ruby","Pearl","Python","HTML","CSS"]);
  var [database,changedatabase]=useState(["MongoDb","MySQL","MariaDb","IndexedDB","PostgressSql",""])
  var [nontechnical,changenontechnical]=useState(["Singing","Dancing","Comedian","Cooking"]);
  var[genders,changegender]=useState("Gender")
  let [dataoption,changedataoption]=useState(<Dropdown.Item href="#/action-1" disabled>No Choice</Dropdown.Item>)
  const data = useSelector(state => state.Candidateinfo)
  const dispatch = useDispatch();
 
  var firstdeg="up";
  useEffect(() => {
    console.log("--")
    console.log()
    if(data.length==1){
      changedisplaydata(data)
    }
    else if(data.length!=0 && data.length>1)
    {
      data.map(eachitem=>{
       if(eachitem. _id==props.idpass){
        Changename(eachitem.name);
        changegender(eachitem.gender);
        Changeectc(eachitem.ectc.$numberDecimal);
        Changectc(eachitem.ctc.$numberDecimal);
        ChangeSkillSet(eachitem.skillset);
        Changeremarks(eachitem.remarks);
        Changeexperience(eachitem.experience)
        Changeevaluafeedback(eachitem.evaluationfeedback);
        Changecurrentcompany(eachitem.currentcompany)
        Changenoticeperiod(eachitem.noticeperiod)

        localStorage.setItem("name", eachitem.name);
        localStorage.setItem("gender", eachitem.gender);
        localStorage.setItem("currentcompany", eachitem.currentcompany);
        localStorage.setItem("skillset", eachitem.skillset);
        localStorage.setItem("experience", eachitem.experience);
        localStorage.setItem("noticeperiod", eachitem.noticeperiod);
        localStorage.setItem("evaluationfeedback", eachitem.evaluationfeedback);
        localStorage.setItem("ctc", eachitem.ctc.$numberDecimal);
        localStorage.setItem("ectc", eachitem.ectc.$numberDecimal);
        localStorage.setItem("remarks", eachitem.remarks);


       }
      })
      console.log(datatodisplay)
    }
  }, [])
      const remarksfunc = (e) => {
        Changeremarks(e.target.value)
      }
      const experiencefunc = (e) => {
        Changeexperience(e.target.value)
      }
      const currentcompanyfunc = (e) => {
        Changecurrentcompany(e.target.value)
      }
      const skillsetfunc = (e) => {
        ChangeSkillSet(e.target.value)
      }
      const noticeperiodfunc = (e) => {
        Changenoticeperiod(e.target.value)
      }
      const evaluationfeedbackfunc = (e) => {
        Changeevaluafeedback(e.target.value)
      }
      const ctcfunc = (e) => {
        Changectc(e.target.value)
      }
      const ectcfunc = (e) => {
        Changeectc(e.target.value)
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log("|||||||-" + e.target.elements.nameofcand.value);
        console.log(skillsets)
        let newcandidate = {
          name: name,
          gender: genders,
          currentcompany: currentcompany,
          skillset:skillsets,
          experience: experience,
          noticeperiod: noticeperiod,
          evaluationfeedback: evaluationfeedback,
          ctc: ctc,
          ectc: ectc,
          remarks: remarks
        }
        console.log("NNN" + newcandidate.name)
        let url = `/updatedelete/update/${props.idpass}`
        console.log(url)
        console.log(name)
        console.log(genders)
        console.log(currentcompany)
        console.log(skillsets)
        console.log(experience)
        console.log(noticeperiod)
        console.log(evaluationfeedback)
        console.log(ctc)
        console.log(ectc)
        axios.put(url,{
          name: name,
          gender: genders,
          currentcompany: currentcompany,
          skillset: skillsets,
          experience: experience,
          noticeperiod: noticeperiod,
          evaluationfeedback: evaluationfeedback,
          ctc: ctc,
          ectc: ectc,
          remarks: remarks
        })
    
          .then(res => {
            swal({
              title: "Good job!",
              text: " Record Updated Succesfully!",
              icon: "success",
              timer: 300000
            }).then(() => { props.onClose() })
            console.log("ResultPost" + res);
            data.map(result=>{
              if (result._id == props.idpass) {
                result.name=name
                result.gender=genders
                result.currentcompany=currentcompany
                result.skillset=skillsets
                result.experience=experience
                result.noticeperiod=noticeperiod
                result.evaluationfeedback=evaluationfeedback
                result.ctc.$numberDecimal=ctc
                result.ectc.$numberDecimal=ectc
                result.remarks=remarks
                console.log("Console"+result.name)
                dispatch(updatestate(data))
              }
              console.log(result)
            })
          })
          .catch(function (error) {
            swal({
              title: "OOPS!An error occured",
              text: "Cannot Add now Please try Again Later!",
              icon: "error",
              timer: 300000
            });
          });
    
      }
  const nametextChange = (e) => {
        Changename(e.target.value)
        console.log("yyyy", e.target.value)
        nametextvalid(e.target.value)
      }
   const nametextvalid = (word) => {
        let letters = /^[a-zA-Z ]{2,30}$/;
        console.log("func", word)
        let text = word;
        letters.test(word) ? changenamevalid(false) : changenamevalid(true)
      }
  const firstblocfunc=()=>{
    Changes1stshow(!showfirstblock);
  }
 const handleDropdown=(evtKey,evt)=>{
  changegender(evtKey)
 }
 const handletypedropdown=(evtKey, evt)=>{
  console.log(evtKey)
  let typeofoption=" ";
  if(evtKey=="Programming"){
      console.log("-->")
      typeofoption=scripting; 
  }
  else if(evtKey=="Databases"){
      console.log("<--")
      typeofoption=database
  }
  else if(evtKey=="NonTechnical"){
      console.log("<-->")
      typeofoption=nontechnical
  }
  ChangeSelectedskill(typeofoption)
   changedataoption(typeofoption.map(ele=>{
          if(skillsets.includes(ele)==false){
              return(<Dropdown.Item  eventKey={ele}>{ele}</Dropdown.Item>)
          }
      }));
  

}
 const addnewskill=(evtKey,evt)=>{
  let skill=skillsets;
  skill.push(evtKey)
  ChangeSkillSet(skill)
  changevar(({varofchange})=>({varofchange:!varofchange}))
  console.log("newskill"+skillsets)
  changedataoption(selectedskill.map(ele=>{
    if(skillsets.includes(ele)==false){
        return(<Dropdown.Item  eventKey={ele}>{ele}</Dropdown.Item>)
    }
}));
 }
 const removeskill=(skilltoremove)=>{
  console.log("Call MAde"+skilltoremove)
  console.log(skilltoremove)
  console.log("---"+skillsets)
  let skill=skillsets;
  let newskillset=[]
  let indexofelement=skill.indexOf(skilltoremove)
  console.log("NewSet"+newskillset)
  var filtered = skill.filter(function(value, index, arr){ return value !=skilltoremove;});
  newskillset=filtered
  ChangeSkillSet(newskillset)
}
 const changeicon=()=>{
  
 }
  return (
    <Modal show={props.show} onHide={props.onClose} size="lg">
         <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Update Information</Modal.Title>
        </Modal.Header>
        <Modal.Body >
         
          <div className="updateclass" >
          <div style={{"display":"flex"}}>
         <span onClick={()=>{firstblocfunc();changeicon()}}><i className="fa fa-angle-down "  aria-hidden="true"></i></span>&nbsp;&nbsp;
          <p>Personal Information</p>
          </div>
          {
          showfirstblock?(
          <Row>
            <Col sm={4}>
                 <Col sm={4}>
                   <label>Name</label>
                 </Col>
                 <Col sm={12}>
                 <input type="text" onChange={nametextChange} value={name}/>
                 </Col>
            </Col>
            <Col sm={1}></Col>

            <Col sm={4}>
            <Dropdown  className="dropdown_class" onSelect={handleDropdown} >
                      <Dropdown.Toggle style={{ "width": "180px" }} variant="secondary" id="dropdown-basic">
                        {genders}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                        <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
                        <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
            </Col>
            
          </Row>):false}
         
          <hr></hr>
          {/* 2nd block */}
          <div style={{"display":"flex"}}>
         <span onClick={()=>Change2ndshow(!showsecondblock)}> <i class="fa fa-angle-down" aria-hidden="true"></i></span>&nbsp;&nbsp;
          <p>Carrer Information</p>
          </div>
          {showsecondblock?
          <>
           <Row>
          <Col sm={12}>
                <Col sm={6}>
                     <label>Current&nbsp;Company</label> 
                </Col>
                <Col sm={12}>
                    <input type="text" className="generalwidth_text" onChange={(e)=>{currentcompanyfunc(e)}} value={currentcompany} />
               </Col>
          </Col>
          <Col sm={12}>
            <Col sm={6}>
              <label>Skill&nbsp;Sets</label>
            </Col>
            <div className="displayskill_block">
            {
            skillsets.length==0?<p className="warning_text">The Candidate presents No Skills Or Not Added</p>:skillsets.length==1?<><br/><span className="padding_block">{skillsets[0]}&nbsp;<span  onClick={()=>{removeskill(skillsets[0])}}><i class="fa fa-times" aria-hidden="true"></i></span></span></>:skillsets.map((eleskill,j=1)=>{
              if(j%4==0 && j!=0){
                return(<><br/><br/><span className="padding_block">{eleskill}&nbsp;<span onClick={()=>{removeskill(eleskill)}}><i class="fa fa-times" aria-hidden="true"></i></span></span></>);
              }
              else if(j==0)
              {
                return(<><br/><span className="padding_block">{eleskill}&nbsp;<span  onClick={()=>{removeskill(eleskill)}}><i class="fa fa-times" aria-hidden="true"></i></span></span></>)
              }
              return(<span className="padding_block">{eleskill}&nbsp;<span  onClick={()=>{removeskill(eleskill)}}><i class="fa fa-times" aria-hidden="true"></i></span></span>)
            })
            
            }
            </div>
            <br/>
            <div style={{"display":"flex"}} className="skillset_dropdown_block">
                     <DropdownButton size="sm" onSelect={handletypedropdown} id="dropdown-basic-button" title="Type of Skill">
                           <Dropdown.Item  eventKey='Programming'>Programming</Dropdown.Item>
                           <Dropdown.Item  eventKey='Databases'>Databases</Dropdown.Item>
                           <Dropdown.Item  eventKey='NonTechnical'>NonTechnical</Dropdown.Item>
                     </DropdownButton > 
                &nbsp;&nbsp;
                     <DropdownButton size="sm" id="dropdown-basic-button" onSelect={addnewskill} title="Skills">
                           {dataoption}
                    </DropdownButton>
            </div>
          </Col>
          </Row>
          <br/>
          <div>
          <Row>
          <Col sm={3}>
              <Col sm={6}>
                <label>
                  CTC
                </label>
              </Col>
              <Col sm={12}>
                  <input type="text" className="ctc_textbox" value={ctc} onChange={ctcfunc} placeholder="Enter CTC"/>
              </Col>
          </Col>
          
          <Col sm={3}>
              <Col sm={6}>
                <label>
                  ECTC
                </label>
              </Col>
              <Col sm={12}>
                 <input type="text"  className="ctc_textbox" onChange={ectcfunc} value={ectc} placeholder="Enter ECTC"/>
              </Col>
          </Col>
          <Col sm={3}>
              <Col sm={6}>
              <label>
                Notice&nbsp;Period  
              </label>
              </Col>
              <Col sm={12}>
                  <input type="number" min="0" className="ctc_textbox" onChange={noticeperiodfunc} value={noticeperiod} placeholder="Enter Notice Period"/>
              </Col>
          </Col>
          <Col sm={3}>
              <Col sm={6}>
              <label>
                Experience: 
              </label>
              </Col>
              <Col sm={12}>
                  <input type="number" min="0" className="ctc_textbox" value={experience} onChange={(e)=>{experiencefunc(e)}} placeholder="Enter Experience"/>
              </Col>
          </Col>
          </Row>
          
          </div>
          
          </>
          :false
          }
          
          <hr></hr>
          <div style={{"display":"flex"}}>
         <span onClick={()=>Change3rdshow(!showthirdblock)}> <i class="fa fa-angle-down" aria-hidden="true"></i></span>&nbsp;&nbsp;
          <p>Evaluation and Feedback</p>
          </div>
          {showthirdblock?
          <React.Fragment>
          <Col sm={12}>
              <Col sm={6}>
                <label>Evaluation&nbsp;Feedback:</label>
              </Col>
              <Col sm={12}>
                <input type="text" className="generalwidth_text" value={evaluationfeedback} onChange={evaluationfeedbackfunc} placeholder="Enter Evaluation Feedback" />
              </Col>
          </Col>
           <Col sm={12}>
           <Col sm={6}>
             <label>Remarks:</label>
           </Col>
           <Col sm={12}>
             <input type="text" className="generalwidth_text" value={remarks} onChange={remarksfunc} placeholder="Enter Remarks" />
           </Col>
       </Col>
       <br/><br/>
       </React.Fragment>
          :false}

          </div>
         
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>
              Close
                    </Button>
            {
              (!namevalid && name != localStorage.getItem("name") )|| genders != localStorage.getItem("gender") || skillsets != localStorage.getItem("skillset") || currentcompany != localStorage.getItem("currentcompany") || experience != localStorage.getItem("experience") || noticeperiod != localStorage.getItem("noticeperiod") || evaluationfeedback != localStorage.getItem("evaluationfeedback") || ctc != localStorage.getItem("ctc") || ectc != localStorage.getItem("ectc") || remarks != localStorage.getItem("remarks") ? <button type="submit" className="btn btn-primary">Save Changes</button> : <button type="submit" className="btn btn-secondary" disabled>Save Changes</button>

            }

        </Modal.Footer>
        </form>
      </Modal>
  )
}

