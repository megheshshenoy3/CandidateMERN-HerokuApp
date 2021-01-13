import React,{useState} from 'react'
import './skillsetadditionModal.css'
import useForceUpdate from './useForceUpdate'
import {Modal,Button,Row,Col,Dropdown,DropdownButton} from 'react-bootstrap'
export default function SkillsetadditionModal(props) {
    var [skillsets,ChangeSkillset]=useState(props.skillstosend)
    //var [skillcomb,Changeskillcomb]=useState([])
    var [selectedskill,Changeskilltype]=useState([])
    var [varofchange,changevar]=useState(true)
    var [scripting,changescript]=useState(["WebDesigning","Javascript","PHP","NodeJs","ReactJs","AngularJs","VueJs","Django","ExpressJs","Java","Ruby","Pearl","Python","HTML","CSS"]);
    var [database,changedatabase]=useState(["MongoDb","MySQL","MariaDb","IndexedDB","PostgressSql",""])
    var [nontechnical,changenontechnical]=useState(["Singing","Dancing","Comedian","Cooking"]);
    let skill=null;
    let [dataoption,changedataoption]=useState(<Dropdown.Item href="#/action-1" disabled>No Choice</Dropdown.Item>)
    var i=1;
    let temp=[]
    // const forceUpdate =useforceUpdate
    const addnewskill=(evtKey,evt)=>{
        let skill=skillsets;
        skill.push(evtKey)
        ChangeSkillset(skill)
        changevar(({varofchange})=>({varofchange:!varofchange}))
        console.log("newskill"+skillsets)
        changedataoption(selectedskill.map(ele=>{
          if(skillsets.includes(ele)==false){
              return(<Dropdown.Item  eventKey={ele}>{ele}</Dropdown.Item>)
          }
      }));
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
        Changeskilltype(typeofoption)
         changedataoption(typeofoption.map(ele=>{
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
        ChangeSkillset(newskillset)
    }            
    return (
        <div>
          
        <Modal    show={true} onHide={props.close} dialogClassName="modal-180w">
        <Modal.Header closeButton>
          <Modal.Title>Add Skill Sets That you Pocess</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="skilldisplaybox_design">
            
            <div className="displayskill_block">
            {
            skillsets.length==0?<p className="skilladd_warning">**Please Enter your Skills</p>:skillsets.length==1?<><br/><span className="padding_block">{skillsets[0]}&nbsp;<span  onClick={()=>{removeskill(skillsets[0])}}><i class="fa fa-times" aria-hidden="true"></i></span></span></>:skillsets.map((eleskill,j=1)=>{
              if(j%3==0 && j!=0){
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
        </div>
        <div style={{"display":"flex"}}>
        <DropdownButton size="sm" onSelect={handletypedropdown} id="dropdown-basic-button" title="Type of Skill">
  <Dropdown.Item  eventKey='Programming'>Programming</Dropdown.Item>
  <Dropdown.Item  eventKey='Databases'>Databases</Dropdown.Item>
  <Dropdown.Item  eventKey='NonTechnical'>NonTechnical</Dropdown.Item>
</DropdownButton > 
&nbsp;&nbsp;
<DropdownButton size="sm" id="dropdown-basic-button" onSelect={addnewskill} title="Add Skills">
{dataoption}
</DropdownButton>
</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>props.submission(skillsets)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
