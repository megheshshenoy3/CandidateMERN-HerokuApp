const mongoose=require('mongoose');
let Schema=mongoose.Schema;

var CandidateSchema=new Schema({
    name:{type:String,required:true},
    gender:{type:String,required:true},
    experience:{type:Number,required:true,default:'0'},
    currentcompany:{type:'String',default:'None'},
    skillset:[{type:String,default:'None'}],
    noticeperiod:{type:Number,default:0},
    remarks:{type:String},
    evaluationfeedback:{type:String},
    ctc:{type:mongoose.Decimal128},
    ectc:{type:mongoose.Decimal128},
    createdDate:{type:String,required:true},
});

const Candidatexp=mongoose.model('Candidate',CandidateSchema);
module.exports=Candidatexp;