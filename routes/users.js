const mongoose = require('mongoose');
const plm=require('passport-local-mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/pin');
const usershema = new mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  ProfileImage:String,
  Contact:Number,
  boards:{ 
    type:Array,
    default:[]
  },
  posts:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'post'
    }
  ]
});
usershema.plugin(plm);
module.exports= mongoose.model('User', usershema); 