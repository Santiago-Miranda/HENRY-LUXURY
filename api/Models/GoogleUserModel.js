import mongoose from "mongoose";


const GoogleUserSchema =  mongoose.Schema({
    name:{type:String},
    email: {type: String, required: true},
    image:{type:String},
})
  
  
  const GoogleUser = mongoose.model('GoogleUser', GoogleUserSchema)

  export default GoogleUser