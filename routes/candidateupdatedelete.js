const router=require('express').Router()
const Candidate=require('../models/candidate');

router.route('/update/:id').put((req, res) => {
    Candidate.findById(req.params.id).then(candidate=>{
        candidate.name=req.body.name;
        candidate.gender=req.body.gender;
        candidate.experience=req.body.experience;
        candidate.currentcompany=req.body.currentcompany;
        candidate.noticeperiod=req.body.noticeperiod;
        candidate.evaluationfeedback=req.body.evaluationfeedback;
        candidate.ctc=req.body.ctc;
        candidate.ectc=req.body.ectc;
        candidate.remarks =req.body.remarks;        
        candidate.skillset=req.body.skillset;
        candidate.save().then(()=>{console.log("Updated Successfully")
        res.json("Updated Successfully")})
        .catch(err=>{res.status(400).json(err)});
    })
    
});
router.route('/delete/:id').delete((req, res) => {
        Candidate.findByIdAndDelete(req.params.id)
          .then(() => res.json('Candidate deleted.'))
          .catch(err => res.status(400).json('Error: ' + err));
      });
    module.exports=router;