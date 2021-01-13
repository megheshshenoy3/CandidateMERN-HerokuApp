import React, { Component } from 'react'
import { Form, Col, Button, Row, Dropdown, Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import './formsass.css';
import { updatestate } from '../actions/';
import feedsvg from '../images/feedsvg.svg'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { connect } from 'react-redux'
import swal from 'sweetalert';
import SkillModal from './skillsetadditionModal'
var moment = require('moment');
var i = 1;
class Formsadd extends Component {

  state = {
    gender: "Gender",
    name: " ",
    namevalid: true,
    experiencevalid: false,
    noticevalid: false,
    ctcvalid: true,
    ectcvalid: false,
    skillset: [],
    change: true,
    showskillmodal: false
  }
  closeSkillModal = (e) => {
    this.setState({ showskillmodal: false });
    console.log("-------------->close<--" + this.state.showskillmodal);
  }
  openSkillModal = (e) => {
    this.setState(() => ({ showskillmodal: true }))
    console.log("-------------->open<--" + this.state.showskillmodal);
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    console.log("|||||||-" + e.target.elements.nameofcand.value);
    let newcandidate = {
      name: e.target.elements.nameofcand.value,
      gender: this.state.gender,
      currentcompany: e.target.elements.currentcompany.value,
      skillset: this.state.skillset,
      experience: e.target.elements.experience.value,
      noticeperiod: e.target.elements.noticeperiod.value,
      evaluationfeedback: e.target.elements.evaluationfeedback.value,
      ctc: e.target.elements.ctc.value,
      ectc: e.target.elements.ectc.value,
      remarks: e.target.elements.remarks.value,
      createdDate: moment().format('YYYY MM DD')
    }

    axios.post('/addfetch/add', newcandidate)
      .then(res => {
        swal({
          title: "Good job!",
          text: "New Record Added Succesfully!",
          icon: "success",
          timer: 300000
        });
        console.log("ResultPost" + res);

        let localcandidateinfo = this.props.candidateinfo
        localcandidateinfo.push(newcandidate)
        this.props.updatestate(localcandidateinfo)
        console.log("New data in redux" + localcandidateinfo)
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
  nametextChange = (e) => {
    this.setState({ name: e.target.value })
    this.nametextvalid(e.target.value)
    console.log("yyyy", e.target.value)
    this.nametextvalid(e.target.value)
    //alert(typeof this.props.candidateinfo)
  }
  
  

  nametextvalid = (word) => {
    let letters = /^[a-zA-Z ]{2,30}$/;
    console.log("func", word)
    let text = word;
    letters.test(word) ? this.setState({ namevalid: false }) : this.setState({ namevalid: true })

  }
  ctctextChange = (e) => {
    console.log("ctc", e.target.value)
    this.setState({ctc:e.target.value})
  }
  
  ectctextChange = (e) => {
    console.log("ctc", e.target.value)
    this.ectctextvalid(e.target.value)
  }
  skillsfrommodal = (skillssent) => {
    this.setState(() => ({ skillset: skillssent }), console.log(this.state.skillset))
    console.log("SkillsFromChild" + skillssent)
    console.log(skillssent)
    this.setState({ showskillmodal: false });
    console.log(this.state.skillset.length)
  }
  handleDropdown = (evtKey, evt) => {
    console.log(evtKey);
    this.setState(() => ({ gender: evtKey }))
  }
   removeskill=(skilltoremove)=>{
    // console.log("Call MAde"+skilltoremove)
    // console.log(skilltoremove)
    // console.log("---"+skillsets)
    // let skill=skillsets;
    // let newskillset=[]
    // let indexofelement=skill.indexOf(skilltoremove)
    // console.log("NewSet"+newskillset)
    // var filtered = skill.filter(function(value, index, arr){ return value !=skilltoremove;});
    // newskillset=filtered
    // ChangeSkillSet(newskillset)
  }
  // change
  render() {
    return (
      <div className="Only">
        <Container className="themed-container" fluid="sm">
          <Row>

            <Col sm={6} className="form_style_2" >
              <p className="candidate_text">CANDIDATE&nbsp;INFORMATION</p>
              <form onSubmit={this.handleSubmit}>
                <Row>
                  <Col sm={6}>
                    <Col sm={6}><label>NAME:</label></Col>
                    <Col sm={6}> <input type="text" className="inputext_design" name="nameofcand" onChange={(e) => { this.nametextChange(e) }} placeholder="Enter Name" required />
                      {this.state.namevalid ? <p className="error_text">Enter Name in Valid Format</p> : <p></p>}</Col>
                  </Col>
                  <Col sm={6}>
                    <Col sm={10}>
                      <div style={{ "display": "flex" }}>
                        <label>EXPERIENCE: </label>
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 250, hide: 400 }}
                          overlay={<Tooltip id="button-tooltip">
                            Enter Experience in Months
                     </Tooltip>}>
                          <Button variant="light" className="experience_questionmark"><i class="fa fa-question-circle" aria-hidden="true"></i>
                          </Button></OverlayTrigger>
                      </div>
                    </Col>
                    <input type="number" step="any" min="0" className="inputext_design experience_textbox" placeholder="Experience" name="experience" required />
                  </Col>
                </Row>
                {/* 2nd row  */}
                <br />
                <Col sm={6}>
                  <label>Current&nbsp;Company:</label>
                </Col>
                <Col sm={12}>
                  <input type="text" className="company_design_textbox inputext_design" required placeholder="Current Company" name="currentcompany" />
                </Col>
                {/* 3rd row  */}
                <br />
                {this.state.showskillmodal ? <SkillModal close={()=>this.closeSkillModal()} skillstosend={this.state.skillset} submission={this.skillsfrommodal} /> : false}
                <Col sm={6}>
                  <label>Skill&nbsp;Set:</label><span onClick={this.openSkillModal}><i className="fas fa-pencil-alt pencil_font"></i></span>
                </Col>
                <div className="displayskill_block">
            {
           this.state.skillset.length==0?<p className="skillset_warning">**Please Add Skills?Click on Pencil Icon</p>:this.state.skillset.length==1?<><br/><span className="padding_block">{this.state.skillset[0]}&nbsp;</span></>:this.state.skillset.map((eleskill,j=1)=>{
              if(j%4==0 && j!=0){
                return(<><br/><br/><span className="padding_block">{eleskill}&nbsp;<span onClick={()=>{this.removeskill(eleskill)}}></span></span></>);
              }
              else if(j==0)
              {
                return(<><br/><span className="padding_block">{eleskill}&nbsp;<span  onClick={()=>{this.removeskill(eleskill)}}></span></span></>)
              }
              return(<span className="padding_block">{eleskill}&nbsp;<span  onClick={()=>{this.removeskill(eleskill)}}></span></span>)
            })
            
            }
            </div>
                {/* 4th row  */}
                <br />
                <Col sm={6}>
                  <label>Evaluation&nbsp;Feedback:</label>
                </Col>
                <Col sm={12}>
                  <input type="text" className="company_design_textbox inputext_design" placeholder="Enter Evaluation Feedback" name="evaluationfeedback" />
                </Col>
                {/* 5th row  */}
                <br />
                <Row>
                  <Col sm={2}>
                    <Col sm={6}>
                      <label>CTC</label>
                    </Col>
                    <Col sm={12}> <input type="text"  className="fifthrow inputext_design"  placeholder="Enter CTC" name="ctc" /></Col>
                  </Col>
                  <Col sm={2} className="ectc_block">
                    <Col sm={6}>
                      <label>ECTC</label>
                    </Col>
                    <Col sm={12}> <input type="text"   className=" fifthrow inputext_design"  placeholder="Enter ECTC" name="ectc" /></Col>
                  </Col>
                  <Col sm={3} className="notice_block">
                    <Col sm={6}>
                      <label>Notice&nbsp;Period</label>
                    </Col>
                    <Col sm={12}>
                      <div style={{ "display": "flex" }} className="notice_flex_block_"> <input type="number" className="fifthrow inputext_design" min="0" placeholder="Enter NoticePeriod" step="any" name="noticeperiod" />

                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 250, hide: 400 }}
                          overlay={<Tooltip id="button-tooltip">
                            Enter Notice Period in Days
                     </Tooltip>}>
                          <Button variant="light"><i class="fa fa-question-circle" aria-hidden="true"></i>
                          </Button>
                        </OverlayTrigger>
                      </div>
                    </Col>
                  </Col>
                  <Col sm={3}>
                    <Col sm={12} className="notice_block">
                      <Dropdown onSelect={this.handleDropdown} >
                        <Dropdown.Toggle style={{ "width": "180px" }} className="dropdown_2" variant="secondary" id="dropdown-basic">
                          {this.state.gender}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                          <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
                          <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Col>
                </Row>
                {/*6th block*/}
                <br />
                <Col sm={6}>
                  <label>Remarks:</label>
                </Col>
                <Col sm={12}>
                  <input type="text" className="company_design_textbox inputext_design" placeholder="Enter Remarks" name="remarks" />
                </Col>
                <br />
                <center>
                  {this.state.namevalid ? <button type="submit" className="btn btn-secondary" disabled >Add New</button> : <button type="submit" class="btn btn-success" >Add New</button>}
                </center>


              </form>
            </Col>
            <Col sm={6}>
              <img src={feedsvg} className="svg_image" />
            </Col>

          </Row>
          <br />
          <br />

        </Container >
      </div>



    )
  }
}
const mapDispatchToProps = (data) => {
  return {
    updatestate
  }
}
const mapStateToProps = state => ({
  candidateinfo: state.Candidateinfo
});
export default connect(mapStateToProps, mapDispatchToProps())(Formsadd)

