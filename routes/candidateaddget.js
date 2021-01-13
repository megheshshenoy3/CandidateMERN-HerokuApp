const router=require('express').Router();
const Candidate=require('../models/candidate');

router.get('/',(req,res)=>{
    
        Candidate.find({ }).then(result=>{
            res.json(result);
        })
        .catch(err=>{
            res.json(err);
        })
})
router.post('/add',(req,res)=>{
    let name=req.body.name;
    let gender=req.body.gender;
    let experience=req.body.experience;
    let currentcompany=req.body.currentcompany;
   // let skillset=req.body.skillset;
    let noticeperiod=req.body.noticeperiod;
    let evaluationfeedback=req.body.evaluationfeedback;
    let ctc=req.body.ctc;
    let ectc=req.body.ectc;
    let createdDate=req.body.createdDate;
    let remarks=req.body.remarks;
    console.log(req.body)
    let skillset=req.body.skillset;
    const newCandidatedata=new Candidate({
        name,
        gender,
        experience,
        currentcompany,
        skillset,
        noticeperiod,
        evaluationfeedback,
        ctc,
        ectc,
        createdDate,
        remarks
    })
    newCandidatedata.save().then(resultinfo=>{
        res.json("New Candidate Added");
    })
    .catch(err=>{
        res.json(err)
    });
    
})
module.exports=router;