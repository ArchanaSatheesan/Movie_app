//importing
const express=require ('express');
const movieModel = require('./Model/Moviedb');
const app=new express();
const cors=require ('cors');

//middleware
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//api creation

//post
app.post('/addmovies',async(req,res)=>{
    console.log(req.body)
    var data=await movieModel (req.body);
    data.save();
    res.send({status:"data saved"})
})

//view
app.get('/viewmovies',async(req,res)=>{
    var data=await movieModel.find();
    res.json(data);
})

app.get('/viewmovies/:id',async(req,res)=>{
    let id=req.params._id;
    var data=await movieModel.findOne(id);
    data.save();
    console.log("data view");
    res.send({status:"data viewed"})
    res.json(data);
   
})

//update
app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id;
    try{
        var data=await movieModel.findByIdAndUpdate(id,req.body)
        res.json({status:"updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})

//delete books
app.delete('/deletemovies/:id',async(req,res)=>{
    console.log("delete")
    console.log(req.params)
    let id=req.params.id;
    await movieModel.findByIdAndDelete(id);

    res.json({status:"deleted"})

})






















//port
app.listen(3008,()=>{
    console.log("app running in port 3008");
})