{/* <br /><br />
        <div >

          <Row>

            <Col sm={6} className="form_style_2" >
              <p className="candidate_text">CANDIDATE&nbsp;INFORMATION</p>
              <form onSubmit={this.handleSubmit}>
                <Row>
                  <Col sm={6}>
                    <Col sm={6}><label>Name:</label></Col>
                    <Col sm={6}> <input type="text" className="inputext_design" name="nameofcand" onChange={(e) => { this.nametextChange(e) }} placeholder="Enter Name" required/> 
                    {this.state.namevalid ? <p className="error_text">Enter Name in Valid Format</p> : <p></p>}</Col>
                  </Col>
                  <Col sm={6}>
                    <Col sm={6}><label>Experience:</label></Col>
                    <input type="text" className="inputext_design" placeholder="Experience" name="experience" required />
                  </Col>
                </Row>
                {/* 2nd row  */}
        //         <br />
        //         <Col sm={6}>
        //           <label>Current&nbsp;Company:</label>
        //         </Col>
        //         <Col sm={12}>
        //           <input type="text" className="company_design_textbox inputext_design" required placeholder="Current Company" name="currentcompany" />
        //         </Col>
        //         {/* 3rd row  */}
        //         <br />
        //         <Col sm={6}>
        //           <label>Skill&nbsp;Set:</label>
        //         </Col>
        //         <Col sm={12}>
        //           <input type="text" className="company_design_textbox inputext_design" required placeholder="Enter SkillSet" name="skillset" />
        //         </Col>
        //         {/* 4th row  */}
        //         <br />
        //         <Col sm={6}>
        //           <label>Evaluation&nbsp;Feedback:</label>
        //         </Col>
        //         <Col sm={12}>
        //           <input type="text" className="company_design_textbox inputext_design" placeholder="Enter Evaluation Feedback" name="evaluationfeedback" />
        //         </Col>
        //         {/* 5th row  */}
        //         <br />
        //         <Row>
        //           <Col sm={2}>
        //             <Col sm={6}>
        //               <label>CTC</label>
        //             </Col>
        //             <Col sm={12}> <input type="text" className="fifthrow inputext_design" onChange={this.ctctextChange} placeholder="Enter CTC" name="ctc" /></Col>
        //           </Col>
        //           <Col sm={2} className="ectc_block">
        //             <Col sm={6}>
        //               <label>ECTC</label>
        //             </Col>
        //             <Col sm={12}> <input type="text" className=" fifthrow inputext_design" onChange={this.ectctextChange} placeholder="Enter ECTC" name="ectc" /></Col>
        //           </Col>
        //           <Col sm={2} className="notice_block">
        //             <Col sm={6}>
        //               <label>Notice&nbsp;Period</label>
        //             </Col>
        //             <Col sm={12}> <input type="text" className="fifthrow inputext_design" placeholder="Enter NoticePeriod" name="noticeperiod"  /></Col>
        //           </Col>
        //           <Col sm={4}>
        //             <Col sm={12}>
        //               <Dropdown onSelect={this.handleDropdown} >
        //                 <Dropdown.Toggle style={{ "width": "180px" }} className="dropdown_2" variant="secondary" id="dropdown-basic">
        //                   {this.state.gender}
        //                 </Dropdown.Toggle>

        //                 <Dropdown.Menu>
        //                   <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
        //                   <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
        //                   <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
        //                 </Dropdown.Menu>
        //               </Dropdown>
        //             </Col>
        //           </Col>
        //         </Row>
        //         {/*6th block*/}
        //         <br />
        //         <Col sm={6}>
        //           <label>Remarks:</label>
        //         </Col>
        //         <Col sm={12}>
        //           <input type="text" className="company_design_textbox inputext_design" placeholder="Enter Remarks" name="remarks" />
        //         </Col>
        //         <br />
        //         <center>
        //           {this.state.namevalid ? <button type="submit" className="btn btn-secondary" disabled >Add New</button> : <button type="submit" className="btn btn-primary">Add New</button>}
        //         </center>


        //       </form>
        //     </Col>
        //   </Row>


        // </div> */}