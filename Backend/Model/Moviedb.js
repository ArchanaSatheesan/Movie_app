const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://archanasatheesan:archanasatheesan@cluster0.zb7ujpa.mongodb.net/Movieapp?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let Schema=mongoose.Schema;
const movieSchema=new Schema({
    MovieName:String,
    language:String,
    actor:String,
    actress:String,
    director:String,
    producer:String,
    camera:String,
    year:Number
});
var movieModel=mongoose.model("movies",movieSchema);
module.exports=movieModel;